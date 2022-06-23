import React, {useState} from 'react';

const Form = (props) => {

    const {colorArrayBox, setColorArrayBox} = props;

    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    

    setColorArrayBox([colorArrayBox, color]);
}

return (

    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color:</label>
                <input type={"text"} name={"color"} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <button>Add Box</button>
        </form>
    </div>
)
}
export default Form;
