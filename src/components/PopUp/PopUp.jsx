import './PopUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/reducers/rootSlice';
import UserForm from '../UserForm/UserForm';


function PopUp() {

  const dispatch = useDispatch();
  const { modalIsOpen, modalData } = useSelector(state => state.root);

  return (
    <div className={modalIsOpen ? "modal active" : "modal"} onClick={() => dispatch(closeModal())}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img className="modal__cross" onClick={() => dispatch(closeModal())} src="/popup__cross.svg" alt="" />
        <UserForm user={modalData} />
      </div>
    </div>
  );
}

export default PopUp;
