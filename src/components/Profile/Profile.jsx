import PropTypes from 'prop-types';
import UserStats from './UserStats';
import styles from './profile.module.css';

const Profile = ({ avatar, location, tag, stats, username: userName }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={tag}
        width="150"
        height="150"
      />
      <p className={styles.name}>{userName}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <UserStats userStats={stats} />
  </div>
);

export default Profile;

Profile.defaultProps = {
  username: '',
  tag: '',
  location: '',
  avatar: '',
  stats: {},
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
