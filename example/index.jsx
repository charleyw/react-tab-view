import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ReactTabView from '../src/react-tab-view'

let App = React.createClass({
  render:function(){
    return (<div className="container">
      <ReactTabView isDraggable={true}>
        <div name="REACT">
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
        <div name="JSX">
          <div className="blue">JSX Syntax</div>
          <p className="content-padded">We strongly believe that components are the right way to separate concerns rather than "templates" and "display logic." We think that markup and the code that generates it are intimately tied together. Additionally, display logic is often very complex and using template languages to express it becomes cumbersome.</p>
          <p className="content-padded">We've found that the best solution for this problem is to generate HTML and component trees directly from the JavaScript code such that you can use all of the expressive power of a real programming language to build UIs.</p>
          <p className="content-padded">In order to make this easier, we've added a very simple, optional HTML-like syntax to create these React tree nodes.</p>
        </div>
        <div name="FLUX">
          <div className="yellow">Overview</div>
          <p className="content-padded">Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.</p>
        </div>
      </ReactTabView>
    </div>);
  }
});
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
