import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from 'recharts'
const dataHigh = [
  { name: 'BC', value: 37 },
  { name: 'BV', value: 27 },
  { name: 'BH', value: 22 },
  { name: 'CJ', value: 22 },
  { name: 'CV', value: 21 }
]
const dataLow = [
  { name: 'IF', value: 1 },
  { name: 'BN', value: 2 },
  { name: 'TL', value: 2 },
  { name: 'BR', value: 3 },
  { name: 'VL', value: 3 }
]

  const BarChartChildren = React.createClass({
    render () {
      return (
        <div>
          <div style={{ width: 290, height: 120, marginBottom: 15}}>
            <h3 style={{margin:0}}>Județele cu cele mai multe centre</h3>
            <ResponsiveContainer>
              <BarChart width={150} height={40} data={dataHigh}>
                <Bar name='Nr. Centre' dataKey='value' fill='#37b8d4' barSize={30}/>
                <Tooltip />
                <XAxis dataKey="name" tickLine={false}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ width: 290, height: 60, marginBottom: 15}}>
            <h3 style={{margin:0}}>Județele cu cele mai puține centre</h3>
            <ResponsiveContainer>
              <BarChart width={150} height={20} data={dataLow}>
                <Bar name='Nr. Centre' dataKey='value' fill='#37b8d4' barSize={30}/>
                <Tooltip />
                <XAxis dataKey="name" tickLine={false}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }
  })
  export default BarChartChildren
