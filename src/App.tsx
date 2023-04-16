import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import aa from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState<number>(0);

	const handleCountClick = (): void => {
		setCount(count => count + 1);
	};

	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={handleCountClick}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;