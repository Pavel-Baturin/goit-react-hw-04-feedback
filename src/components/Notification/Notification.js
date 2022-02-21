import PropTypes from 'prop-types';
import s from './Notification.module.css';

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};

function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}

export default Notification;
