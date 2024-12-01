// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';
// import Movies from './Movies';
// import Tvshows from './Tvshows';

// function Header() {
//     return (
//         <ul>
//             <li><Link to="/Home">Home</Link></li>
//             <li><Link to="/About">About</Link></li>
//             <li><Link to="/Contact">Contact</Link></li>
//             <li><Link to="/Login">Login</Link></li>
//             <li><Link to="/Movies">Movies</Link></li>
//             <li><Link to="/Tvshows">Tvshows</Link></li>
//         </ul>
//     );
// }

// function Home() {
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/Home" element={<h1>Home Component</h1>}></Route>
//                 <Route path="/About" element={<About />}></Route>
//                 <Route path="/Contact" element={<Contact />}></Route>
//                 <Route path="/Login" element={<Login />}></Route>
//                 <Route path="/Movies" element={<Movies />}></Route>
//                 <Route path="/Tvshows" element={<Tvshows />}></Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default Home;


// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';
// import Movies from './Movies';
// import Tvshows from './Tvshows';

// function Header() {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Container>
//                 <Navbar.Brand href="/Home">Logo</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={Link} to="/Home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/About">About</Nav.Link>
//                         <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
//                         <Nav.Link as={Link} to="/Login">Login</Nav.Link>
//                         <Nav.Link as={Link} to="/Movies">Movies</Nav.Link>
//                         <Nav.Link as={Link} to="/Tvshows">Tvshows</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// function Home() {
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/Home" element={
//                     <div>
//                         <h1>Welcome to Home</h1>
//                         <p>This is the home page of our website.</p>
//                         <p>Here you can find information about our company and services.</p>
//                         <p>Feel free to explore!</p>
//                     </div>
//                 }></Route>

//                 <Route path="/About" element={<About />}></Route>
//                 <Route path="/Contact" element={<Contact />}></Route>
//                 <Route path="/Login" element={<Login />}></Route>
//                 <Route path="/Movies" element={<Movies />}></Route>
//                 <Route path="/Tvshows" element={<Tvshows />}></Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default Home;


import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Movies from './Movies';
import Tvshows from './Tvshows';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/Home">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Movies">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tvshows">Tvshows</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Home() {
    return (<>
    
    
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Home" element={
                    <div>
                        <h1>Welcome to Home</h1>
                        <p>This is the home page of our website.</p>
                        <p>Here you can find information about our company and services.</p>
                        <p>Feel free to explore!</p>

                        <h2>this page is under development i need to decide to change some features in it</h2>
                    </div>
                }></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Movies" element={<Movies />}></Route>
                <Route path="/Tvshows" element={<Tvshows />}></Route>
            </Routes>
        </BrowserRouter>

     

        
        
        </>



        
        
    );
}

export default Home;


// function Home(){
//     return(
//         <>
//         <h1> this is Home</h1>
//         </>
//     )
// }
// export default Home;