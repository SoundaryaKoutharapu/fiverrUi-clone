import '../navbar/Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
            <div className='logo'>
               <Link to='/'>
                <span className='text'>fiverr</span>
                <span className='dot'>.</span>
                </Link>
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
        </div>
    )
}
export default Navbar