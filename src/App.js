import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Images from './Images.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBarExampleIconButton from './Navbar.js';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import Board from './Comments.js';
import Categories from './categories.js';
import Jsontry from './Jsontry.js';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const customContentStyle = {
  width: '30%',
  maxWidth: 'none'
};

// const isEnabled=
//         this.state.email.length > 0 && this.state.password.length > 0;

class MenuAppBar extends React.Component{

 state = {
      firstname: '',
      lastname: '',
      email:'',
      password: '',
      firstnameError:'',
      lastnameError:'',
      emailError:'',
      passwordError: '',
      modalopen:false,
      isEnabled:false
    };

    Change=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      });
    };

    onSubmit=(e)=>{
      e.preventDefault();
      const err=this.validate();

      if(!err){
        // this.props.onChange({
        //   firstname:"",
        //   lastname:"",
        //   email:"",
        //   password:""
        // });
        alert(`success`);
      }
    };

    onReset=()=>{
      this.setState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
      });
    }
  
   validate=()=>{
    let isError=false;
    let reg= '/(\w+)\@(\w+)\.[a-zA-Z]/g';
    const errors = {
      firstnameError:'',
        lastnameError:'',
        emailError:'',
        passwordError: ''
    };

    //validation for firstname
    if(this.state.firstname === ""){
      isError = true;
      errors.firstnameError = "Enter your firstname";
    }
    else if(!this.state.firstname.match(/^[a-zA-Z]+$/)){
      isError = true;
      errors.firstnameError = "Only Letters";
    }
    else if(this.state.firstname.length < 5){
         isError = true;
         errors.firstnameError = "Name Should be greater than 5 Character";
    }


    //validation for lastname
    if(this.state.lastname === ""){
      isError = true;
      errors.lastnameError = "Enter your lastname";
    }
    else if(!this.state.lastname.match(/^[a-zA-Z]+$/)){
      isError = true;
      errors.lastnameError = "Only Letters";
    }

    //validation for Email
    if(this.state.email === ""){
      isError = true;
      errors.emailError = "Enter your email";
    }
    else if(!this.state.email.match('@')){
      isError = true;
      errors.emailError = "incorrect email";
    }

    //Validation for Password
    if(this.state.password === ""){
      isError = true;
      errors.passwordError = "Enter your password";
    }
    else if(this.state.password.length<6){
      isError = true;
      errors.passwordError = "Password should be greater than 5 character";
    }

    if(isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  };


  handleClick=()=>{
    alert(`onClick triggered on the title component`);
  };

  handleOpen= () =>{
    this.setState({modalopen: true});
  };

  handleClose=()=>{
    this.setState({modalopen: false});
  };

  handleActive=(tab)=> {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <AppBarExampleIconButton/>
          <br/>
            <Tabs>
              <Tab label="Home" >
                <Images/>
              </Tab>
              <Tab label="Categories" >
                <Categories/>
              </Tab>
              <Tab
                label="Articles"
                data-route="/home"
                onActive={this.handleActive}
              >
                <Jsontry/>
              </Tab>
              <Tab label="Events" >
                
              </Tab>
              <Tab label="Contact Us" >
                <FlatButton key={4} label="Contact Us" />
              </Tab>
              <Tab label="Sign-Up">
                <br/>
                <RaisedButton key={5} onClick={this.handleOpen} secondary={true} label="Sign-Up">
                  <Dialog contentStyle={customContentStyle} title="Sign Up" modal={false} open={this.state.modalopen} onRequestClose={this.handleClose}>
                    <form>
                    <TextField name="firstname" hintText="First Name" value={this.state.firstname} floatingLabelText="First Name" onChange={this.Change} errorText={this.state.firstnameError}/>
                    <TextField name="lastname" hintText="Last Name" value={this.state.lastname} floatingLabelText="Last Name" onChange={this.Change} errorText={this.state.lastnameError}/>
                    <TextField name="email" hintText="Email" value={this.state.email} floatingLabelText="Email" onChange={this.Change} errorText={this.state.emailError}/>
                    <TextField name="password" type="password" hintText="Password" value={this.state.password} floatingLabelText="Password" onChange={this.Change} errorText={this.state.passwordError}/>
                    <RaisedButton label="Submit" secondary={true} onClick={this.onSubmit}></RaisedButton> &nbsp; &nbsp; &nbsp;
                    <RaisedButton label="Reset" primary={true} onClick={this.onReset}></RaisedButton>
                    </form>
                  </Dialog>
                </RaisedButton>
              </Tab>
            </Tabs>
        </MuiThemeProvider>
      </div>);
  }
  }
export default MenuAppBar;



              // <i class="material-icons greenA200" style={{fontSize:'36px',color:'green'}}>
              //   face
              // </i>
