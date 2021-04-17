import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm.js';
import Box from './Box.js';


function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };
      
    const addBox = box => {
    setBoxes(boxes => [...boxes, box]);
    };

    const renderBoxes = () => {
        return (
          <div>
            {boxes.map(box => (
              <Box key={box.id} 
              id={box.id} 
              handleRemove={removeBox} 
              width={box.width} 
              height={box.height} 
              backgroundColor={box.backgroundColor}/>
            ))}
          </div>
        );
    };
    
    

    return (
        <div className="BoxList">
          <NewBoxForm addBox={addBox} />
          {renderBoxes()}
        </div>
      );
}

export default BoxList;