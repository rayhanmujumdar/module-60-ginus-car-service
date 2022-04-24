import { useEffect, useState } from "react"

const useServices = (reload) => {
    const [services,setServices] = useState([])
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    },[reload])
    return [services,setServices,loading]
}

export default useServices
