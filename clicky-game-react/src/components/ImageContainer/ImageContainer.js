import React from 'react';
import './ImageContainer.css';

const ImageContainer = props => (
<div className='game-box col-md-12'>
    {props.children}
</div>
);
export default ImageContainer;
