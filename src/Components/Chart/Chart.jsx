import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.scss';
const Chart = ({data:alldata}) => {
    const data = [];
    alldata?.data?.slice(0,100)?.map(i=>{
        if(i?.country){
            data.push({
                name:i.country,
                intensity:i.intensity
            })
        }
    })
    return (
        <div className='chart'>
            <div className='tittle'>Top 100 Country(intensity)</div>
           <ResponsiveContainer width="100%" aspect={2/1}>
           <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="intensity" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='chartgrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="intensity" stroke="#8884d8" fillOpacity={1} fill="url(#intensity)" />
</AreaChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Chart;