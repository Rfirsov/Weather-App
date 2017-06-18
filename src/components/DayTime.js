import React from 'react';

const DayTime = () => {
	let date = new Date();
    function getWeekDay(date) {
      let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[date.getDay()];
    }
  let daynow = date.getDate() + '/' + '0' + (date.getMonth() + 1)  + '/' + date.getFullYear();
	return (
		<div className="daytime">
			<span className="weekday">{getWeekDay(date)}</span><br/>
			<span className="daynow">{daynow}</span>
		</div>
	);
}

export default DayTime;