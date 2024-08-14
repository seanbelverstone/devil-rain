import React, { useState } from 'react';
import pam from '../assets/pam.jpg';
import scott from '../assets/scott.jpg';
import charlie from '../assets/charlie.jpg';
import steve from '../assets/steve.jpg';
import paul from '../assets/paul.jpg';
import { Button } from '../components/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/About.css';

function About() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// images have aspect ratio of 4:5
	const bandMembers = [
		{
			name: 'Pam Belverstone',
			role: 'Vocals',
			bio: `Compared to the rest of the band I started relatively late in life, I guess I was always a wannabe singer but only decided to get 'out there'  in my forties!! I met some very talented guys after answering an ad as I had the mid life 'well if you don't do this now, you never will' moment. These guys; Steve Creamer; Tom Barwood and Scott Biaggi had a wealth of experience as successful musicians in the past and had been jamming together on Sunday mornings for fun. I turned up, sang Rocky Mountain Way by Joe Walsh and that was it! they asked if I wanted to go again the following week so I guessed that meant I was in!! With the later addition of Charlie Dixon on Bass and Rich Boarder on Sax, we became Ophelia Devon and I realised I had some ideas for some original material and penned what was to be the first of our original songs. This was closely followed by collaborations with myself and Scott which resulted in some more great original songs. Then with the input of Tom, and together with songs that Steve Creamer had written, we ended up with enough material for an ep and later an album called 'Diamonds, Fossils and Rocks'. 
			Even though long lasting friendships were forged, it was clear that Scott and I shared similar tastes in music and worked well together, so when after several years of successful gigs and radio appearances Ophelia Devon was put on hold due to Steve's personal reasons, I hoped that we would have the chance of working together again. 
			That chance came when Scott reached out to me to audition for another band he was involved in. 
			After a successful audition and a few changes in the line-up, the band became Devil Rain.  At Bert's studio in Okehampton, the line-up has gone through more changes following the loss of Stuart Maccullock on Drums who was tragically taken from us in 2019. Paul came on board on drums in the same year, and Dave Oughton who had to leave for family reasons was replaced by Steve Le P on keyboards.  Soon after these two joined, it became clear to me that the band had gone from a good band line up to an amazingly great band that we are today!! 
			So Scott on Lead Guitar, Charlie on Bass, Paul on Drums, Steve Le P on Keys and myself on vocals we have worked hard on perfecting the iconic rock covers we all wanted to play and started gigging  in 2019. Since then (apart from Covid 19) Devil Rain have gone from strength to strength playing an ever changing brilliant set list to both amaze and delight audiences wherever we go.  I feel truly blessed to be performing with these awesome musicians, enjoying every minute of performing with them. We all get on so well and all get such a buzz from making incredible music together.  Recently, we have also had the pleasure of having Alex Belverstone who has been making guest appearances since the summer of 2023 which has brought yet another great dimension to Devil Rain.`,
			image: pam
		},
		{
			name: 'Scott Biaggi',
			role: 'Lead Guitar',
			bio: `When I was 15 I met this guy at school called Kevin, he had found out that I played guitar and invited me along to his house (36 Hatherleigh Road, Walthamstow E17) one Saturday morning (17 th November) where his band Witches Promise, were rehearsing. The gathering comprised of Kevin (lead guitar), George (rhythm guitar), Tony (Kevin's cousin on bass guitar), John (drums) and a guy in his late 20's called Terry who was basically their teacher. I was invited to sit in on a song (All the Reasons by Status Quo) which I hadn't heard before. Terry loaned me his Rickenbacker. I guess they were impressed because they asked me to join shortly afterwards (I always put it down to me knowing five chords to their three but that is probably unfair).
			Two years later WP fell apart and I formed 'Nuff Said with Tony and the recently arrived drummer Ronnie. When I was 17 I left 'Nuff Said, I just didn't feel it was working out.
			One evening I got a call from a friend asking if I'd be interested in trying out for a band with a record deal, Of course I would, so I met up with these guys (a couple of precocious brothers aged 14 & 16) who had a deal with Pye records (I think) were very Beatles influenced. The band was called Apostrophe, later to become Scarlet Party, but I'd been sacked long before then and so went back to After Dark. I got a phone call from their manager the day after I'd turned up a rehearsal looking like a folk singer (big woolly jumper) and trying to get them to play Hendrix licks. I phoned up After Dark who I'd left on good terms a few weeks earlier and was asked “how do you feel about having a keyboard player in the band?” I rejoined a much better band.
			From After Dark I went on to form a band with a bloke I'd met at London Electricity, where I worked for most of my time in bands in London. His name was Ray McVeigh, he's been a roadie for Thin Lizzie. We stole Mick Anchor (who later played with The Blow Monkeys) to play bass and for a while had a drummer called Bunny (Jonathan Trevisic) shortly followed by an amazing drummer called Richie Ibrahim who I knew through people in Hackney.
			Richie and I then formed N16 with a bass player called Mike Sarner and a singer, Peter Cottage. Richie left before we did any gigs, can't remember why and through Peter we recruited 16 year old Jeff Braithwaite. We did a few gigs with Peter who then left to be replaced by Rob Paladino. We did a few more gigs until I got fed up with things and left. I then got a call from Rob & Jeff saying they had a bass player called John Smith and wanted me to join them in a metal band, John Smith came up with the name Chariot.
			So Chariot started off with me, Rob, Jeff & John. After a few line up changes I was the only original member left:
			- June 1981 - Chariot rehearse
			- Jeff replaced by Ritchie Ibrahim.
			- Rob replaced by Gez Denier
			- Pete Franklin joins as 2 nd guitarist
			- Ritchie leaves, replaced by Gary Photi
			- Gary leaves, replaced by Olivier LeFranc
			- Gez leaves, Pete takes over vocal duties.
			- Olivier Leaves, Jeff returns.
			- Chariot join Shades records and managed by Mike Shannon.
			- We record 2 albums and do a couple of support tours (Vulcain, Exodus, Venom and Manowar) plus a fair few gigs in UK, France, The Netherlands and Italy.
			- Jonathan King decides we are the next big thing and co-manages with Mike.
			- Having failed to get us into the big time JK bows out.
			- John leaves - Bass Player auditions start.
			- Jeff leaves - Bass Player and Drummer auditions start.
			- Tony Newton (Bass, who went on to join KK Downing) and Simon DeMontford (Dawson - Drums) join.
			- Mike Shannon quits as manager having been forced to close Shades plus family issues.
			- Simon leaves to join The Outfield.
			- Search for replacement Drummer starts but Simon more or less returns although still officially retained by The Outfield.
			I Join On Fire whom it seemed were a band of eclectic tastes. Did a handful of gigs, recorded a demo and left after a few months.
			While I'd been with On Fire my old friend John Marshall, who I'd known since I was 7 phoned me and asked if I knew any decent bass players as he's just had to sack his from his duo. I said I'd do it and so spent the next 5 years or so doing covers with him, which was mostly good fun.
			In 2002 I moved to Okehampton in Devon. I answered an ad in a local record shop where a band were looking for a bass player, they were called Riffreign, later to be changed to Revolvin' Door. After a few years and a change of singer they sacked their lead guitarist and I took over on guitar, we recruited Charlie Dixon who I'd met through a local parent and toddler play group (how rock'n'roll, not!).
			While I was playing bass with RD I was also jamming with a couple of ex Londoners called Tom & Steve, they also had a singer called Sally. We spent a quite a few Sunday mornings playing together in Tom's Studio, then Steve's workshop but didn't get to do any gigs. This did lead on though to Ophelia. Steve & Tom together with a local guitarist had found a singer, Pam and did one gig together, after which the guitarist left for no discernable reason and they asked me to step in and then shortly after Mark, who was also playing in RD. I'm unsure as to why Mark left but Tom then commuted to rhythm guitar and Charlie came in on bass.
			One night after an Ophelia rehearsal Pam and I were in the pub and she mentioned that she had been looking around as she had been getting frustrated with Ophelia, so I suggested that she might want to come check out the new (as yet un-named) band. I phoned Ian and told him the position (Ian had seen both me and Pam playing with Ophelia) and he was keen to get Pam in, told the other guy his services were no longer required and set up a rehearsal. We settled on the name Devil Rain, I would have preferred something less serious but hey, what's in a name? So at that point Pam and I were in both bands, waiting to see what happens with either.
			
			Tragically Ophelia's drummer's wife became very ill and he bowed out to attend to her. The band then just fell apart with everyone going their separate ways, apart from me and Pam who concentrated on Devil Rain. We played our first gig at our local, after which the drummer sent out an email telling us he was unhappy with the standard of professionalism, singling out Dave the Keyboard player in particular, handing us a “him or me” ultimatum. We replied that we were all far too old to get involved in that throwing people out of the band nonsense and so he left and we needed another drummer.
			I recruited Stuart Maccullock, former drummer with Revolvin' Door but shortly afterwards lost our bass player. Pam and I decided our first choice would be Charlie who joined straight away.
			In late 2019 we played our last gig with Stuart who advised us to find a replacement for him as he had decided that his body could no longer withstand the rigours of playing with a rock band, what with having to receive treatment in hospital 3 or 4 times a week and so we bade him farewell on the understanding that we would do one final gig with him at our local, the Kings Arms the following April. Covid and lockdown kicked in and one way or another we were never destined to play that gig. At the beginning of lockdown in 2020 I had a phone call from Stuart's father telling me that Stuart had died in a road accident earlier that morning driving himself to hospital. We were all completely devastated, as was I think, most of Okehampton.
			As soon as Stuart had given us notice we searched for a new drummer and were very lucky to discover the incredible Paul Kingston fairly quickly. We managed a couple of rehearsals with Paul before Lockdown but got together with him again as soon as we could rehearse again, he had clearly been practicing.
			Tragedy struck yet again when Keyboard player Dave's wife became very ill and he felt he had to devote all of his time to her.
			It so happened that through Stuart's step daughter's band, with whom Stuart had also played drums, we got to know Keyboard player Steve Le P who now spreads his talents between Decade and Devil Rain.`,
			image: scott
		},
		{
			name: 'Charlie Dixon',
			role: 'Bass Guitar',
			bio:  `Musically, whilst still a younger, I loved & loved playing in brass bands! I hit 14yrs & inspired by mates , I got into the guitar, rock & roll, & a social life!!! With these good friends, we taught each other, we wrote songs, got a gig before we were a band, formed the band & gigged two weeks later! & so we realized, if you've got the guts, you can gig!
			I'm influenced by anything that affects me, happy, sad,  thoughtful, thoughtless, angry, peaceful, & most of all I just want to move, music can keep you moving!
			I've been in some bands, here are three;
			- Fools Of Nature - teenage moody originals
			- The Brighton Agitators - ska big band
			- Tragic Roundabout - all messed up & my wonder years!
			At toddler group, Scott Biaggi asked if I would have a go playing bass guitar in a covers band, hmmmm, I gave it a go, 'twas alright! I really enjoy playing with Scott, it's easy, we both make mistakes, usually it's only us who knows it, & we do make some good noises! We've played with Pam for a good while now, Pam makes mistakes, & makes some really good noises! Paul & Steve make many noises, all good!!!! Alex is a songbird!
			Never aimed for a covers band, however, playing with this bunch is absolute fun, lots of laughter, many dance moves, a joy!`,
			image: charlie
		},
		{
			name: 'Steve Le P',
			role: 'Keys',
			bio: `Music has always been a big part of my life. I started learning the piano when I was 6, and in middle school I formed a band with a couple of friends. I played guitar, even though I didn't know how to play it, and sang, and we even wrote a couple of songs, though as you'd expect from a bunch of 9 year old they were terrible.
			Piano really took off for me when we moved to Kent and I got a new piano teacher who really inspired me to learn. I started working through the grades and playing more and more. Around the same time my love of rock music really came to the fore, and by the time I got to sixth form I was obsessed with music, playing, writing and listening constantly. I directed the music for several plays in the college drama department. When it came to University,  it was obvious that I was only ever going to do music. I was immersed for 3 years, and after uni continued to sing in choirs and make music with friends.
			It wasn't until I was 40, however, that I joined a band. Not really sure why it took me so long, though at least part of it was that decent synths were hideously expensive for most of my life. My best friend and excellent drummer convinced me to join a band he was putting together. It didn't last long, but it made me realise I could do it, and soon after I joined a well established band called Seeker in Plymouth, and learned how to program and play synths for the first time. Up to then I'd played piano and church organ, but that was all.
			Seeker lasted for a few years, but inevitably came to an end. So I started looking for a new challenge.  I fancied doing something different and looked to start an originals band. A fantastic songwriter called Rob answered my ad, and we put together Beacon Fire. Rob was the main songwriter but we all contributed to what was the most creatively satisfying project I've been involved in. Sadly, it's hard to get gigs as an originals band, and while we got a bit of a following, radio play and produced an EP, the energy for the project began to wane.
			The next project came as a side project to Beacon Fire. In a period where Beacon Fire was on hiatus, the drummer, Steve, met up with a few old bandmates to start playing some 80s songs, just for fun. He suggested they ask me to join. After all, how can you have an 80s band without a keyboard player? This project really spoke to me, and when we stopped doing it I put together ScarlettBeats. We were getting loads of gigs, things were going great: 2019 was going to be our year. But as you can imagine, it didn't quite work out that way. Worse still, our drummer and co-founder, Stuart, tragically died in a car accident right at the start of lockdown. Stuart was such a big part of the band that it was hard to continue,  and that, combined with how Covid changed all our lives, meant that it wasn't to be. But out of the ashes came Decade, put together by me and Rich, my loyal bassist through all the 80s bands. The band is thriving, having had a tremendous first 18 months of gigging.
			Shortly after lockdown, Devil Rain were looking for a new keyboard player. Stuart from ScarlettBeats used to be in the band, so through that connection Pam asked me to try out. I was happy to join, and the rest, as they say, is history. A nicer bunch of folk you couldn't ask for.`,
			image: steve
		},
		{
			name: 'Paul Kingston',
			role: 'Drums',
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
			<div className="aboutBackground">
				<Button id="leftArrow" className="navigationButton" text="<" wrapperStyle={{ fontSize: '2em' }} callback={() => handleNav('back')}/>
				<div className="carouselContainer">
					{bandMembers.map(member => (
						<div
							className="carouselItem"
							key={member.name.toLowerCase().split(' ').join('')}
							style={{ transform: `translate(-${currentIndex * (132)}%)`}}
						>
							<img className="memberImage" src={member.image} />
							<div className="carouselText">
								<h2 className="memberName">{member.name}</h2>
								<h3 className="memberRole">{member.role}</h3>
								<Scrollbars
									style={{ width: '100%', height: 300 }}
									renderTrackVertical={props => <div {...props} className='track-vertical'></div>}
									renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
								>
									<div className="memberBioWrapper">
										{member.bio.split('\n').map((line, index) => (<p key={`${member.name}${index}`} className="memberBio">{line}</p>))}
									</div>

								</Scrollbars>
							</div>
						</div>
					))}
					<div className="leftGradient" />
					<div className="rightGradient" />
				</div>
				<Button id="rightArrow" className="navigationButton" text=">" wrapperStyle={{ fontSize: '2em' }} callback={() => handleNav('forwards')}/>
			</div>
			<div className="buffer" />
		</div>
	);
}
  
export default About;
  