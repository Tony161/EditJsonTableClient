import React from 'react';

export default (props) => (
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map(row => (
          <tr>
            <td>{row.rank}</td>
            <td>{row.name}</td>
            <td>{row.surname}</td>
            <td>{row.company}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);
