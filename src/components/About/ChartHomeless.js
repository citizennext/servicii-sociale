import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts'
const data = [
	{ name: 'Alba', value: 220 },
	{ name: 'Arad', value: 50 },
	{ name: 'Bacau', value: 135 },
	{ name: 'Bihor', value: 4 },
	{ name: 'Brasov', value: 50 },
	{ name: 'Bucuresti', value: 30 },
	{ name: 'Caras Severin', value: 84 },
	{ name: 'Covasna', value: 60 },
	{ name: 'Dambovita', value: 60 },
	{ name: 'Dolj', value: 26 },
	{ name: 'Galati', value: 9 },
	{ name: 'Harghita', value: 60 },
	{ name: 'Hunedoara', value: 30 },
	{ name: 'Iasi', value: 6 },
	{ name: 'Mures', value: 16 },
	{ name: 'Sibiu', value: 25 },
	{ name: 'Teleorman', value: 72 },
]

const renderActiveShape = props => {
	const RADIAN = Math.PI / 180
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props
	const sin = Math.sin(-RADIAN * midAngle)
	const cos = Math.cos(-RADIAN * midAngle)
	const sx = cx + (outerRadius + 5) * cos
	const sy = cy + (outerRadius + 5) * sin
	const mx = cx + (outerRadius + 8) * cos
	const my = cy + (outerRadius + 8) * sin
	const ex = mx + (cos >= 0 ? 1 : -1) * 22
	const ey = my
	const textAnchor = cos >= 0 ? 'start' : 'end'

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill="none"
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill="#333"
				fontSize={13}
			>
				{`Cap. ${value}`}
			</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill="#999"
				fontSize={13}
			>
				{`(${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	)
}

class TwoLevelPieChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0,
		}
	}

	onPieEnter = (data, index) => {
		this.setState({
			activeIndex: index,
		})
	}
	render() {
		return (
			<div style={{ width: 320, height: '250px' }}>
				<ResponsiveContainer>
					<PieChart onMouseEnter={this.onPieEnter}>
						<Pie
							activeIndex={this.state.activeIndex}
							activeShape={renderActiveShape}
							data={data}
							cx={150}
							cy={120}
							innerRadius={50}
							outerRadius={80}
							paddingAngle={3}
							fill="#37b8d4"
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>
		)
	}
}
export default TwoLevelPieChart
