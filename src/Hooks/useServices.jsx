import { useEffect, useState } from "react"

const useServices = (reload) => {
    const [services,setServices] = useState([])
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://limitless-wave-54217.herokuapp.com/service')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    },[reload])
    return [services,setServices,loading]
}

export default useServices
