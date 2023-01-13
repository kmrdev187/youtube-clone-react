import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

type Props = {
    children: React.ReactNode
}

function LayoutDefault(props: Props) {
    const [expandMenu, setExpandMenu] = useState(true)

    const location = useLocation()
    const route = location.pathname

    useEffect(() => {
        console.log(route)
        if(route === "/watch") {
            setExpandMenu(false)
        }
    }, [])

    return (
        <section className="flex flex-col h-screen">
            <Navbar onMenuClick={() => setExpandMenu(!expandMenu)} />
            <div className="flex flex-1">
                <Sidebar expanded={expandMenu} />
                <main className="flex-1 px-4">
                    {props.children}
                </main>
            </div>
        </section>
    )
}

export default LayoutDefault