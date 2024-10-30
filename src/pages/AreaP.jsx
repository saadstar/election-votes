import React from 'react';
import { areaColumns, areaRow } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const AreaP = () => {
  const url = 'testurl';
  console.log(url);

  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="الدوائر" title="الانتخابيه" />
      <Table rows={areaRow} columns={areaColumns} />
    </div>
  );
};
export default AreaP;
