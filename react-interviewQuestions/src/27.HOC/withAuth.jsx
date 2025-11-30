 const withAuth = (Component) =>{

    const isAuthenticated = true; //Tokan JWT from auth logic

    return function(props){
        //enhancment here

        if(isAuthenticated){
            return <Component {...props}/>
        }else{
            return <p>Please login to access.</p>
        }
        
    }

}

export default withAuth;