import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const transactionItems = items.map(({ id, type, amount, currency }) => (
    <TransactionItem key={id} type={type} amount={amount} currency={currency} />
  ));
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>{transactionItems}</tbody>
  </table>;
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
