import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions'

/**
 * @description It is a class (container) React component for a Todo list
 * It is conncted to the Redux store
 * @function
 * @returns {JSX.Element}
 */
class Todo extends Component{
    state = {
        list:''
    }
    onChange = ({target}) => this.setState({[target.name]:target.value})
    onClick = () => {
        this.props.addTodo(this.state.list)
        this.setState({list:''})
    }
    renderArray = () => {
        if(this.props.array.length === 0)return
        return this.props.array.reduce((acc,val,i) => {
            const newVal = (
                <li key={i + val}>
                    {val}
                </li>
            )
            acc.push(newVal)
            return acc;
        },[])

    }
    render(){
        return(
            <div>
                <h2>Todo list</h2>
                <input 
                data-test="input"
                name="list" onChange={this.onChange} placeholder="todo list" type="text" value={this.state.list}/>
                <button 
                data-test="button"
                onClick={this.onClick}>add</button>

                {this.renderArray()}
            </div>
        )
    }
}


const mapStateToProps = ({todo}) => {
    const {error, array} = todo
    return {error,array} 
}




export default connect(mapStateToProps, {addTodo})(Todo)