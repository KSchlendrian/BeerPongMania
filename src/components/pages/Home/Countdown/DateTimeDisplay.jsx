const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <>
      <div className={isDanger ? "countdown danger" : "countdown"}></div>
      <p>{value}</p>
      <span>{type}</span>
    </>
  );
};

export default DateTimeDisplay;
