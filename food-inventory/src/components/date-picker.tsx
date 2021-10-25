import '../stylesheet/date-picker.scss';

export default function DatePicker() {
    let days: JSX.Element[] = [];

    for (let index = 1; index < 28; ++index) {
        days.push(<li className="inactive" id={index.toString()}>{index}</li>);
    }
    

    return (
        <div>
            <div className="month">
                <ul>
                    <li className="prev">&#10094;</li>
                    <li className="next">&#10095;</li>
                    <li>August<span>2021</span></li>
                </ul>
            </div>

            <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>

            <ul className="days">
                {days}
            </ul>
        </div>
    );
}
