import React from 'react';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const ElectionCenters = () => {
  const url = 'testurl';
  console.log(url);

  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="مراكز" title="الانتخاب" />
      <Table rows={employeesData} columns={employeesGrid} />
    </div>
  );
};
export default ElectionCenters;
