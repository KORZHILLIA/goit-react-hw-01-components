import PropTypes from 'prop-types';
import StatList from './StatList';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const statListItems = stats.map(({ id, label, percentage }) => (
    <StatList key={id} label={label} percentage={percentage} />
  ));
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>{statListItems}</ul>
  </section>;
};

export default Statistics;

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
