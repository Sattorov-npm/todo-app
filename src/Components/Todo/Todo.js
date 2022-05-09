import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button,Input, ListGroup } from 'reactstrap';
import ListGroupItem from '../ListGroupItem';
import React from 'react';
import { faInfo, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {addTask,setValue} from "../../redux/actions";
import './Todo.css';
   
const Todo = () => {
    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value);

    const dispatch = useDispatch();

    // Bo'sh Qator Qaytarmasin
    const NULL =()=> { 
        if(value != "")
        addTask(dispatch, value)
    }
  return (
    <div className='bg-white rounded p-3 shadow '>
        <h1 className='text-center'>What's the plan for today?<span>&#128221;</span></h1> 
        <div className="d-flex mb-2">
            <Input onChange={(e) => setValue(dispatch,e.target.value)} value={value} 
             placeholder="Add  Todo" className="me-2" />
            <Button className='plus' onClick={NULL}>
               <FontAwesomeIcon icon={faPlus} className='iconColor' />
            </Button>
            
        </div>
    <ListGroup>
        {data?.map((item, index) => { 
            return ( 
            <ListGroupItem  key={index} index={index} item={item}>
            </ListGroupItem>
            )
            
        })}
    </ListGroup>
    </div>
  )
}

export default Todo