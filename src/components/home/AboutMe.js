import React from 'react';
import styled from 'styled-components';

import { SubHeader } from 'components/home/Headers';
import HomeP from 'components/home/HomeP';
import Section from 'components/shared/Section';

export default function AboutMe() {
	return (
		<div>
			<SubHeader>About Me</SubHeader>
			<Section>
				<HomeP style={{ marginTop: 0 }}>I grew up in Cincinnati, OH and attended the University of Michigan. Since then, I've lived in Seattle.</HomeP>
				<HomeP>In Seattle, I've found my niche outdoors. I've become a climber, hiker, backpacker, and mountaineer. I'm always looking to find new spots to explore in the beautiful Pacific Northwest.</HomeP>
				<HomeP>At work, I've found my passion building full-stack web applications with slightly more focus on the front-end. I thrive in situations where I am able to iterate rapidly and incorporate feedback from users, managers, and my peers in future designs. I'm a fast and independent learner thats always excited to try out something new and challenging. I enjoy building out interfaces on the web and fast server-side code that helps enable a good user experience.</HomeP>
			</Section>
		</div>
	);
}
