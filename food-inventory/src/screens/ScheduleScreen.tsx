import DatePicker from "../components/DatePicker";
import DateIntervalsTable from "../components/DateIntervalsTable";

export default function ScheduleScreen() {
  return (
    <>
      <div style={{ height: 100 }}>
        <DatePicker />
      </div>
      <div style={{ width: "25%"}}>
        <DateIntervalsTable />
      </div>
    </>
  );
}
