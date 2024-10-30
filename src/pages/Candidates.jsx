import React from 'react';
import { candidatesRow, candidatesColumn } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const Candidates = () => {
  const url = 'testurl';
  console.log(url);
  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="صفحه" title="المرشحين" />
      <Table rows={candidatesRow} columns={candidatesColumn} id="gridcomp" />
    </div>
  );
};
export default Candidates;
