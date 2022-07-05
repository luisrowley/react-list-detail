import React from 'react';
import './master-view.css';
import DataTable from '../../components/data-table/data-table';

const MasterView: React.FC<any> = () => {

  return (
    <main>
      <h2>Masters of React</h2>
      <DataTable />
    </main>
  );
}

export default MasterView;
