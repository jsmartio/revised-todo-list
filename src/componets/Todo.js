import React from 'react';
import { Button } from 'reactstrap';


const Spacer = () => <span>&nbsp;</span> 



class Todo extends React.Component{
    state = {
        deca: ''
    }

    getStyle = (completed) => {
        var deca = 'underline';
        if(completed === true) deca = 'line-through'
        else deca = 'none'

        return {
            padding:5,
            borderBottom:'1px solid #aaaaaa',
            textDecoration: deca
        }
    }
    onChange = (props) => {
        console.log('changed')
    }

    render(){
        //const { id,title,completed } = this.props.todo;
        return (
            <div style={this.getStyle(this.props.completed)} >
                <input type="checkbox"  
                        defaultChecked={this.props.completed}
                        onChange={this.props.bChecked.bind(this, this.props.id)}
                        />
                <Spacer />
                {this.props.title} - 
                {this.props.completed} - 
                {this.props.id}
                <Button 
                    onClick={this.props.deleteItem.bind(this, this.props.id)}
                    color="danger" 
                    size="sm"
                    style={bs}> X </Button>
                <Spacer />
            </div>
        )
    }
}

const bs = {
    float:'right',
    height:'20px',
    padding:'0px 10px',
    margin:'0px',
    lineHeight:'20px'
}


export default Todo;