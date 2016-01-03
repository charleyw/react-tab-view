import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ReactTabView from '../src/react-tab-view'

let App = React.createClass({
  render:function(){
    return (<div className="container">
      <ReactTabView isDraggable={true}>
        <div name="React">
          <div className="red">
            Why React?
          </div>
          <p className="content-padded">React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.</p>
          <p className="content-padded">We built React to solve one problem: building large applications with data that changes over time.</p>
          <h2>Simple</h2>
          <p className="content-padded">Simply express how your app should look at any given point in time, and React will automatically manage all UI updates when your underlying data changes.</p>
          <h2>Declarative</h2>
          <p className="content-padded">When the data changes, React conceptually hits the "refresh" button, and knows to only update the changed parts.</p>
          <h2>Build Composable Components</h2>
          <p className="content-padded">React is all about building reusable components. In fact, with React the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.</p>
        </div>
        <div name="VIRTUAL DOM">
          <div className="blue"></div>
        </div>
        <div name="DATA FLOW">
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
