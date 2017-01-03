import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class LeftMenuContainer extends Component {
  render() {
    const {topmenu} = this.props;

    var topMenuData = topmenu.data;
    var selectedTopMenuName = topmenu.selected;

    var leftMenuData = null;
    for (var item of topMenuData) {
      if (item['name'] == selectedTopMenuName) {
        leftMenuData = item['leftMenus']
      }
    }

    var leftMenus = [];
    for (var item of leftMenuData) {
      leftMenus.push(<li><a>{item}</a></li>);
    } 

    return (
      <div className="side">
        <nav className="dr-menu dr-menu-open">
          <ul>
            {leftMenus}
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
