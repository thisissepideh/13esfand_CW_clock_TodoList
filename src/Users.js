import React, { Component } from 'react';

class Users extends Component {
    constructor() {
        super()
        this.state = {
            list:[]
        }
    }
    updateHarry(){
        fetch('./json/todo_farbod.json').then(res => res.json())
        .then(data=>this.setState({list:data}))
    }
    updateFarbod(){
        fetch('./json/todo.json').then(res => res.json())
        .then(data=>this.setState({list:data}))        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.props.user);
        if (this.props.user !== prevProps.user) {
            if (this.props.user === "1") {
                this.updateHarry()
                
            } else {
                this.updateFarbod()
            }
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (<li>{item.todo}</li>))}
                </ul>
            </div>
        );
    }
}

export default Users;