import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const FriendListItem = ({ avatar, isOnline, name }) => (
  <li className={styles.item}>
    <span className={chooseClassColor(isOnline)}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;

function chooseClassColor(string) {
  const status = [styles.status];
  string ? status.push(styles.online) : status.push(styles.offline);
  return status.join(' ');
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
