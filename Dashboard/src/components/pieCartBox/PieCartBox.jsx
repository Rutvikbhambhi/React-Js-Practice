import React from 'react'
import { ResponsiveContainer } from 'recharts'

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" }
    { name: "Desktop", value: 300, color: "#00C49F" }
    { name: "Laptop", value: 300, color: "#FFBB28" }
    { name: "Tablet", value: 200, color: "#FF8042" }
]

const PieCartBox = () => {
  return (
    <div className='pieCartBox'>
        <h1>Leads by Source</h1>
        <div className="chart">
            <ResponsiveContainer>
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default PieCartBox