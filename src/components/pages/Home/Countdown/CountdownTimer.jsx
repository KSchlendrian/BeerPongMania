import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../../../shared/Hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!</span>
      <p>Die Zeit is abgelaufen!!</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay
        value={days}
        type={"days"}
        isDanger={days <= 3}
      />
      <p>:</p>
      <DateTimeDisplay
        value={hours}
        type={"hours"}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={minutes}
        type={"minutes"}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={seconds}
        type={"seconds"}
        isDanger={false}
      />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (false) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
