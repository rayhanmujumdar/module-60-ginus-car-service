import { useEffect, useState } from "react"

const useServices = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/genius-car-service-module-60/main/public/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services,setServices]
}

export default useServices
