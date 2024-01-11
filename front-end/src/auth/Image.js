import React from "react";
import picture from '../images/login.jpg';

const Image = ({ pic }) => {
  try {
    // Import image on demand../images/
    const image = require(picture);

    // If the image doesn't exist. return null
    if (!image) return null;
    return <img src={image} alt={pic} width="100%" />;
  } catch (error) {
    // console.log(`Image with name "${pic}" does not exist`);
    return null;
  }
};

export default Image;