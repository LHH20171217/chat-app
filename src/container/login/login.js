import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux'
@connect(
    state=>state.user,
    {login}
)

class Login extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        console.log(this.props);
        this.props.history.push('./register')
    }
    handleChange(key,val) {
        this.setState({
            [key]:val
        })
    };
    handleLogin() {
        this.props.login(this.state);
    }

    render(){
        return (
            <div>
                {(this.props.redirectTo&&this.props.redirectTo!=='/login')?<Redirect to={this.props.redirectTo} />: null}
                <Logo></Logo>
                <WingBlank>   
                    <List>
                        { this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户</InputItem>
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('pwd',v)}
                        >密码</InputItem>
                    </List> 
                    <WhiteSpace />      
                    <Button onClick={this.handleLogin} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login