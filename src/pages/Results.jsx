import React from 'react';
import { resultsColumns, resultsRow } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const Results = () => {
  const url = 'testurl';
  console.log(url);
  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="النتائج" title="الانتخابيه" />
      <Table rows={resultsRow} columns={resultsColumns} />
    </div>
  );
};
export default Results;
