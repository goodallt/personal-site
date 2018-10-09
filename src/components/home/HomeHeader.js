import React from 'react';
import styled from 'styled-components';

import H1 from '../shared/H1';
import H2 from '../shared/H2';

const HEADER_IMG_SIZE = 8;

const HeaderImg = styled.img`
	width: ${HEADER_IMG_SIZE}em;
	height: ${HEADER_IMG_SIZE}em;
	border-radius: ${HEADER_IMG_SIZE / 2}em;
	box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.5)
`;

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center
`;

export default function HomeHeader() {
	return (
		<Header>
			<HeaderImg alt="Todd Goodall's face" src="/profilepic.jpg" />
			<H1>Todd Goodall</H1>
			<H2>I build web apps</H2>
		</Header>
	);
}
