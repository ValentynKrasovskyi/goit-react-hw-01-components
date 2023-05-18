import React from 'react';
import PropTypes from 'prop-types';
import { TransStyle } from './Transaction.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransStyle.Table>
      <TransStyle.TableHeader>
        <TransStyle.TableRow>
          <TransStyle.TableHeaderCell>Type</TransStyle.TableHeaderCell>
          <TransStyle.TableHeaderCell>Amount</TransStyle.TableHeaderCell>
          <TransStyle.TableHeaderCell>Currency</TransStyle.TableHeaderCell>
        </TransStyle.TableRow>
      </TransStyle.TableHeader>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <TransStyle.TableCell>{item.type}</TransStyle.TableCell>
            <TransStyle.TableCell>{item.amount}</TransStyle.TableCell>
            <TransStyle.TableCell>{item.currency}</TransStyle.TableCell>
          </tr>
        ))}
      </tbody>
    </TransStyle.Table>
  );
};

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;