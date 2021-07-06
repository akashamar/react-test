import React, {useEffect, useState} from 'react'
import "./Overview.css"
import { useSelector } from "react-redux";
import { Line } from 'react-chartjs-2';

const Overview = () => {
  	const balances = useSelector(({ reduxData: { balances } }) => balances);
  	const [totalBalance, setTotalBalance] = useState(0);
  	const [months, setMonths] = useState([]);
  	const [amounts, setAmounts] = useState([]);
  	const [monthlyValue, setMonthlyValue] = useState(1);

  	useEffect(() => {
  		let Tbalance = 0

  		balances.forEach((bal) => {
	  		Tbalance += parseInt(bal)
	  		console.log(typeof(bal))
  		})

  		setTotalBalance(Tbalance)
  	},[balances])

  	const options = {
  		scales: {
  			xAxes: [{type: 'time'}],
  			yAxes: [{type: 'time'}]
  		}
  	}

  	const submit = () => {
  		if (!monthlyValue) return
  		if (!totalBalance) return
  		const monthlyAmount = monthlyValue
  		const totalMonths = Math.ceil(totalBalance/monthlyAmount)

  		let tempLables = []
  		for (let i = 1; i <= totalMonths; i++) {
  			tempLables.push(i)
  		}
  		setMonths(tempLables)

  		let tempAmounts = []
  		let tempBalance = totalBalance
  		for (let i = 1; i <= totalMonths; i++) {
  			tempAmounts.push(tempBalance)
  			tempBalance = tempBalance-monthlyAmount
  		}
  		setAmounts(tempAmounts)
  	}

	const data = {
	  labels: months,
	  datasets: [{
	    data: amounts,
	    fill: false,
	    borderColor: 'rgb(75, 192, 192)',
	  }]
	};

	return (
		<div className="overview">
			<h1>Initial balance: {totalBalance}</h1>
			<input onChange={(e) => setMonthlyValue(e.target.value)} type='number' placeholder='enter montly payment' />
			<button onClick={submit}>SUBMIT</button>
			<Line data={data} options={options}/>
		</div>
	)
}

export default Overview