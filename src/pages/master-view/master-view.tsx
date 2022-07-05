import React from 'react';
import './master-view.css';
import DataTable from '../../components/data-table';

const MasterView: React.FC<any> = (props: any) => {

  return (
    <>
      <h2>Masters of React</h2>
      <DataTable charData={props.charData}/>
    </>
  );
}

export default MasterView;
