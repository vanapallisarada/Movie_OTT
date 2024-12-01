// import React from 'react';
// import bgvideo from './media/bgvideo.mp4'; // Importing the video file

// function VideoPlayer() {
//     return (
//         <div>
           
//             <video controls width="640" height="360">
//                 <source src={bgvideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// }

// export default VideoPlayer;

import React from 'react';
import bgvideo from './media/bgvideo.mp4'; // Importing the video file

function VideoPlayer() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video controls width="480" height="270">
                <source src={bgvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;






