import React, { useState } from 'react';
import pam from '../assets/pam.jpg';
import scott from '../assets/scott.jpg';
import charlie from '../assets/charlie.jpg';
import steve from '../assets/steve.jpg';
import paul from '../assets/paul.jpg';
import { Button } from '../components/Button';
import './css/About.css';

function About() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// images have aspect ratio of 4:5
	const bandMembers = [
		{
			name: 'Pam Belverstone',
			role: 'Vocals',
			bio: '',
			image: pam
		},
		{
			name: 'Scott Biaggi',
			role: 'Lead Guitar',
			bio: '',
			image: scott
		},
		{
			name: 'Charlie',
			role: 'Bass Guitar',
			bio: '',
			image: charlie
		},
		{
			name: 'Steve Le P',
			role: 'Keys',
			bio: '',
			image: steve
		},
		{
			name: 'Paul',
			role: 'Drums',
			// eslint-disable-next-line quotes
			bio: `Hello I'm Paul! I've been in Devil Rain playing the drums since 2019! Prior to being in the band I hadn't played in a band or played the drums for 
			around 10 years! Really wanted to get back into it and luckily enough for me Devil Rain were on the look out for a drummer! It's always a pleasure playing 
			 music with these awesome people! I feel very lucky to be in this band and appreciate every time I get to sit behind the drum kit and play. I never take 
			it for granted and enjoy every second of it! I do my best to serve the song and put my own little twists on things whilst trying to keep everyone in time!`,
			image: paul
		}
	];

	const handleNav = (direction) => {
		if (direction === 'back') {
			setCurrentIndex(currentIndex === 0 ? bandMembers.length - 1 : currentIndex - 1);
		} else {
			setCurrentIndex(currentIndex === bandMembers.length - 1 ? 0 : currentIndex + 1);
		}
	};
	return (
		<div className="page">
			<h1 className="title">Our Story</h1>
			<div className="carouselContainer">
				<Button id="leftArrow" className="navigationButton" text="<" wrapperStyle={{ fontSize: '2em' }} callback={() => handleNav('back')}/>
				{bandMembers.map(member => (
					<div
						className="carouselItem"
						key={member.name.toLowerCase().split(' ').join('')}
						style={{ transform: `translate(-${currentIndex * 100}%)`}}
					>
						<img className="memberImage" src={member.image} />
						<div className="carouselText">
							<h2 className="memberName">{member.name}</h2>
							<h3 className="memberRole">{member.role}</h3>
							<p className="memberBio">{member.bio}</p>
						</div>
					</div>
				))}
				<Button id="rightArrow" className="navigationButton" text=">" wrapperStyle={{ fontSize: '2em' }} callback={() => handleNav('forwards')}/>
			</div>
		</div>
	);
}
  
export default About;
  