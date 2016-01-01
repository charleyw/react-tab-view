import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ReactTabView from '../src/react-tab-view'

let App = React.createClass({
  render:function(){
    return (<div className="container">
      <ReactTabView baseWidth={400}>
        <div name="red">
          <div className="red">我是红色的标签页</div>
        </div>
        <div name="blue">
          <div className="blue">我是蓝色的标签页</div>
        </div>
        <div name="yellow">
          <div className="yellow">我是黄色的标签页</div>
        </div>
      </ReactTabView>
    </div>);
  }
});
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
