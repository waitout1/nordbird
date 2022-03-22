import React, { useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImageZoom';

const PostImages = ({images}) => {
    const [showImageZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);


    if(images.length === 1){
        return (
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} /> 
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    else if(images.length === 2){
        return (
            <>
                <img role="presentation" style={{ width:"50%", display:"inline-block"}} src={images[0].src} alt={images[0].src} onClick={onZoom} /> 
                <img role="presentation" style={{ width:"50%", display:"inline-block"}} src={images[1].src} alt={images[0].src} onClick={onZoom} /> 
                {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    
    return (
        <>
            <img role="presentation" style={{ width:"50%", display:"inline-block"}} src={images[0].src} alt={images[0].src} onClick={onZoom} /> 
            <div
                role="presentation"
                style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: "middle" }}
                onClick={onZoom}
            >
                <PlusOutlined />
                <br />
                {images.length -1 }개의 사진 더보기
            </div>
            {showImageZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    );
}

export default PostImages;