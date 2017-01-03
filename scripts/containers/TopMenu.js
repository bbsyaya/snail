import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import changeTopMenu from '../actions/TopMenuAction';

class TopMenuContainer extends Component {
	selectTopMenu(menuName) {
		const { dispatch } = this.props;
		dispatch(changeTopMenu(menuName));
	}

	render() {
		const { topmenu } = this.props;
		var topmenus = [];
		var topmenuData = topmenu.data; 

		for (var item of topmenuData) {

		  var menuName = item["name"];

		  topmenus.push(<a className="toolbar-item toolbar-genre" 
		  	key={item['name']}
		  	onClick={this.selectTopMenu(menuName)}>{item['desc']}</a>);    
		}

       return (
		   <div className="toolbar">
		       <div className="container">
		         <div className="toolbar-items">   
		           {topmenus} 
		         </div>
		       </div>
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

export default connect(mapStateToProps)(TopMenuContainer);