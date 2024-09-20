import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='w-full flex flex-wrap justify-between items-center p-5'>
            {/* Hamburger Icon */}
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-8 w-8 ${isMenuOpen ? "text-white" : "text-black"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            {/* Logo */}
            <Link to="/">
                <p className="font-bold text-xl md:text-2xl">ShoesHub.</p>
            </Link>

            {/* Icons */}
            <div className="flex justify-between gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>

            {/* Sliding Menu */}
            <div className={`fixed top-0 left-0 w-1/2 h-full bg-black bg-opacity-90 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-1000 ease-in-out z-40`}>
                <ul className="flex flex-col justify-center items-center h-full gap-8 text-white cursor-pointer">
                    <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
                    <Link to="/about" onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>ABOUT</Link>
                    <Link to="/categories" onClick={() => setMenu("categories")} className={menu === "categories" ? "active" : ""}>CATEGORIES</Link>
                    <Link to="/popular" onClick={() => setMenu("popular")} className={menu === "popular" ? "active" : ""}>POPULAR</Link>
                    <Link to="/arrivals" onClick={() => setMenu("arrivals")} className={menu === "arrivals" ? "active" : ""}>ARRIVALS</Link>
                    <Link to="/contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>CONTACT</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar