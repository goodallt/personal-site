import React from 'react';
import styled from 'styled-components';

import P from '../shared/P';
import Button from '../shared/Button';

export default function Bio() {
	return (
		<section>
			<P>I'm a software engineer based in Seattle. I specialize in building web applications, and I thrive in environments where I can rapidly prototype and iterate on projects. I'm always searching for incremental changes that add up to big results at work and in life.</P>
			<P>In my free time I'm a traveler, a personal finance enthusiast, a practicing stoic, and an aspiring mountaineer.</P>
			<Button href="mailto:toddpgoodall@gmail.com" target="_top">Contact Me</Button>
		</section>
	);
}
