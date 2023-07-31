// import './App.scss'
// import Navbar from './Components/navbar/Navbar'
// import Home from '../src/Pages/Home/Home'
// import Footer from './Components/footer/Footer';
// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";
// import Gigs from '../src/Pages/gigs/Gigs'
// import Gig from '../src/Pages/gig/Gig'
// import MyGigs from '../src/Pages/myGigs/MyGigs'
// import Orders from '../src/Pages/orders/Orders'
// import Message from '../src/Pages/message/Message'
// import Messages from '../src/Pages/messages/Messages'
// import Add from '../src/Pages/add/Add'
// import { Children } from 'react';

// function App() {

//   const Layout = () => {
//     return (
//       <div className='app'>
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </div>
//     )
//   }

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout/>,

//       Children:{
//         path: '/',
//         element: <Home/>,

//         path: '/gigs',
//         element: <Gigs/>,

//         path: '/gig/:id',
//         element: <Gig/>,

//         path: '/orders',
//         element: <Orders/>,

//         path: '/myGigs',
//         element: <MyGigs/>,

//         path: '/add',
//         element: <Add/>,

//         path: '/messages',
//         element: <Messages/>,

//         path: '/message/:id',
//         element: <Message/>
//       }
//     },
//   ]);



//   return (
//     <>
//       <div>
//         <RouterProvider router={router} />
//       </div>
//     </>
//   )
// }

// export default App



import './App.scss';
import Navbar from './Components/navbar/Navbar';
import Home from '../src/Pages/Home/Home';
import Footer from './Components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gigs from '../src/Pages/gigs/Gigs';
import Gig from '../src/Pages/gig/Gig';
import MyGigs from '../src/Pages/myGigs/MyGigs';
import Orders from '../src/Pages/orders/Orders';
import Message from '../src/Pages/message/Message';
import Messages from '../src/Pages/messages/Messages';
import Add from '../src/Pages/add/Add';

function App() {
  const Layout = ({ children }) => {
    return (
      <div className='app'>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myGigs" element={<MyGigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<Message />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
