import React,{useEffect} from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { useStateContext } from '../contexts/ContextProvider';


const Table = ({ rows,columns ,id}) => {
  const toolbarOptions = ['Search'];
  const { currentColor } = useStateContext();

  const editing = { allowDeleting: true, allowEditing: true };

   useEffect(() => {
    const buttons = document.querySelectorAll('.e-active');
    buttons.forEach((button) => {
      button.style.backgroundColor =currentColor; 
      button.style.color = 'white';
      button.style.border = 'none';
    });
   }, []);
  
  return (
      <div className='mt-3'>
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