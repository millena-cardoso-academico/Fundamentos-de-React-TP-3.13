import PropTypes from 'prop-types';
import '../styles/Temperature.css';

const Temperature = ({ temperature }) => {
  return (
    <div className="temperature-container">
      <h2>
        {temperature > 25 ? 'Está quente!' : 'Está frio!'}
      </h2>
    </div>
  );
};

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Temperature;