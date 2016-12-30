import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  dispatch: PropTypes.func.isRequired,

};

class App extends Component {
  componentDidMount() {
    const { dispatch, topmenu } = this.props;
  }

  renderContent() {

  }

  render() {
    const { topmenu } = this.props;
    var topmenus = [];
    var topmenuData = topmenu.data; 
    for (var item of topmenuData) {
      topmenus.push(<div>{item['name']}</div>);    
    }

    return (
      <div>
        {topmenus}
        <topmenu>
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
