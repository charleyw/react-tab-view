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

  render: function(){
    let that = this;
    let {baseWidth, currentIndex} = this.state;
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
        <div className="tab-content-items" style={itemsStyle}>
          {React.Children.map(this.props.children, (element, index) => {
            return (<div style={itemStyle} className={that.getContentItemCssClasses(index)}>{element}</div>)
          })}
        </div>
      </div>
    )
  }
});
