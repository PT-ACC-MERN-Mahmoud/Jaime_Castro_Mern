import React from 'react';


const View = (props) => {
    const {colorArrayBox} = props;

    return(
        <div>
            {
                colorArrayBox.map((color, index) => (
                    <div className='color' key={index} style={{
                        display: "inline-block",
                        margin: "20px",
                        height: "40px",
                        width: "40px",
                        backgroundColor: color
                    }}
                    >

                    </div>
                ))
            }
        </div>

    );
}
    
export default View;