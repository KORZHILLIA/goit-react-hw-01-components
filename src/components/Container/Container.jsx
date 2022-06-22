import PropTypes from 'prop-types';
import styles from './Container.module.css';

export const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = { children: PropTypes.node };
