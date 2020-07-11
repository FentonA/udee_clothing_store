import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { render } from '@testing-library/react';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }


handleSubmit = event =>{
    event.preventDefault();

    this.setState({ email:'', password:''})
};

handleChange = event =>{
    const {value, name} = event.target;

    this.setState({ [name]: value});
};

render() {
    return(
        <div className='sign-in'>
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}> 
            <FormInput name="email" label='email' value={this.state.email} onChange={this.handleChange} required/>
            <FormInput name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>

            <CustomButton type="submit" >Submit</CustomButton>
        </form>
        </div>
    );
}
}

export default SignIn;