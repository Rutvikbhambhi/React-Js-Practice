import React from 'react';
import "./add.scss";
import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  colomns: GridColDef[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  return (
    <div className='add'>
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <form>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add;
