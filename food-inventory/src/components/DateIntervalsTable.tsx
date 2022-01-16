import { DataGrid, GridColDef } from "@mui/x-data-grid";

import dateIntervalService from "../hooks/useDateInterval";

const dateColumns: GridColDef[] = [
  { field: "startDate", headerName: "Start date", type: "number", width: 150 },
  { field: "endDate", headerName: "End date", type: "number", width: 150 },
];

const getDateIntervalsArray = async () => {
  let dateIntervalsArray: Array<Object> = [{}];
  let assignedId = 0;

  await dateIntervalService.getDateInterval().then((response) => {
    dateIntervalsArray = response;
  });
  dateIntervalsArray = dateIntervalsArray.map((intervals) => ({
    ...intervals,
    id: ++assignedId,
  }));

  return dateIntervalsArray;
};

let dateIntervalsRows: Array<Object>;
getDateIntervalsArray().then((result) => (dateIntervalsRows = result));

export default function DateIntervalsTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={dateIntervalsRows} columns={dateColumns} />
    </div>
  );
}
