import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <div className="transaction-table">
      <table>
        <thead>
          <tr>
            <th>Order Source System</th>
            <th>Transaction Status</th>
            <th>Initiated By</th>
            <th>Initiated Date</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(transactions)].map((_, index) => (
            <tr key={index}>
              <td>Information TBD</td>
              <td>Information TBD</td>
              <td>Information TBD</td>
              <td>Information TBD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
