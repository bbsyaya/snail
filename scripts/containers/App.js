import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TopMenuContainer from '../containers/TopMenu';
import LeftMenuContainer from '../containers/LeftMenu';


const propTypes = {
  dispatch: PropTypes.func.isRequired,

};

class App extends Component {
  componentDidMount() {
    const { dispatch, topmenu } = this.props;
  }

  render() {
    return (
      <div>
        <div className="songs">
          <TopMenuContainer />
        </div>      
        <div>
          <LeftMenuContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  const { topmenu } = state;

  return {
    topmenu,
  };
}


export default connect(mapStateToProps)(App);
