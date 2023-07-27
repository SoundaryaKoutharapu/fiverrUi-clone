import { useState } from 'react'
import '../navbar/Navbar.scss'
import { Fragment } from 'react'
import { useEffect } from 'react'

const Navbar = () => {

    const [active, setActive] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)

    }

    useEffect(() => {
        window.addEventListener('scroll', isActive)

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])

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
                    <span>Become a Seller</span>
                    <span>Sign In</span>
                    <button>Join</button>
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