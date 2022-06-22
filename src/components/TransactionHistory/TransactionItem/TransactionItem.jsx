import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

export const TransactionItem = ({ id, amount, currency, type }) => (
  <tr className={styles.tableRow}>
    <td className={styles.tableCell}>{type}</td>
    <td className={styles.tableCell}>{amount}</td>
    <td className={styles.tableCell}>{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
