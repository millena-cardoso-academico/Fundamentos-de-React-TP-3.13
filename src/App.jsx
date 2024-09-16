import { useState } from 'react';
import Temperature from './components/Temperature';
import './styles/App.css';

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="temperature-form">
          <h1>Informe a temperatura em graus Celsius:</h1>
          <input
            type="number"
            value={temperature || ''}
            onChange={(e) => setTemperature(Number(e.target.value))}
            placeholder="Digite a temperatura"
            className="temperature-input"
          />
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      ) : (
        <Temperature temperature={temperature} />
      )}
    </div>
  );
};

export default App;