// function Map(){
//     return(<>

//     <div className = "container mt-4 mb-4">
//         <center><h1 className  = "text-white">Problem && Statement</h1></center>
//         <div className = "row">
//             <div className = "col-md-6">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.7122515959973!2d80.81824077419567!3d16.79098571971414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e53fa3b4fb%3A0xfd1e193c90e4643!2sRajiv%20Gandhi%20University%20of%20Knowledge%20and%20Technology%20%2C%20Nuzvid!5e0!3m2!1sen!2sin!4v1716831412005!5m2!1sen!2sin" style = {{width :"100%", height :"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>

//             <div className = "col-md-6">

//             <label htmlFor="name" className="form-label text-white">Name</label>
//           <input type="text" className="form-control" id="name" placeholder="Enter your name" />
//           <label htmlFor="email" className="form-label text-white">Email address</label>
//           <input type="email" className="form-control" id="email" placeholder="name@example.com" />
//           <label htmlFor="message" className="form-label text-white">Message</label>
//           <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
//           <button type="submit" className="btn btn-primary mt-2">Submit</button>



//             </div>

            

//         </div>
//     </div>
    
    
//     </>)
// }
// export default Map



import React from 'react';

function Map() {
    return (
        <div className="container-fluid bg-dark py-5">
            <div className="container">
                <center><h1 className="text-white mb-4">Problem & Statement</h1></center>
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.7122515959973!2d80.81824077419567!3d16.79098571971414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e53fa3b4fb%3A0xfd1e193c90e4643!2sRajiv%20Gandhi%20University%20of%20Knowledge%20and%20Technology%20%2C%20Nuzvid!5e0!3m2!1sen!2sin!4v1716831412005!5m2!1sen!2sin" style={{ width: "100%", height: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-white">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-white">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label text-white">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
