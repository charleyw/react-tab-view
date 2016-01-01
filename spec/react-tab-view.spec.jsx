import React from 'react/addons';
import ReactTabView from '../src/react-tab-view.jsx';

describe('ReactTabView', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactTabView/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-tab-view');
  });
});
