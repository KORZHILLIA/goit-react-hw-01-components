import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  const friendListItems = friends.map(({ avatar, id, name, isOnline }) => (
    <FriendListItem avatar={avatar} name={name} key={id} isOnline={isOnline} />
  ));
  return <ul className={styles.friendList}>{friendListItems}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
