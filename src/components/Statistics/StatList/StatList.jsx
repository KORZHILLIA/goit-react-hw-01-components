import PropTypes from 'prop-types';
import coloriser from '../../../utils/coloriser';
import styles from './StatList.module.css';

export const StatList = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: coloriser() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
