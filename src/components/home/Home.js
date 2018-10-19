import React from 'react';
import styled from 'styled-components';

import HomeSummary from 'components/home/HomeSummary';
import Experience from 'components/home/Experience';
import AboutMe from 'components/home/AboutMe';
import HomeHeading from 'components/home/HomeHeading';
import media from 'media';

const HomeMain = styled.div`
	background-color: #fafafa;
	border-radius: 0.25em;
	box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.2);
	padding: 1em;
	${media.tablet`
		padding: 2em;
	`}
`;

export default function Home() {
	return (
		<div>
			<HomeHeading />
			<HomeMain>
				<HomeSummary />
				<Experience />
				<AboutMe />
			</HomeMain>
		</div>
	);
}
