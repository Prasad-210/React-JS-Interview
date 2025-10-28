import { useEffect, useState } from "react";

function UseFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchData = async () =>{
            setLoading(true);

            try{
                const response = await fetch(url);

                if(!response.ok){
                    throw new Error(`HTTP error status: ${response.status}` )
                }

                const result = await response.json()
                setData(result)
            }catch(e){
                setError(e.message)
            }finally{
               setLoading(false)
            }
        }

        if(url){
           fetchData() 
        }

    }, [url]);

    return {data,loading,error}
}


export default UseFetch;