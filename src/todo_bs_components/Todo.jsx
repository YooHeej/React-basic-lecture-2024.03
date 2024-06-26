import {Badge} from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";



export default function Todo({todo, onUpdate, onDelete}) {
  const {id, work, status} = todo;
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);
  return (
      <tr>
        <td>      
        <input type='checkbox' id={id} checked={status === 'completed'}
          onChange={handleChange}/>
        </td>
        <td><label htmlFor="{id}">{work}</label></td>
        <td><Badge bg='warning' onClilck={handleDelete}><FaRegTrashAlt /></Badge></td>
      </tr>
  );
}