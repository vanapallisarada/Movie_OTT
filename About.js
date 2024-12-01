




import VideoPlayer from "./videoforabout";

import './ImageGallery.css';

import BackgroundImages from './Abtheader'


function About(){
      
    return(
        <>

        <BackgroundImages/>































        <div className = "container-fluid bg-dark">
            <div className="container-fluid bg-dark text-white">
                <center><h1>Exploring the World of Film?</h1></center>
                <div className="row">
                 
                    <div className="col-md-6 text-white mt-5">
                        <h4>This is heading</h4>
                        <p>
                            Movies are a form of visual storytelling that typically involves a sequence of images, often accompanied by sound, that convey a narrative, depict characters, and evoke emotions. Movies can entertain, educate, inspire, and provoke thought, making them a powerful medium for communication and expression. Here are some ways in which movies help us:
                            form of visual storytelling that typically involves a sequence of images, often accompanied by sound, that convey a narrative, depict characters, and evoke emotions. Movies can entertain, educate, inspire, and provoke thought, making them a powerful medium for communication and expression. Here are some ways in which movies help us:
                        </p>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
                            <VideoPlayer style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>


            <div className = "container-fluid bg-dark text-white" style = {{marginTop: '30px'}}>
            <div className="row">
            <div className="col-md-6 mt-5">
                     <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
                         <VideoPlayer style={{ width: '100%' }} />
                     </div>
                 </div>
                 
                 <div className="col-md-6 text-white mt-5">
                     <h4>This is heading</h4>
                     <p>
                         Movies are a form of visual storytelling that typically involves a sequence of images, often accompanied by sound, that convey a narrative, depict characters, and evoke emotions. Movies can entertain, educate, inspire, and provoke thought, making them a powerful medium for communication and expression. Here are some ways in which movies help us:
                         form of visual storytelling that typically involves a sequence of images, often accompanied by sound, that convey a narrative, depict characters, and evoke emotions. Movies can entertain, educate, inspire, and provoke thought, making them a powerful medium for communication and expression. Here are some ways in which movies help us:
                     </p>
                 </div>
               
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





<div className="container-fluid">
  <center><h1 className="text-center mt-5" style={{color:"orange"}}>Popular</h1></center>
  <div className="row flex-nowrap justify-content-center" style={{overflowX: 'auto', scrollbarWidth: 'none', paddingLeft: '5px', paddingRight: '5px'}}> {/* Add padding to the row */}
    <div className="col-md-3 px-1"> {/* Adjusted padding between columns */}
      <img src="/images/img2.jpg" className="img-fluid" alt="Image 1" style={{height: "250px", width: "300px", margin: "auto"}} /> {/* Center the image horizontally */}
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img3.jpg" className="img-fluid" alt="Image 2" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img4.jpg" className="img-fluid" alt="Image 3" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img5.jpg" className="img-fluid" alt="Image 4" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img6.jpg" className="img-fluid" alt="Image 5" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img7.jpg" className="img-fluid" alt="Image 6" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img8.jpg" className="img-fluid" alt="Image 7" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    <div className="col-md-3 px-1">
      <img src="/images/img9.jpg" className="img-fluid" alt="Image 8" style={{height: "250px", width: "300px", margin: "auto"}} />
    </div>
    {/* Add more images as needed */}
  </div>
</div>














<div className = "container-fluid mt-5 mb-5 text-white">
    <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src="/images/img3.jpg" alt="Cinque Terre" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_forest.jpg">
            <img src="/images/img3.jpg" alt="Forest" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_lights.jpg">
            <img src="/images/img3.jpg" alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src="/images/img3.jpg" alt="Mountains" width="600" height="400" />
          </a>
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>

      </div>






<div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="image-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/img2.jpg" alt="Image 1" className="img-fluid" />
            <div className="overlay" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px' }}>
              <h2 style={{ margin: 0 }}>Image 1</h2>
              <p style={{ margin: 0 }}>This is the description of Image 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/img2.jpg" alt="Image 2" className="img-fluid" />
            <div className="overlay" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px' }}>
              <h2 style={{ margin: 0 }}>Image 2</h2>
              <p style={{ margin: 0 }}>This is the description of Image 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/img3.jpg" alt="Image 3" className="img-fluid" />
            <div className="overlay" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px' }}>
              <h2 style={{ margin: 0 }}>Image 3</h2>
              <p style={{ margin: 0 }}>This is the description of Image 3.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/img4.jpg" alt="Image 4" className="img-fluid" />
            <div className="overlay" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px' }}>
              <h2 style={{ margin: 0 }}>Image 4</h2>
              <p style={{ margin: 0 }}>This is the description of Image 4.</p>
            </div>
          </div>
        </div>
      </div>
    </div>




      







      </div>


      <h1>this page is under construcion</h1>
        </>
    )
}

export default About;







