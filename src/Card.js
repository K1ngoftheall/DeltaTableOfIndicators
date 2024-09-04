import "./Card.css";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Card({
  card: { id, title, values, week },
}) {
  const TodayValue = values[1];
  const YesterdayValue = values[0];

  function handleClick() {
    const Button =  document.getElementById(`${id}`)
    if(!Button.classList.contains('active')){
        Button.classList.add('active');
    }else{
        Button.classList.remove('active');
    } ;
  }

  const differenceNum = Math.ceil(
    (Number(TodayValue.value) - Number(YesterdayValue.value)) /
      (Number(TodayValue.value) / 100)
  );

  return (
    <li className="Card">
      <div className="CardItem CardName"  onClick={handleClick}>
        {title}
      </div>
      <div className="CardItem CardToday">{TodayValue.value}</div>
      <div className={`CardItem CardYesterday ${differenceNum > 0 ? "Green" : "Red"}`}>
        {" "}
        <p className="YesterdayValue">{YesterdayValue.value}</p>{" "}
        <p className="YesterdayValue diff">{differenceNum + "%"}</p>
      </div>
      <div className="CardItem CardWeek">{week}</div>

      <div className="graph_container" id={id}>
        <LineChart width={680} height={250} data={values}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3A4C64" />
        </LineChart>
      </div>
    </li>
  );
}
