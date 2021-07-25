import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/ducks/counter';

function App() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const parentStyle = {};

	const buttons = {
		display: 'flex',
	};

	const inc = () => {
		dispatch(increment());
	};

	const dec = () => {
		dispatch(decrement());
	};

	return (
		<>
			<h2>{count}</h2>
			<div style={parentStyle}>
				<div style={buttons}>
					<button onClick={inc}>Increment</button>
					<button onClick={dec}>Decrement</button>
				</div>
			</div>
		</>
	);
}

export default App;
