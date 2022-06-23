import PropTypes from 'prop-types';
import styles from './transactionItem.module.css';

const TransactionItem = ({ amount, currency, type }) => (
  <tr className={styles.tableRow}>
    <td className={styles.tableCell}>{type}</td>
    <td className={styles.tableCell}>{amount}</td>
    <td className={styles.tableCell}>{currency}</td>
  </tr>
);

export default TransactionItem;

TransactionItem.defaultProps = {
  type: '',
  amount: '',
  currency: '',
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
