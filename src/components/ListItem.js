import React,{useState} from "react";
import "./../styles/App.css";

function ListItem(props) 
{
    const [editedItem,setEditedItem]=useState(props.Item)
    const [editMode,setEditMode]=useState(false)
    function editFun(){
        setEditMode(true)
    }
    const saveEditedItem=()=>{
      props.editHandler(editedItem,props.idx)
      setEditMode(false);
    }
    let newItemChange=(evt)=>{
		setEditedItem(evt.target.value)
    }
    
	return (
	<div className="list">
     
      {editMode?<>
      <textarea className="editTask" value={editedItem} onChange={newItemChange} placeholder="edit task"></textarea>
      <button className="saveTask" onClick={saveEditedItem} disabled={editedItem.trim().length===0}> Save Task</button>
      </> : <>
      {props.Item} 
      <button className="edit" onClick={()=>setEditMode(true)}>edit</button>
      <button className="delete" onClick={()=> props.deleteHandler(props.idx)} >delete</button>
      </>}   
    
    </div>
	);
}

//onClick={props.onDelete(props.key)}
export default ListItem;