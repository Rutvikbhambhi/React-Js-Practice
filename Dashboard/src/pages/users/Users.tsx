import React from 'react';

import "./users.scss";
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';

const Users = () => {

  return (
    <div className='users'>
      <div className="info">
        <h1>User</h1>
        <button>Add New Users</button>
      </div>
      <DataTable />
    </div>
  )
}

export default Users