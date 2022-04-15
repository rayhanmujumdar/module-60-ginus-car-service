import { useEffect, useState } from "react"

const useNav = () => {
    const [nav,setNav] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY >= 300){
                setNav(true)
            }else{
                setNav(false)
            }
        })
    },[])
    return [nav,setNav]
}

export default useNav;