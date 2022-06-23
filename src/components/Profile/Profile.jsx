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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
