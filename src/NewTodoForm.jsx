import { useState } from "react";

export default function NewTodoForm(props){
    props.onSubmit
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        props.onSubmit(newItem)
        //below sets new item to empty array to clear text area from last item
        setNewItem("")
      }

      return(
        <>
        <form onSubmit={handleSubmit} className="form-items">
            <label htmlFor="item" className="add-label">Enter Wish List Items 🎁</label>
            <div className="form-row">
            <input
            className="user-input"
              value={newItem}
              //gets value of input and sets new value to newItem above
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
            />
            <button className="add-button">+</button>
          </div>
        </form>
        </>
      )

}