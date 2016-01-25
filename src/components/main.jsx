require('normalize.css');
require('styles/App.css.scss');

import React from 'react';
import Chessboard from './landscapes/Chessboard';

class AppComponent extends React.Component {
  render() {
    return (
      <Chessboard />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
