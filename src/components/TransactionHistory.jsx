import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Type: PropTypes.string,
      Amount: PropTypes.number,
      Currency: PropTypes.string,
    })
  ),
};
