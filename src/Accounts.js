import React, {useState} from 'react'
import './Accounts.css'
import {setBalances} from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Accounts = (e) => {
	const dispatch = useDispatch();
  	const balances = useSelector(({ reduxData: { balances } }) => balances);
  	const [newbalance, setNewbalance] = useState(null);

  	const submitAmount = (e) => {
  		e.preventDefault()

  		dispatch(setBalances([...balances, newbalance]))
  	}

	return (
		<form onSubmit={submitAmount} className="accounts">
			<h1>Accounts</h1>
			<h4>counts: {balances.length}</h4>
			<input onChange={(e) => setNewbalance(e.target.value)} type='number' placeholder='enter amount' />
			<button type="submit">Submit</button>
			{balances.map((bal) => 
				<div id="balances">
					<h3>Balance:</h3><h4> {bal}</h4>
				</div>
			)}
		</form>
	)
}

export default Accounts