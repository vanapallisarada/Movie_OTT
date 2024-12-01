// import { useState } from "react"

// function Form(){
//     return(
//         <>
//           <form action="/action_page.php">
//     <div class="form-group">
//       <label for="email">Email:</label>
//       <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
//     </div>
//     <div class="form-group">
//       <label for="pwd">Password:</label>
//       <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
//     </div>
//     <div class="checkbox">
//       <label><input type="checkbox" name="remember"/> Remember me</label>
//     </div>
//     <button type="submit" class="btn btn-primary">Submit</button>
//   </form>
   
       
      
//         </>
//     )
// }
// export default Form



// import React from "react";

// function Form() {
//     return (
//         <form action="/action_page.php">
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="pwd">Password:</label>
//                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" />
//             </div>
//             <div className="checkbox">
//                 <label><input type="checkbox" name="remember" /> Remember me</label>
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//     );
// }

// export default Form;



// import React from "react";

// function Form() {
//     return (
//         <form action="/action_page.php" className="mt-4">
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="pwd">Password:</label>
//                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required />
//             </div>
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input type="checkbox" className="form-check-input" name="remember" /> Remember me
//                 </label>
//             </div>
//             <button type="submit" className="btn btn-primary mt-3">Submit</button>
//         </form>
//     );
// }

// export default Form;


import React, { useState } from "react";
import axios from "axios";

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };


        

        try {
            const response = await axios.post("http://localhost:8080/api/login/save", loginData);
            console.log("Login Form saved:", response.data);
            // Handle successful response here (e.g., show a success message)
        } catch (error) {
            console.error("There was an error saving the Login Form!", error);
            // Handle error response here (e.g., show an error message)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="remember"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    /> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
}

export default Form;
