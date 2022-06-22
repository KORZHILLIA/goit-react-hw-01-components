import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, id, name, isOnline }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        key={id}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
