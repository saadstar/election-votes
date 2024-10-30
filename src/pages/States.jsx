import React from 'react';
import { statesColumns, statesRow } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const States = () => {
  const url = 'fsfd';
  console.log(url);
  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="" title="المحافظات" />
      <Table rows={statesRow} columns={statesColumns} />
    </div>
  );
};
export default States;
