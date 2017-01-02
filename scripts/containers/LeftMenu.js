import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class LeftMenuContainer extends Component {
  render() {
    return (
      <div className="side">
        <nav className="dr-menu dr-menu-open">
          <ul>
            <li><a href="#">Jason Quinn</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </div>          
    )
  }
}   

function mapStateToProps(state) {
  const { topmenu } = state;

  return {
    topmenu
  };
} 

export default connect(mapStateToProps)(LeftMenuContainer); 
