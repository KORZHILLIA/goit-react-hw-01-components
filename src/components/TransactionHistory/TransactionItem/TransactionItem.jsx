import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

export const TransactionItem = ({ id, amount, currency, type }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
