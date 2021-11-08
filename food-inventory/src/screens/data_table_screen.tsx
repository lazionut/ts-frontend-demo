import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'imageName', headerName: 'Image name', type: 'string', width: 200 },
  { field: 'size', headerName: 'Size', type: 'string', width: 130 },
  { field: 'recognitionResult', headerName: 'Recognition result', type: 'string', width: 200 },
  { field: 'imageDownloadLink', headerName: 'Image download link', type: 'string', sortable: false, width: 900 },
];

const rows = [
  { id: 1, imageName: 'Cat', size: '480KB', recognitionResult: '60%', imageDownloadLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg' },
  { id: 2, imageName: 'Dog', size: '56KB', recognitionResult: '30%', imageDownloadLink: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg' },
  { id: 3, imageName: 'Rabbit', size: '416KB', recognitionResult: '40%', imageDownloadLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/1200px-Oryctolagus_cuniculus_Rcdo.jpg' },
  { id: 4, imageName: 'Owl', size: '692KB', recognitionResult: '60%', imageDownloadLink: 'https://www.aviary.org/wp-content/uploads/2020/09/owl-o-ween-for-web-e1602272060600.png' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}