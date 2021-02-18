import React from "react";
import Table from "react-bootstrap/Table";

export const Transactions = ({ transactions }: any) => {
  return (
    <Table striped bordered hover responsive >
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction: any) => {
          return (
            <tr key={transaction.hash}>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.hash}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
