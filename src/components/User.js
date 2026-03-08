import { useState } from "react";

const User = (props)=> {

    const [count1, setCount1] =useState(0);
    const [count2] =useState(1);

    return (
        <div id="user-card">
            <h1>Count 1: {count1}</h1>
            <h1>Count 2: {count2}</h1>
            
            <button onClick={() => setCount1(count1 + 1)}>
                Increase Count
            </button>


            <h3>  name : {props.name}</h3>
            <h4> User email</h4>
            <h4> User blah blah</h4>
        </div>
    )
}

export default User;