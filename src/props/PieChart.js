import React from 'react'
import Pie from 'react-chartjs-2';

const labels = ["January", 'February', 'March', 'April', 'May', 'June']; // Fixed typo here

const data = {
    labels: labels,
    datasets: [
        {
            label: "Users",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
        }
    ]
}

function PieChart() {
  return (
    <div className='bg-white border border-secondary'>
        <Pie data={data}></Pie>
    </div>
  )
}

export default PieChart
