import React from 'react';
import { candidatesRow, candidatesColumn } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const Candidates = () => {

  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="صفحه" title="المرشحين" text='اضف مرشح' navi={"/add-candidate"} any='w-[120px] h-[50px] rounded' />
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
      <Table rows={candidatesRow} columns={candidatesColumn} id="gridcomp" />
    </div>
  );
};
export default Candidates;
