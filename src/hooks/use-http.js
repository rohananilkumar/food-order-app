import { useState } from "react";

const useHttp = (collection,request) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchData(body){
        console.log(body)
        try{
            setIsLoading(true);
            const response = await fetch('https://food-order-app-817a3-default-rtdb.firebaseio.com/'+collection+'.json', {
                method:request.method,
                body:request.method==='POST'?JSON.stringify(body):undefined,
                headers: {
                    'Content-Type': 'application/json',
                  },
            });
            if(!response.ok) throw new Error(response.body);
            setIsLoading(false);
            return (await response.json());
        }
        catch(error){
            setIsLoading(false);
            setError(error);
            console.log(error);
        }
    }

    return{
        fetchData,
        isLoading,
        error,
    }

}

export default useHttp;