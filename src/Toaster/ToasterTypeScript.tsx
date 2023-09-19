import { useState, MouseEvent } from 'react';

export default function ToasterTypescript() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event: MouseEvent) => {
    alert('Submit button clicked!');
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}