import React from 'react';
import { centerColumns, centerRow } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const Center = () => {
  const url = 'testurl';
  console.log(url);
  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="اسماء" title="الاقسام" />
      <Table rows={centerRow} columns={centerColumns} />
    </div>
  );
};
export default Center;
