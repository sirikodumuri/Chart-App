import React from 'react'
import {Bar, Pie, Scatter, Line, Bubble, Doughnut} from "react-chartjs-2"
import { Chart } from "chart.js/auto"

function MyChart() {

    const mydata = 
    [
        {
            year:2020,
            covidcases:400000
        },
        {
            year:2021,
            covidcases:350000
        },
        {
            year:2022,
            covidcases:700000
        },
    ]

    const [chartData, setchartData] = React.useState({
              
        labels: mydata.map(function(i)
        {
            return i.year
        }),

        datasets: [
            {
                data: mydata.map(function(i)
                {
                   return i.covidcases
                }),
                label: "Covid Cases",
                backgroudColor: ["Red", "Orange" , "Green"]
            }
        ]

    })


  return (
    <div style={{width: 700,height: 700}}>
        <Bar data = {chartData}/>
        <Pie data = {chartData}/>
        <Scatter data = {chartData}/>
        <Line data = {chartData}/>
        <Bubble data = {chartData}/>
        <Doughnut data = {chartData}/>
    </div>
  )
}

export default MyChart