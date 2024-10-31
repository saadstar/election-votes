import React from 'react';
import { areaColumns, areaRow } from '../data/dummy';
import { Header } from '../components';
import Table from '../components/Table';

const AreaP = () => {
  

  return (
    <div className="m-2 md:m-4 mt-3 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="الدوائر" title="الانتخابيه" text='اضف دائره' navi={"/add-center"} any='w-[120px] h-[50px] rounded' />
        <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="ابحث بالمحافظه"
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
      <Table rows={areaRow} columns={areaColumns} />
    </div>
  );
};
export default AreaP;
