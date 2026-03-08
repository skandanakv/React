import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
            
        this.state={
            UserInfo : {
                name: "Dummy name",
                location:"some loc",
                avatar_url : "https://www.svgrepo.com/show/382106/avatar.svg"
            }  
        };
    }

   async componentDidMount(){

    const data=await fetch ("https://api.github.com/users/skandanakv");
    const json = await data.json();
    console.log(json);

    this.setState({
        UserInfo:json
    })
       
    }

    componentDidUpdate(){
        console.log("component did update called");
    }

    render() {

      const {login, location , avatar_url}=this.state.UserInfo;

        return (
            
            <div id="user-card">
      <h3> name: {login}</h3>
               < h3> location: {location}</h3>
               <img src= {avatar_url} />
                <h4> User email</h4>
                <h4> User blah blah</h4>
            </div>
        )

    }
}

export default UserClass;