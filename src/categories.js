import React,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Categories extends React.Component{
	constructor(props){
		super(props);
		this.state = {open:false};
	}
	handleToggle = ()=>	{
		this.setState({open: !this.state.open});
	}
	render(){
		return(
			<div>
				&nbsp; &nbsp;&nbsp;&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp; 	&nbsp; &nbsp;&nbsp;&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp;
				&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;	&nbsp; &nbsp;&nbsp;&nbsp;
				<RaisedButton label="Open Drawer" onClick={this.handleToggle}/>
				<Drawer open={this.state.open}>
				<MenuItem>Biography</MenuItem>
				<MenuItem>Business & Management</MenuItem>
				<MenuItem>Children</MenuItem>
				<MenuItem>Fiction</MenuItem>
				<MenuItem>Film</MenuItem>
				<MenuItem>Gujrati Books</MenuItem>
				<MenuItem>Health</MenuItem>
				<MenuItem>Hindi Books</MenuItem>
				<MenuItem>History & Current Affairs </MenuItem>
				<MenuItem>Non Fiction</MenuItem>
				<MenuItem>Religion</MenuItem>
				<MenuItem>Sports</MenuItem>
		        </Drawer>
			</div>
		);
	}
}

export default Categories;