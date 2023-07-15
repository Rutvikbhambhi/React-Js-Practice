// import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import Image from "../../assets/movix-logo.png"
import "react-lazy-load-image-component/src/effects/blur.css";
// import "react-lazy-load-image-component/src/effects/blur.css";

const img = ({ src, className }) => {
    // const img = (src) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
        // <img
        //     // className={className || ""}
        //     // effect="blur"
        //     src={src}
        // />
    );
};

export default img;