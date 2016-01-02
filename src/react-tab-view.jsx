import React from 'react';
import './react-tab-view.css';

export default React.createClass({
  getInitialState: function(){
    return {currentIndex: 0}
  },
  getTitleItemCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },

  getContentItemCssClasses: function(index){
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
  },

  getWidth(elem) {
    return elem.getBoundingClientRect().width || elem.offsetWidth;
  },

  componentDidMount(){
    let baseWidth = this.getWidth(this.refs.tabView);
    this.setState({baseWidth: baseWidth});
  },

  swipeStart: function (e) {
    let posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
    let posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;
    this.setState({
      isDragging: true,
      startX: posX,
      startY: posY,
      curX: posX,
      curY: posY
    });
  },

  swipeMove(e){
    let {isDragging} = this.state;
    let posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
    let posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;

    isDragging && this.setState({
      isDragging: true,
      curX: posX,
      curY: posY
    });
  },

  swipeEnd(e){
    let {startX, curX, startY, curY, currentIndex} = this.state;
    let threshold = (window.innerWidth / 10),
      yAxisMoved = Math.abs(startY - curY),
      xAxisMoved = Math.abs(startX - curX),
      isYAxisMoved = yAxisMoved > xAxisMoved,
      isTouchTap = xAxisMoved < 5,
      direction = this.getSwipeDirection(startX, curX),
      nextIndex = currentIndex,
      maxIndex = React.Children.count(this.props.children) - 1;

    if(isYAxisMoved || isTouchTap) {
      this.setState({isDragging: false});
      return;
    }

    if(xAxisMoved > threshold){
      if(direction === 'left' && currentIndex < maxIndex){
        nextIndex = currentIndex + 1;
      } else if(direction == 'right' && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }
    }

    this.setState({
      isDragging: false,
      currentIndex: nextIndex
    });
  },

  getSwipeDirection(start, end){
    if(start < end) return 'right';
    else return 'left'
  },

  render: function(){
    let that = this;
    let {baseWidth, currentIndex, isDragging} = this.state;
    let childrenLength = React.Children.count(this.props.children);

    let itemsStyle = baseWidth ? {
      width: baseWidth * childrenLength,
      transform: `translate3d(-${baseWidth * currentIndex}px, 0, 0)`
    } : {};

    let itemStyle = baseWidth ? { width: baseWidth } : {};
    let indicatorStyle = baseWidth ? {
      width: baseWidth / childrenLength,
      transform: `translate3d(${baseWidth * currentIndex / childrenLength}px, 0, 0)`
    } : {};

    return (
      <div ref="tabView" className="react-tab-view">
        <nav className="tab-title-items">
          {React.Children.map(this.props.children, (element, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
          })}
        </nav>
        <div className="indicator" style={indicatorStyle}></div>
        <div className="tab-content-items" style={itemsStyle}
             onMouseDown={this.swipeStart}
             onMouseMove={isDragging ? this.swipeMove: null}
             onMouseUp={this.swipeEnd}
             onMouseLeave={isDragging ? this.swipeEnd: null}
             onTouchStart={this.swipeStart}
             onTouchMove={isDragging ? this.swipeMove: null}
             onTouchEnd={this.swipeEnd}
             onTouchCancel={isDragging ? this.swipeEnd: null}>
          {React.Children.map(this.props.children, (element, index) => {
            return (<div style={itemStyle} className="tab-content-item">{element}</div>)
          })}
        </div>
      </div>
    )
  }
});
