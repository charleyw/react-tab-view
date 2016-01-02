import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ReactTabView from '../src/react-tab-view'

let App = React.createClass({
  render:function(){
    return (<div className="container">
      <ReactTabView>
        <div name="Red">
          <div className="red"></div>
        </div>
        <div name="Blue">
          <div className="blue"></div>
        </div>
        <div name="Orange">
          <div className="yellow"></div>
        </div>
      </ReactTabView>
    </div>);
  }
});
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
