import React from 'react';

const RoundedImage = ({src, alt}) => (
    <div>
        <img className="image-rounded" src={src} alt={alt}/>
    </div>
);

export default RoundedImage;