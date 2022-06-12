import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('red');

  const newBgColor = backgroundColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={{ backgroundColor }}
        onClick={() => setBackgroundColor(newBgColor)}
      >
        {`Change to ${newBgColor}`}
      </button>
    </div>
  );
}

export default App;
