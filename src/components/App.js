import React, {useState} from "react";
import "./../styles/App.css";
import ListItem from './ListItem'
function App() 
{
    const addItem=()=>{
		items.push(newItem)
		setItems([...items])
		 setnewItem("");
		 
	}
	let newItemChange=(evt)=>{
		setnewItem(evt.target.value)
	}
     const deleteHandler=(itemIdx)=>{
	  items.splice(itemIdx,1);
	  setItems([...items])
	}
	const editHandler=(editNewValue,itemIdx)=>{
		items[itemIdx]=editNewValue;
		setItems([...items])
	  }
	const [newItem,setnewItem]=useState("");
	const [items,setItems]=useState([]);
	return (
	<div id="main">
	<textarea id="task" onChange={newItemChange} placeholder="Input" value={newItem}></textarea>
	<button id="btn" onClick={addItem} disabled={newItem.trim().length===0}>Add Items</button>
	{
		items.map((item,idx)=>(
		<ListItem Item={item} key={idx} idx={idx} onEdit={true}  editHandler={editHandler} deleteHandler={deleteHandler}/>
		))
	}

	
	</div>
	);
}


export default App;
