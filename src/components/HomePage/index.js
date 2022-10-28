import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const HomePage = () => {

    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const bgUpRef   = useRef(null)
    const bgDownRef = useRef(null)

    useEffect(() => {

        gsap.fromTo(bgUpRef.current, { y: -500 }, { duration: 1.3, y: 0 });
        //gsap.fromTo(bgDownRef.current, { y: 500 }, { duration: 1, y: -35 });


        gsap.fromTo(titleRef1.current, { x: 1200 }, { duration: .5, x: 0 });
        gsap.fromTo(titleRef2.current, { x: 1200 }, { duration: 1, x: 0 });

    }, []);


    return (
        <>
            <div className='bg-container'>
                <div className='bg-up' ref={bgUpRef}></div>
                <div className='bg-down' ref={bgDownRef} ></div>
            </div>
            <div className="main-title-container">
                <h1 className="main-title" ref={titleRef1} id='title-calm'>CALM</h1>
                <h1 className="main-title" ref={titleRef2} id='title-night'>NIGHT</h1>
            </div>
        </>
    )
}

export default HomePage;