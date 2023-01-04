import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const [enteredUserName, UpdatedUserName] = useState('');
    const [enteredAge, updatedAge] = useState('');
    const [error,setError] = useState();
  
    const userNameHandler = (event) => {
        UpdatedUserName(event.target.value)
    }

    const ageHandler = (event) =>{
        updatedAge(event.target.value)
    }
    const addUserHandler =(event) => {
        event.preventDefault();
        if(enteredUserName.trim().length ===0){
            setError({
                title:"invalid input",
                message:"pls enter valid value"
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:"invalid age",
                message:"pls enter valid age"
            })
            return;
        }
     
       props.onAddUser(enteredUserName,enteredAge);
       UpdatedUserName('');
       updatedAge('')
    }
 
    const errorHandler = () =>{
        setError(null);
    }
    return(
        <React.Fragment>
       {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/>} 
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type="text" value={enteredUserName} onChange={userNameHandler}></input>

            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={enteredAge} onChange={ageHandler}></input>

            <Button type="submit">Submit</Button>

            </form>
        </Card>
        </React.Fragment>
    );
}

export default AddUser;