import React from 'react';
import { employeesData, electionPlace } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const ElectionCenters = () => {
  

  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="لجان" title="الانتخاب" navi='/add-number' any='w-[120px] h-[50px] rounded' text='اضف لجنه' />
      <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="ابحث بالمحافظه"
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="ابحث بالدائره"
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="ابحث بالقسم"
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
      <Table rows={employeesData} columns={electionPlace} />
    </div>
  );
};
export default ElectionCenters;
