import { useState } from "react"
import { Link } from "react-router-dom"

const YTSidebar = () => {

    const [sidebar,setSidebar] = useState(false)

    const toggle = (()=>{
        setSidebar(!sidebar)
    })

    return (
        <main className={sidebar? "yt-space-toggle" : null}>
            <header className={sidebar ? "yt-header yt-space-toggle" : "yt-header"}>
                <div className="yt-header-toggle" onClick={toggle}>
                    <i className="fas fa-bars"></i>
                </div>
            </header>

            <aside className={sidebar? "yt-sidebar yt-show": "yt-sidebar"}>
                <nav className="yt-nav">
                    <div>
                        <Link to="/" className="yt-nav-logo">
                            <i className="fa-solid fa-house yt-nav-logo-icon"></i>
                            <span className="yt-nav-logo-name">Home</span>
                        </Link>

                        <div className="yt-nav-list">
                            <Link to="/user" className="yt-nav-link yt-active">
                                <i className="fa-solid fa-user-large yt-nav-link-icon"></i>
                                <span className="yt-nav-link-name">User</span>
                            </Link>
                            <Link to="/mail" className="yt-nav-link">
                                <i className="fa-solid fa-envelope yt-nav-link-icon"></i>
                                <span className="yt-nav-link-name">Mail</span>
                            </Link>
                            <Link to="/music" className="yt-nav-link">
                                <i className="fa-solid fa-music yt-nav-link-icon"></i>
                                <span className="yt-nav-link-name">Music</span>
                            </Link>
                            <Link to="/" className="yt-nav-link">
                                <i className="fa-solid fa-toggle-off yt-nav-link-icon"></i>
                                <span className="yt-nav-link-name">Dark</span>
                            </Link>


                        </div>
                    </div>
                    <Link to="/logout" className="yt-nav-link">
                        <i className="fa-solid fa-arrow-right-from-bracket yt-nav-link-icon"></i>
                        <span className="yt-nav-link-name">Logout</span>
                    </Link>
                </nav>
            </aside>
            <h1>Learn</h1>
        </main>
    )
}

export default YTSidebar