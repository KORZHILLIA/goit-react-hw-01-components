import PropTypes from 'prop-types';
import styles from './UserStats.module.css';

const UserStats = ({ userStats: { followers, views, likes } }) => (
  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{getComma(views)}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
);

export default UserStats;

function getComma(number) {
  const string = String(number);
  return `${string.slice(0, 1)},${string.slice(1)}`;
}

UserStats.propTypes = {
  userStats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
