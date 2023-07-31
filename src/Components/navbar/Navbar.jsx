import { useState, useEffect } from 'react'
import '../navbar/Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)


    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])


    const currentUser =
    {
        id: 1,
        userName: 'John',
        isSeller: true
    }


    return (
        <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='link'>
                        <span className='text'>fiverr</span>
                        <span className='dot'>.</span>
                    </Link>
                </div>
                <div className='links'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className='user' onClick={() => { setOpen(!open) }}>
                            <img src="https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1MDE0MjAyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="profile pic" />
                            <span>{currentUser?.userName}</span>
                            {open && <div className='options'>
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link to='/myGigs' className='link'>Gigs</Link>
                                            <Link to='/add' className='link'>Add new Gig</Link>
                                        </>
                                    )
                                }
                                <Link to='/orders' className='link'>Orders</Link>
                                <Link to='/messages' className='link'>Messages</Link>
                                <Link to='/' className='link'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {active  || pathname !== '/' && (
                <>
                    <hr />
                    <div className='menu'>
                        <Link className='link menuLink' to="/" > Graphics and design</Link>
                        <Link className='link menuLink' to="/" >Video and Aniation </Link>
                        <Link className='link menuLink' to="/" >Writing and Translation</Link>
                        <Link className='link menuLin' to="/" > AI Services </Link>
                        <Link className='link menuLink' to="/" > Digital Marketing</Link>
                        <Link className='link menuLink' to="/" > Music and Video </Link>
                        <Link className='link menuLink' to="/" > Programming and Tech</Link>
                        <Link className='link menuLink' to="/" > LifeStyle</Link>
                        <Link className='link menuLink' to="/" > Business </Link>
                    </div>
                </>
            )}
        </div>
    )
}
export default Navbar