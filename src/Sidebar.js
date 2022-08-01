const Sidebar = ({ sidebarToggle, sidebar }) => {
    return (
        <main>
            <header>
                <div className={sidebar ? "toggle-close" : "toggle"} onClick={sidebarToggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
            <aside className={sidebar ? "aside-close" : ""}>
                <nav>
                    <ul>
                        <i className="fa-solid fa-house icon"></i>
                        <p>Home</p>
                    </ul>
                    <ul>
                        <i className="fa-solid fa-user-large icon"></i>
                        <p>User</p>
                    </ul>
                    <ul>
                        <i className="fa-solid fa-envelope icon"></i>
                        <p>Mail</p>
                    </ul>

                    <ul>
                        <i className="fa-solid fa-music icon"></i>
                        <p>Music</p>
                    </ul>

                    <ul>
                        <i className="fa-solid fa-toggle-off icon"></i>
                        <p>Dark</p>
                    </ul>

                    <ul>
                        <i className="fa-solid fa-arrow-right-from-bracket icon"></i>
                        <p>Logout</p>
                    </ul>
                </nav>
            </aside>
        </main>
    )
}

export default Sidebar