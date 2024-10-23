import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch(url).then((response)=>{   
        response.json().then((result)=>{
            setdata(result)
        })
        })
    },[])
    
    return data
}
export default useFetch