import React, { useState } from 'react';

const Login = () => {
    
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
                alt='Hotdog and Hotdogman'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
                />
        </div>
    )
}

export default Login;