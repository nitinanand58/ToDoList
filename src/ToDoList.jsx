import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoList = (props) => {


 
    return (
        <>
        <div className='todo_style'>
    <button className = 'arrBtn' onClick = {() =>{props.onSelect(props.id)}}> <DeleteForeverIcon/> </button>
    <li> {props.text} </li>
    </div>
    </>
    )
};

export default ToDoList;