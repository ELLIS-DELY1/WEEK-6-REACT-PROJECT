import React, { useState } from 'react';

function ToggleMessage({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>{message}</p>}
    </div>
  );
}

export default ToggleMessage;
