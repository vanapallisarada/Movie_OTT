
// function Login(){
//     return(
//         <>
//         <h1> this is login</h1>
//         </>
//     )
// }
// export default Login;

// import { lazy, Suspense, useState } from 'react';

// const Form = lazy(() => import('./loginform'));
// const Signup = lazy(() => import('./signUpform'));

// function Login() {
    
//     const [showLogin, setShowLogin] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);

//     const handleLoginClick = () => {
//         setShowLogin(true);
//         setShowSignup(false); // Hide sign up form
//     };

//     const handleSignupClick = () => {
//         setShowSignup(true);
//         setShowLogin(false); 
//     };

//     return (
//         <>
//         <div className  = "bg-dark">
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src={"/images/loginimg.png"} style = {{height : "600px"}} />
//                 </div>

//                 <div className="col-md-6 mt-5 text-white">
//                     <h2>Access Your Account</h2>
//                     <p className="mt-2">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </p>

//                     <button className="btn btn-primary m-3" onClick={handleLoginClick}>Login</button>
//                     <button className="btn btn-primary" onClick={handleSignupClick}>Sign Up</button>

//                     <Suspense fallback={<div>Loading...</div>}>
//                         {showLogin && <Form />}
//                         {showSignup && <Signup />}
//                     </Suspense>
//                 </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default Login;

// import React, { Suspense, useState } from 'react';
// import Form from './loginform';
// import Signup from './signUpform';

// function Login() {
//     const [showLogin, setShowLogin] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);

//     const handleLoginClick = () => {
//         setShowLogin(true);
//         setShowSignup(false); // Hide sign up form
//     };

//     const handleSignupClick = () => {
//         setShowSignup(true);
//         setShowLogin(false);
//     };

//     return (
//         <div className="container-fluid bg-dark text-white" style = {{height:"600px"}}>
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src={"/images/loginimg.png"} alt="Login" style={{ height: "auto", maxWidth: "100%" }} />
//                 </div>

//                 <div className="col-md-6 mt-5">
//                     <h2>Access Your Account</h2>
//                     <p>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                     </p>

//                     <button className="btn btn-primary m-3" onClick={handleLoginClick}>Login</button>
//                     <button className="btn btn-primary" onClick={handleSignupClick}>Sign Up</button>

//                     <Suspense fallback={<div>Loading...</div>}>
//                         {showLogin && <Form />}
//                         {showSignup && <Signup />}
//                     </Suspense>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;



import React, { Suspense, useState } from 'react';
import Form from './loginform';
import Signup from './signUpform';

function Login() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false); // Hide sign-up form
    };

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    return (
        <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src={"/images/loginimg.png"} alt="Login" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h2>Access Your Account</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <div className="d-flex flex-column align-items-start">
                        <button className="btn btn-primary my-3 w-100" onClick={handleLoginClick}>Login</button>
                        <button className="btn btn-primary w-100" onClick={handleSignupClick}>Sign Up</button>
                    </div>

                    <Suspense fallback={<div>Loading...</div>}>
                        {showLogin && <Form />}
                        {showSignup && <Signup />}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Login;


