import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import booklogo from './images/bb.jpg'; 
import {red500} from 'material-ui/styles/colors';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const bg = {
	backgroundColor: red500
}

const RightButtons = (
		<div>
			<FlatButton label="Sign Up" /> 
			<FlatButton label="Login" /> 
			<FlatButton label="Contact Us"/>
		</div>
		);

const AppBarExampleIconButton = () => (
  <AppBar
    // title={<span style={styles.title}>Title</span>}
    style={bg.backgroundColor}
    onTitleClick={handleClick}
    iconElementLeft={<img src={booklogo} alt="logo"/>}
    iconElementRight={RightButtons}
  />
);


export default AppBarExampleIconButton;