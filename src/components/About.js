import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        // console.log(" Parent Constructor called");
    }

componentDidMount(){
    // console.log("Parent ComponentDidMount called");
}

    render(){
        // console.log(" Parent Render called");
        return (
            <div id="about">
                
                <UserClass name={ "Skandana (class) "} location={"Bengaluru"}/>
            </div>
        )

    }

}
export default About;