import React from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import columns from "./columns.json";
import data from "./data.json";

const gridStyle = { minHeight: 550, maxWidth: 1000 };

const Datagrid = () => {
  return (
    <div>
      <h3>Scroll horizontally to see the effect</h3>
      <ReactDataGrid
        idProperty="id"
        reorderColumns={true}
        style={gridStyle}
        // columns={columns.slice(0, 14)} // Working with 14 column
        columns={columns.slice(0, 15)} // Not working with 15 and above columns
        dataSource={data}
        rtl
      />
    </div>
  );
}

export default Datagrid