import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';


const Table = ({ rows,columns ,id}) => {
      const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  return (
      <div>
      <GridComponent
        id={id ? id :"" }
        dataSource={rows}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 8 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {columns.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  )
}
export default Table;