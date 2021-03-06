import PropTypes from 'prop-types';
import getComma from '../../../utils/getComma';
import styles from './userStats.module.css';

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

UserStats.defaultProps = {
  userStats: {},
};

UserStats.propTypes = {
  userStats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
