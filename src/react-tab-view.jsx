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

  render: function(){
    let that = this;
    let {baseWidth} = this.props;
    let childrenLength = this.props.children.length;
    return (
      <div className="react-tab-view">
        <nav className="tab-title-items">
          {React.Children.map(this.props.children, (element, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} className={that.getTitleItemCssClasses(index)}>{element.props.name}</div>)
          })}
        </nav>
        <div className="tab-content-items">
          {React.Children.map(this.props.children, (element, index) => {
            return (<div className={that.getContentItemCssClasses(index)}>{element}</div>)
          })}
        </div>
      </div>
    )
  }
});
