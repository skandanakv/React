import { useRouteError } from "react-router-dom";

const Error =( ) => {

    const err=useRouteError();
    console.log(err);
    return (
    

        <div id="error">
            <h3>Something went wrong</h3>
            <h2>Please try again</h2>
            <h2>{err.message}</h2>
            <h2>{err.status}:{err.statusText}</h2>
        </div>

        
    )
}

export default Error;
