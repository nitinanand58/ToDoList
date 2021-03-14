import React, { useState } from "react";
import ToDoList from './ToDoList';
import AddIcon from '@material-ui/icons/Add';

const App = () =>{

    const [inputList, setInputlist] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputlist(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputlist("");

    };

    const deleteItems = (id) =>{
        console.log('deleted');

        setItems((oldItems) =>{
            return oldItems.filter((arrElem, index) => {
                return index !== id;

            })
        })
    };

    return (
        <>
            <div className = "main_div">
                <div className = "center_div">
                    <br/>
                    <h1> ToDo List </h1>
                    <br/>
                    <input type = "text" placeholder = "Add Itmes" value={inputList} onChange={itemEvent}/>
                    <button className = 'mainBtn' onClick={listOfItems}> <AddIcon/> </button>

                    <ol>
                    
                        {Items.map((itemval, index) => {
                          return  <ToDoList 
                                key = {index} 
                                id = {index}
                                text = {itemval}
                                onSelect = {deleteItems}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
};

export default App;