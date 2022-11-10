import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
	const [time, setTime] = useState(new Date());

	const timer = setInterval(() => {
		setTime(new Date());
	}, 1000);

	useEffect(() => {
		return () => {
			clearInterval(timer);
		};
	}, [timer]);

	return (
		<div style={{ whiteSpace: 'pre-line' }}>
			<h3>현재 시간 : {time.toLocaleTimeString()}</h3>
			<Router basename={process.env.PUBLIC_URL}>
				<>
					<nav>
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/resume">이력서</Link>
							</li>
							<li>
								<Link to="/portfolio">포트폴리오</Link>
							</li>
						</ul>
					</nav>
				</>
				<Routes>
					<Route path="/resume" element={<Resume />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/" element={<>Home</>} />
				</Routes>
			</Router>
		</div>
	);
}

const Resume = () => {
	return (
		<>
			<h3>자기소개</h3>
			<h3>이름 : 김한성</h3>
			<h3>학력</h3>
			<>
				<li>장훈고등학교</li>
				<li>중앙대학교</li>
			</>
			<h3>경력</h3>
			<>
				<li>SKT</li>
			</>
		</>
	);
};

const Portfolio = () => {
	return <>Portfolio</>;
};

export default App;
