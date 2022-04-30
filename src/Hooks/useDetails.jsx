import { useEffect, useState } from "react"

const useDetails = (serviceId) => {
    const [details,setDetails] = useState({})
    useEffect(() => {
        const url = `https://limitless-wave-54217.herokuapp.com/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return [details,setDetails]
}

export default useDetails

