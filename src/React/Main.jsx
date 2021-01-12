import React, { useState } from 'react';

const hotdogAndhotdogman = () => {
    
    const [imageSrc, imageSrcUpdate] = useState('/assets/img/hotdog.png');
    
    const imageOver = () => {
        imageSrcUpdate('/assets/img/hotdogman.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/hotdog.png');
    }

    return (
        <div>Hotdog and Hotdog Man
            <img 
                src={ imageSrc }
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
                />
        </div>
    )
}

export default hotdogAndhotdogman;