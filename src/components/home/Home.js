import React from 'react';
import styled from 'styled-components';

import HomeSummary from 'components/home/HomeSummary';
import Experience from 'components/home/Experience';
import AboutMe from 'components/home/AboutMe';

const Card = styled.section`
`;
	// background-color: #f5f5f5;
	// margin: 2em;
	// padding: 2em;
	// border-radius: 0.25em;
	// box-shadow: 0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2);

const StyledHome = styled.div`
	background-color: #f5f5f5;
	padding: 2em;
`;

export default function Home() {
	return (
		<StyledHome>
			<Card><HomeSummary /></Card>
			<Card><Experience /></Card>
			<Card><AboutMe /></Card>
		</StyledHome>
	);
}
