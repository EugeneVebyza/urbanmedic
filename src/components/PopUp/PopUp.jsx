import './PopUp.css';
import PropTypes from 'prop-types';

function PopUp({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Заголовок попапа</h2>
        <p>Содержимое попапа</p>
        <button onClick={onClose}>Закрыть попап</button>
      </div>
    </div>
  );
}
PopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
