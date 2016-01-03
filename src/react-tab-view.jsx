import React from 'react';
import './react-tab-view.css';

export default React.createClass({
  propTypes: {
    isDraggable: React.PropTypes.bool
  },

  touchState: {},

  getInitialState: function(){
    return {currentIndex: 0, baseWidth: 0}
  },

  getTitleItemCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },

  getWidth(elem) {
    return elem.getBoundingClientRect().width || elem.offsetWidth;
  },

  componentDidMount(){
    let baseWidth = this.getWidth(this.refs.tabView);
    this.setState({baseWidth: baseWidth});
    this.adaptHeight();
  },

  componentDidUpdate(prevProps, prevState){
    if(prevState.currentIndex !== this.state.currentIndex){
      this.adaptHeight();
    }
  },

  adaptHeight(){
    let { currentIndex } = this.state;
    this.refs.tabItems.style.height = this.refs[`tab-item-${currentIndex}`].offsetHeight + 'px';
  },

  swipeStart: function (e) {
    let posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
    let posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;
    this.touchState = {
      isDragging: true,
      startX: posX,
      startY: posY,
      curX: posX,
      curY: posY
    };
  },

  swipeMove(e){
    if(!this.touchState.isDragging) return;

    let {isDraggable} = this.props;
    let {currentIndex, baseWidth} = this.state;
    let {startX, startY, isSwiping, isScrolling} = this.touchState;
    let posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
    let posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;
    let yAxisMoved = Math.abs(startY - posY);
    let xAxisMoved = Math.abs(startX - posX);

    if(!isSwiping && !isScrolling){
      if(xAxisMoved > 7){
        isSwiping = true;
      } else if(yAxisMoved > 10){
        isScrolling = true;
      }
    }

    if(isSwiping){
      e.preventDefault();
      isDraggable && this.setState({
        isDragging: true,
        currentBaseTranslate: currentIndex * baseWidth + this.touchState.startX - posX
      });
    }

    this.touchState = Object.assign(this.touchState, {
      isScrolling: isScrolling,
      isSwiping: isSwiping,
      isDragging: true,
      curX: posX,
      curY: posY
    });
  },

  swipeEnd(e){
    let {currentIndex} = this.state;
    let {startX, curX, isSwiping} = this.touchState;
    let threshold = 20,
      xAxisMoved = Math.abs(startX - curX),
      direction = this.getSwipeDirection(startX, curX),
      nextIndex = currentIndex,
      maxIndex = React.Children.count(this.props.children) - 1;

    if(isSwiping){
      if(xAxisMoved > threshold){
        if(direction === 'left' && currentIndex < maxIndex){
          nextIndex = currentIndex + 1;
        } else if(direction == 'right' && currentIndex > 0) {
          nextIndex = currentIndex - 1;
        }
      }
    }

    this.setState({isDragging: false, currentIndex: nextIndex});
    this.touchState = Object.assign(this.touchState, {isDragging: false, isSwiping: false, isScrolling: false});
  },

  getSwipeDirection(start, end){
    if(start < end) return 'right';
    else return 'left'
  },

  render: function(){
    let that = this;
    let {baseWidth, currentIndex, isDragging, currentBaseTranslate} = this.state;
    let childrenLength = React.Children.count(this.props.children);

    let itemsStyle = !!baseWidth ? {
      width: baseWidth * childrenLength,
      transitionProperty: isDragging ? 'none' : 'all',
      transform: `translate3d(-${isDragging ? currentBaseTranslate : baseWidth * currentIndex}px, 0, 0)`
    } : {};

    let itemStyle = !!baseWidth ? { width: baseWidth } : {};
    let indicatorStyle = !!baseWidth ? {
      width: baseWidth / childrenLength,
      transitionProperty: isDragging ? 'none' : 'all',
      transform: `translate3d(${isDragging ? currentBaseTranslate / childrenLength : baseWidth * currentIndex / childrenLength}px, 0, 0)`
    } : {};

    return (
      <div ref="tabView" className="react-tab-view">
        <nav className="tab-title-items">
          {React.Children.map(this.props.children, (element, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
          })}
        </nav>
        <div className="indicator" style={indicatorStyle}></div>
        <div ref="tabItems" className="tab-content-items" style={itemsStyle}
             onMouseDown={this.swipeStart}
             onMouseMove={this.swipeMove}
             onMouseUp={this.swipeEnd}
             onMouseLeave={this.swipeEnd}
             onTouchStart={this.swipeStart}
             onTouchMove={this.swipeMove}
             onTouchEnd={this.swipeEnd}
             onTouchCancel={this.swipeEnd}>
          {React.Children.map(this.props.children, (element, index) => {
            return (<div ref={`tab-item-${index}`} style={itemStyle} className="tab-content-item">{element}</div>)
          })}
        </div>
      </div>
    )
  }
});
