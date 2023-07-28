import { useState } from 'react'
import '../navbar/Navbar.scss'
import { useEffect } from 'react'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

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
        <div className={active ? 'navbar active' : 'navbar'}>
            <div className='container'>
                <div className='logo'>
                    {/* <Link to='/'> */}
                    <span className='text'>fiverr</span>
                    <span className='dot'>.</span>
                    {/* </Link> */}
                </div>
                <div className='links'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className='user' onClick={ () => {setOpen(!open)}}>
                            <img src="https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1MDE0MjAyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="profile pic" />
                            <span>{currentUser?.userName}</span>
                            {open && <div className='options'>
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add new Gig</span>
                                        </>
                                    )
                                }
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div> }
                        </div>
                    )}
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className='menu'>
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    )
}
export default Navbar