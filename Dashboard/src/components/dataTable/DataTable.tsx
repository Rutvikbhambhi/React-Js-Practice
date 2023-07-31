import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Props } from "recharts/types/container/Surface";
import { type } from "os";
import { Link } from "@mui/material";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string
};

const DataTable = (props: Props) => {

  const handleDelete = (id: number)=> {
    // delete the item
    console.log(id + " has been deleted!");
    
  }

  const actionColumn: GridColDef = {
     field: "action",
     headerName: "Action",
     width: 200,
     renderCell: (params)=>{
      return(
        <div className="action">
          <Link to={`/${props.lug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      )
     }
  }

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
