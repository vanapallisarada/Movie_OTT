// import React, { useState } from 'react';

// function SignUp() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your form submission logic here
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="fullName"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           minLength={6}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           minLength={6}
//           required
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Sign Up</button>
//     </form>
//   );
// }

// export default SignUp;


// import React, { useState } from 'react';

// function SignUp() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Your form submission logic here
//         console.log(formData);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     minLength={6}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     minLength={6}
//                     required
//                 />
//             </div>
//             <button type="submit" className="btn btn-primary">Sign Up</button>
//         </form>
//     );
// }

// export default SignUp;



import React, { useState } from 'react';

function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength={6}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
        </form>
    );
}

export default SignUp;


