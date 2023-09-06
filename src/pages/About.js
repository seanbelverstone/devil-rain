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
			bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Et malesuada fames ac turpis egestas maecenas pharetra. In fermentum et sollicitudin ac orci phasellus. Luctus venenatis lectus magna fringilla.
				Donec massa sapien faucibus et molestie. Eros donec ac odio tempor orci. Leo integer malesuada nunc vel. Dui vivamus arcu felis bibendum ut tristique. Lectus quam id leo in vitae turpis massa sed elementum.
				Id aliquet risus feugiat in ante.`,
			image: pam
		},
		{
			name: 'Scott Biaggi',
			role: 'Lead Guitar',
			bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Leo vel fringilla est ullamcorper eget nulla. Adipiscing elit duis tristique sollicitudin.
				Accumsan tortor posuere ac ut consequat semper viverra nam. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Non consectetur a erat nam at. Mattis nunc sed blandit libero volutpat sed cras ornare. Odio euismod lacinia at quis risus sed vulputate odio. Turpis egestas integer eget aliquet nibh. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Ornare massa eget egestas purus viverra accumsan.`,
			image: scott
		},
		{
			name: 'Charlie',
			role: 'Bass Guitar',
			bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras.
				Libero id faucibus nisl tincidunt eget.
				Tellus integer feugiat scelerisque varius morbi enim nunc. Nunc non blandit massa enim nec dui nunc. Platea dictumst quisque sagittis purus sit amet. Magnis dis parturient montes nascetur ridiculus. Orci nulla pellentesque dignissim enim sit amet venenatis.`,
			image: charlie
		},
		{
			name: 'Steve Le P',
			role: 'Keys',
			bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat.
				Suspendisse in est ante in. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Bibendum enim facilisis gravida neque convallis a cras.
				Leo vel fringilla est ullamcorper. Auctor elit sed vulputate mi sit amet. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Aliquam sem et tortor consequat id porta.
				Ut sem viverra aliquet eget sit amet.`,
			image: steve
		},
		{
			name: 'Paul',
			role: 'Drums',
			// eslint-disable-next-line quotes
			bio: `Hello I'm Paul! I've been in Devil Rain playing the drums since 2019!
				Prior to being in the band I hadn't played in a band or played the drums for around 10 years. Really wanted to get back into it and luckily enough for me Devil Rain were on the look out for a drummer!
				It's always a pleasure playing music with these awesome people. I feel very lucky to be in this band and appreciate every time I get to sit behind the drum kit and play. I never take it for granted and enjoy every second of it! I do my best to serve the song and put my own little twists on things whilst trying to keep everyone in time!`,
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
			<h1 className="title">About Us</h1>
			<Button id="leftArrow" className="navigationButton" text="<" wrapperStyle={{ fontSize: '2em' }} callback={() => handleNav('back')}/>
			<div className="carouselContainer">
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
							{member.bio.split('\n').map((line, index) => (<p key={`${member.name}${index}`} className="memberBio">{line}</p>))}
						</div>
					</div>
				))}
			</div>
			<Button id="rightArrow" className="navigationButton" text=">" wrapperStyle={{ fontSize: '2em' }} callback={() => handleNav('forwards')}/>
		</div>
	);
}
  
export default About;
  