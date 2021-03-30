import { useEffect, useState } from "react";
import randomColor from "randomcolor";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import styles from "../../styles/adminDashboard/chart.module.css";

// const dummyChartData = [
//   { amount: "100", date: "21-03" },
//   { amount: "90", date: "21-03" },
//   { amount: "104", date: "22-03" },
//   { amount: "134", date: "23-03" },
//   { amount: "134", date: "23-03" },
//   { amount: "134", date: "23-03" },
//   { amount: "42", date: "24-03" },
//   { amount: "52", date: "25-03" },
//   { amount: "63", date: "26-03" },
//   { amount: "153", date: "27-03" },
//   { amount: "153", date: "27-03" },
//   { amount: "153", date: "28-03" },
//   { amount: "153", date: "29-03" },
//   { amount: "153", date: "30-03" },
//   { amount: "153", date: "01-04" },
//   { amount: "153", date: "02-05" },
//   { amount: "153", date: "03-06" },
//   { amount: "153", date: "04-07" },
//   { amount: "153", date: "05-08" },
// ];

const Barchart = ({ paymentData }) => {
  const [labelData, setLabelData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [color, setColor] = useState([]);

  const map = new Map();

  for (let i = 0; i < paymentData.length; i++) {
    if (map.has(moment(paymentData[i].createdAt).format("MMMM Do YYYY"))) {
      let val = map.get(
        moment(paymentData[i].createdAt).format("MMMM Do YYYY")
      );
      val = val + parseInt(paymentData[i].amount / 100);
      map.set(moment(paymentData[i].createdAt).format("MMMM Do YYYY"), val);
    } else {
      map.set(
        moment(paymentData[i].createdAt).format("MMMM Do YYYY"),
        parseInt(paymentData[i].amount / 100)
      );
    }
  }

  useEffect(() => {
    let data = new Array();
    let label = new Array();
    map.forEach((value, key) => {
      data.push(value);
      label.push(key);
    });
    setChartData(data);
    setLabelData(label);
    setColor(
      randomColor({
        count: map.size,
        luminosity: "dark",
      })
    );
  }, []);
  return (
    <section className={styles.chartAreaWrapper}>
      <Bar
        data={{
          labels: labelData,
          datasets: [
            {
              label: "# of revenue",
              data: chartData,
              backgroundColor: color,
              borderColor: color,
              borderWidth: 1,
              barThickness: 20,
            },
          ],
        }}
        height={270}
        width={350}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </section>
  );
};

export default Barchart;
