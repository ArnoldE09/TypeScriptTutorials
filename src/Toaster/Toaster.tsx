import { useState } from 'react';
import '../index.css';

function Toaster() {
  const [isShown, setIsShown] = useState(false);

  // This function is called when the blue button gets clicked
  const showToast = () => {
    setIsShown(true);

    // automatically hide the toast after 5 seconds
    // your can set a shorter/longer time if you want
    setTimeout(() => {
      setIsShown(true);
    }, 3000);
  };

  

  return (
    <>
    
      <div className='container'>
        {/* This button is used to show the toast */}
        <button className='button' onClick={showToast}>
          Show Toast
        </button>

        {/* Implement our toast here */}
        {isShown && (
          <div className='my-toast'>
            <span className='my-toast__icon'>i</span>
            <span>This is a simple toast</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Toaster;