import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faChartSimple, faEdit, faArrowUp, faArrowDown, faBarsStaggered, faSave, faCancel, faTimes } from '@fortawesome/free-solid-svg-icons';
import ListGroupItemWrapper from './ListGruopItemWrapper'
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, taskDown, taskUp, toggle } from '../../redux/actions';
import {UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button,
    ButtonGroup
} from 'reactstrap';

const ListGroupItem = ({index,item}) => {
    const dispatch = useDispatch();
    const [isEdit, setisEdit] = useState(false);
    const [value, setValue] = useState(item.title)
    
    const cancel = ()=> { 
        setisEdit(item.title);
        setisEdit(false);
    }
    const save = ()=> { 
        editTask(dispatch, index,value);
        setisEdit(false);
    }
  return (
    <ListGroupItemWrapper tag='a' href='#' action 
    className='d-flex  align-items-center justify-content-between'
     onDoubleClick={()=>toggle(dispatch, index)}> 
        {isEdit ? <Input value={value} onChange={(e) => setValue(e.target.value)} className='me-2 bg-warning' />  : 
        <span style={{textDecoration: item.completed ? "line-through" : "none"}}> {index + 1}.  {item.title} 
          </span> } 
        
{isEdit ?     <ButtonGroup className='d-flex'> 
                 <Button color='success' onClick={save}><FontAwesomeIcon icon={faSave} /></Button>
                 <Button color='danger' onClick={cancel}><FontAwesomeIcon icon={faTimes} /></Button>
             </ButtonGroup>
  : <UncontrolledButtonDropdown>
            <DropdownToggle caret>
                <FontAwesomeIcon icon={faBarsStaggered} />
            </DropdownToggle>
            
            <DropdownMenu>
                <DropdownItem onClick={()=>deleteTask(dispatch,index)}>
                     <FontAwesomeIcon  icon={faTrash}/> Delete
                </DropdownItem>
                <DropdownItem onClick={()=>setisEdit(true)}>
                     <FontAwesomeIcon  icon={faEdit}/> Edit
                </DropdownItem>
                <DropdownItem onClick={()=>taskUp(dispatch,index)}>
                     <FontAwesomeIcon  icon={faArrowUp}/> Up
                </DropdownItem>
                <DropdownItem onClick={()=>taskDown(dispatch,index)}>
                     <FontAwesomeIcon  icon={faArrowDown}/> Down
                </DropdownItem>
            </DropdownMenu>
            
        </UncontrolledButtonDropdown> 
        }
        </ListGroupItemWrapper>
        
  )
}

export default ListGroupItem;