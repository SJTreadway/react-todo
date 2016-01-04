import React from 'react';
import AddItem from './AddItem';
import List from './List';

var ListContainer = React.createClass({
	getInitialState() {
		return {
			list: []
		};
	},

	handleAddItem(newItem) {
		this.setState({
			list: this.state.list.concat(newItem)
		})
	},

	handleRemoveItem(i) {
		var arrCopy = this.state.list.slice();
		arrCopy.splice(i, 1);
		this.setState({
			list: arrCopy
		})
	},

	render() {
		return (
			<div className="col-sm-6 col-md-offset-3">
	        <div className="col-sm-12">
	          <h3 className="text-center"> Todo List </h3>
	          <AddItem addItem={this.handleAddItem}/>
	          <List items={this.state.list} remove={this.handleRemoveItem}/>
	        </div>
	      </div>
		)
	}
});

export default ListContainer;