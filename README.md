# react tab view

Get the AMD module located at `react-tab-view.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactTabView': 'react-tab-view'
  }
});

require(['react', 'ReactTabView'], function(React, ReactTabView) {

  React.render(React.createElement(ReactTabView), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
