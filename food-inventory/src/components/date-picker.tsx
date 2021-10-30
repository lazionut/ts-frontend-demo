import '../stylesheet/date-picker.scss';

export default function DatePicker() {
    let days: JSX.Element[] = [];

    for (let index = 1; index < 28; ++index) {
        days.push(<li id={index.toString()}>{index}</li>);
    }

    return (
        <div id="date-picker-container">
            <div className="month">
                <div className="border-right-container"><p>15 TODAY</p></div>
                <div className="border-right-container same-line-display"><p>August <i className="triangle-down"></i></p></div>
                <div className="same-line-display"><p>2021 <i className="triangle-down"></i></p></div>
            </div>

            <ul className="weekdays">
                <li>MO</li>
                <li>TU</li>
                <li>WE</li>
                <li>TH</li>
                <li>FR</li>
                <li>SA</li>
                <li>SU</li>
            </ul>

            <ul className="days">
                {days}
            </ul>
        </div>
    );
}
