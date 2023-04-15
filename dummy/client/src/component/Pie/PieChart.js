import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import {Pie} from "react-chartjs-2"

ChartJS.register(
  ArcElement,Tooltip,Legend
)

export default function Piechart() {
const data={
  labels : ['Positive','Negative'],
  datasets:[
    {
      data:[6,9],
      backgroundColor:['green','red'],
      borderWidth:2,
      borderColor:'Black'
    }
  ]
};
  return (
    <div style={{width:"20%"}}>
    <Pie data={data} options={{
      responsive:true,
      plugins:{
        fontSize:30,
        text:'Sentiments',
        display:true
      },
      legend:{
        labels:{
        font:{size:15}
        }
      }  
    }}></Pie>
      {/* <PieChart width={700} height={700}>
          <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart> */}
        
    </div>
  )
}
