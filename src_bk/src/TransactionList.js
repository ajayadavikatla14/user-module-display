import React from 'react';

const TransactionList = ({ pri }) => {
  const transactions = [
    { orderSource: 'Information TBD', status: 'Information TBD', initiatedBy: 'Information TBD', date: 'Information TBD' },
    { orderSource: 'Information TBD', status: 'Information TBD', initiatedBy: 'Information TBD', date: 'Information TBD' },
    { orderSource: 'Information TBD', status: 'Information TBD', initiatedBy: 'Information TBD', date: 'Information TBD' },
    { orderSource: 'Information TBD', status: 'Information TBD', initiatedBy: 'Information TBD', date: 'Information TBD' },
    { orderSource: 'Information TBD', status: 'Information TBD', initiatedBy: 'Information TBD', date: 'Information TBD' },
    { orderSource: 'Information TBD', status: 'Information TBD', initiatedBy: 'Information TBD', date: 'Information TBD' }
  ];

  return (
    <div className="transaction-table-container">
      <h4>Transactions for {pri}</h4>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Order Source System</th>
            <th>Transaction Status</th>
            <th>Initiated By</th>
            <th>Initiated Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.orderSource}</td>
              <td>{transaction.status}</td>
              <td>{transaction.initiatedBy}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
