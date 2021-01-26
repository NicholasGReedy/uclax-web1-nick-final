import React, { useState } from 'react';
import styled from 'styled-components';

const HotdogAndHotdogman = () => {

        
    const [imageSrc, imageSrcUpdate] = useState ('/assets/img/hotdog.png');
    
    const imageOver = () => {
        imageSrcUpdate('/assets/img/hotdogman.png');
    }
    const imageOut = () => {
        imageSrcUpdate('/assets/img/hotdog.png');
    }

    return (
        <HotdogAndHotdogmanStyled className='HotdogAndHotdogman'>
            <h2>Hotdog and Hotdog Man</h2>
            <img 
                src={ imageSrc }
                alt='Hotdog and Hotdogman'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            />
        </HotdogAndHotdogmanStyled>
    );
}

export default HotdogAndHotdogman;

const HotdogAndHotdogmanStyled = styled.div`
    
`;