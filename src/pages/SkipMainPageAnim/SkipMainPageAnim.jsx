import { Outlet, useLocation } from "react-router-dom"
import { mainPageStore } from "../../stores/mainPageStore"
import { useEffect } from "react"

export default () => {

    const location = useLocation();
    useEffect(() => {
        mainPageStore.end()

        // setTimeout(() => {
        //     console.log(`SCROLL`);
        //     window.scrollTo({ top: 0, behavior: 'smooth' });
        // }, 500);
    }, [location.pathname])

    return (
        <Outlet />
    )
}