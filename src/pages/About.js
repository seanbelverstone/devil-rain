import React from 'react';
import { AlertBar } from '../components/AlertBar';
import { useState } from 'react';

function About() {
	const [show, setShow] = useState(false);
	return (
		<div className="page">
			<h1 className="title">Our Story</h1>
			<AlertBar alertBarDisplay={show} type="error" alertBarText="There has been a problem with blah blah blah" callback={setShow}/>
			<button onClick={() => setShow(!show)}>Show the alertbar</button>
		</div>
	);
}
  
export default About;
  