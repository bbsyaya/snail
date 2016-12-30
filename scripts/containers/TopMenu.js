import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class TopMenuContainer extends Component {

	render() {
		const { topmenu } = this.props;
		var topmenus = [];
		var topmenuData = topmenu.data; 
		for (var item of topmenuData) {
		  topmenus.push(<a className="toolbar-item toolbar-genre">{item['desc']}</a>);    
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