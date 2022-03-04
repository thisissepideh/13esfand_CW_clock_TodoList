import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date(),
            todo:[]
        }
    }

    setTime = ()=>{
    this.setState({time:new Date()})
    }

    componentDidMount(){
        this.interval = setInterval(()=>this.setTime(),1000)
        
    }

    componentWillUnmount(){
        this.interval.clearInterval()
    }
    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;