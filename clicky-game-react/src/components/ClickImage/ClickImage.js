import React from 'react';
import './ClickImage.css';

const ClickImage = (props) => (
    <div className='click-image'>
        <img src={props.pic} alt={props.name}></img>
    </div>
);

export default ClickImage;