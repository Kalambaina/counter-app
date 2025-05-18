import { useState } from 'react';
import './App.css'; // Optional: For your styling

function App() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const handleIncrease = () => {
    if (count < limit) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <main style={styles.container}>
      <h1>Click Counter</h1>
      <p style={styles.counter}>Count: {count}</p>

      <div style={styles.buttonGroup}>
        <button onClick={handleDecrease} style={styles.button}>Decrease</button>
        <button onClick={handleIncrease} style={styles.button}>Increase</button>
      </div>

      {count === limit && <p style={styles.warning}>🎉 You've reached the limit!</p>}
    </main>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5rem',
    fontFamily: 'Arial',
  },
  counter: {
    fontSize: '2rem',
    margin: '1rem 0',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
  },
  warning: {
    marginTop: '1rem',
    color: 'red',
    fontWeight: 'bold',
  },
};

export default App;
