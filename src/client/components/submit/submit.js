import { useEffect } from "react"

export const Submit=({data})=>{
    useEffect(async()=>{
        const response = await fetch('/express_backend');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    },[])
    return(
        <div>

        </div>
    )
}