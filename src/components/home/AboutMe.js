import React from 'react';

import { SubHeader } from 'components/home/Headers';
import HomeP from 'components/home/HomeP';

export default function AboutMe() {
	return (
		<div>
			<SubHeader>About Me</SubHeader>
			<HomeP>I was raised in Wyoming, a small neighborhood just outside Cincinnati, OH. I attended the University of Michigan from 2013 - 2017 and graduated with a degree in Computer Science and a Minor in Business</HomeP>
			<HomeP>While in school, I had a summer internship with Qualtrics in Seattle, and I decided to join the company full-time soon after graduating, but not before spending a few months backpacking around Europe.</HomeP>
			<HomeP>Since moving to Seattle, I've found my niche outdoors. I've become a climber, hiker, backpacker, and mountaineer. I'm always looking to find new spots to explore in the beautiful Pacific Northwest.</HomeP>
			<HomeP>At work, I've found my passion building full-stack web applications with slightly more focus on the front-end. I enjoy finding ways to make reusable components and libraries in order to simplify and minimize complexities in large code bases. I thrive in situations where I am able to iterate rapidly and incorporate feedback from users, managers, and my peers in future designs. I'm a fast and independent learner thats always excited to try out something new and challenging.</HomeP>
		</div>
	);
}
