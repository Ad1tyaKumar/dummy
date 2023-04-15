import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import {Bar} from "react-chartjs-2";

ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)

export default function Chart() {
  const data={
    labels:['Politics','Entertainment','Sports','Business','Tech','Others'],
    datasets: [
      {
        label:'Sentiments',
        data:[3,6,9,2,4,10],
        backgroundColor:['aqua','red'],
        borderColor:'black',
        borderWidth:1,
      }
    ]
  }
  return (
    <div>
        <Bar data={data}>
          
        </Bar>
    </div>
  )
}
