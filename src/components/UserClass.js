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

        const {
            name,
            login,
            location,
            avatar_url,
            bio,
            public_repos,
            followers,
            following,
            html_url
          } = this.state.UserInfo;
          

        return (
            
            <div id="user-card">
            <img src={avatar_url} alt="avatar" />
          
            <h3>{name || login}</h3>
            <p>{bio}</p>
          
            <h4>Location: {location}</h4>
            <h4>Repos: {public_repos}</h4>
            <h4>Followers: {followers}</h4>
            <h4>Following: {following}</h4>
          
            <a href={html_url} target="_blank">View GitHub</a>
          </div>
          
        )

    }
}

export default UserClass;