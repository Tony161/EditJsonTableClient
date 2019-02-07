import React from 'react';
import data from './task.json';
import Table from './table';

export default () => {
  return (
    <div className="container">
      <Table data={data} />
    </div>
  );
}
