// function Accordation(){
//     return(<>

// <button class="accordion">Section 1</button>
// <div class="panel">
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// </div>

// <button class="accordion">Section 2</button>
// <div class="panel">
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// </div>

// <button class="accordion">Section 3</button>
// <div class="panel">
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// </div>

// <script>
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


    

    
        
//         </>
//     )
// }

import React, { useState } from 'react';
import './Accordation.css'; // Import your CSS file for styling

function Accordation() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>Section 1</button>
            <div className="panel" style={{ maxHeight: activeIndex === 0 ? 'initial' : '0' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>Section 2</button>
            <div className="panel" style={{ maxHeight: activeIndex === 1 ? 'initial' : '0' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>Section 3</button>
            <div className="panel" style={{ maxHeight: activeIndex === 2 ? 'initial' : '0' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </>
    );
}

export default Accordation;
