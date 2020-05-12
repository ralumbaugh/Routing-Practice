import React from 'react';

const Banner = ({message, font, bannercolor}) =>{
    return(
        <p style={{color:font, backgroundColor:bannercolor}}>The word is: {message} </p>
    )
}

export default Banner;