

import React, { useState } from 'react';
import Searchtv from './Searchtv';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Tvshows() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className="bg-dark">
        <div className="container" style={{ textAlign: "center", marginTop: "0" }}>
          <h1 className="text-white mb-2">Tvshow Title</h1>
          <button type="button" className="btn btn-outline-light mb-2" onClick={handleSearchClick}>
            {showSearch ? "Hide Search" : "Search More"}
          </button>
        </div>
      </div>

      {showSearch && <Searchtv />}
      
      {!showSearch && (
        <>
        <div className = "bg-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>
                  <div className="carousel-inner" style={{ transitionDuration: "0.1s" }}>
                    <div className="carousel-item active">
                      <img src={"/images/img4.jpg"} alt={"Los Angeles"} className="d-block" style={{ width: "100%", height: "500px" }} />
                      <div className="carousel-caption">
                        <h3>Los Angeles</h3>
                        <p>We had such a great time in LA!</p>
                      </div>
                    </div>
                    {/* Additional carousel items */}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container-fluid">
      <center><h1 className="text-center" style = {{color:"orange"}}>Horizontal Scrollable Images</h1></center>
       <div className="row flex-nowrap" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}> 
          <img src="/images/imgtv1.jpg" className="img-fluid" alt="Image 1" />
        </div>
         <div className="col-md-3">
           <img src="/images/imgtv2.jpg" className="img-fluid" alt="Image 2" />
         </div>
         <div className="col-md-3">
           <img src="/images/imgtv3.jpg" className="img-fluid" alt="Image 3" />
         </div>
         <div className="col-md-3">
<img src="/images/imgtv4.jpg" className="img-fluid" alt="Image 3" />
         </div>
         <div className="col-md-3">
           <img src="/images/imgtv5.jpg" className="img-fluid" alt="Image 3" />
         </div>
         <div className="col-md-3">
           <img src="/images/imgtv6.jpg" className="img-fluid" alt="Image 3" />
         </div>
         <div className="col-md-3">
           <img src="/images/imgtv7.jpg" className="img-fluid" alt="Image 3" />
         </div>
         <div className="col-md-3">
           <img src="/images/imgtv1.jpg" className="img-fluid" alt="Image 3" />
         </div>
       
       </div>
     </div> */}



     <div className="container-fluid">
      <center><h1 className="text-center mt-5" style = {{color:"orange"}}>Popular</h1></center>
      <div className="row flex-nowrap" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}> {/* Use inline styles to hide the scrollbar */}
        <div className="col-md-3">
          <img src="/images/imgtv1.jpg" className="img-fluid" alt="Image 1" style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv2.jpg" className="img-fluid" alt="Image 2"style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv3.jpg" className="img-fluid" alt="Image 3"style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv4.jpg" className="img-fluid" alt="Image 3" style = {{height :"250px", width :"300px"}}/>
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv5.jpg" className="img-fluid" alt="Image 3" style = {{height :"250px", width :"300px"}}/>
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv6.jpg" className="img-fluid" alt="Image 3"style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv7.jpg" className="img-fluid" alt="Image 3" style = {{height :"250px", width :"300px"}}/>
        </div>
        <div className="col-md-3">
          <img src="/images/imgtv3.jpg" className="img-fluid" alt="Image 3"style = {{height :"250px", width :"300px"}} />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>



    
    <div className="container-fluid">
      <center><h1 className="text-center mt-5" style = {{color:"orange"}}>Popular</h1></center>
      <div className="row flex-nowrap" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}> {/* Use inline styles to hide the scrollbar */}
        <div className="col-md-3">
          <img src="/images/img2.jpg" className="img-fluid" alt="Image 1" style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/img3.jpg" className="img-fluid" alt="Image 2"style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/img4.jpg" className="img-fluid" alt="Image 3"style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/img5.jpg" className="img-fluid" alt="Image 3" style = {{height :"250px", width :"300px"}}/>
        </div>
        <div className="col-md-3">
          <img src="/images/img6.jpg" className="img-fluid" alt="Image 3" style = {{height :"250px", width :"300px"}}/>
        </div>
        <div className="col-md-3">
          <img src="/images/img7.jpg" className="img-fluid" alt="Image 3"style = {{height :"250px", width :"300px"}} />
        </div>
        <div className="col-md-3">
          <img src="/images/img8.jpg" className="img-fluid" alt="Image 3" style = {{height :"250px", width :"300px"}}/>
        </div>
        <div className="col-md-3">
          <img src="/images/img9.jpg" className="img-fluid" alt="Image 3"style = {{height :"250px", width :"300px"}} />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>


    </div>

        </>
      )}
    </>
  );
}

export default Tvshows;




