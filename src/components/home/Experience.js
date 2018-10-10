import React from 'react';
import styled from 'styled-components';

import SubHeader from './SubHeader';
import HomeP from './HomeP';

const ExperienceContent = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const ExperienceSection = styled.div`
	padding: 0 0.5em;
`;

const ExperienceSectionHeader = styled.h3`
	text-align: center;
	font-weight: 300;
	font-size: 2em;
`;

export default function Experience() {
	return (
		<div>
			<SubHeader>What I've Built</SubHeader>
			<ExperienceContent>
				<ExperienceSection>
					<ExperienceSectionHeader>At Work</ExperienceSectionHeader>
					<ul>
						<li><HomeP>A brand new dashboard app for administrators to view product usage data. Built with typescript, node, react, redux, redux-thunk</HomeP></li>
						<li><HomeP>A new project that allows imports of company css in projects outside AngularJS</HomeP></li>
						<li><HomeP>A customizable scatterplot data visualization and regression analysis tool for interpreting survey response data.</HomeP></li>
						<li><HomeP>A React component library to provide an interface to an internal data visualization library</HomeP></li>
					</ul>
				</ExperienceSection>

				<ExperienceSection>
					<ExperienceSectionHeader>On my own</ExperienceSectionHeader>
					<ul>
						<li><HomeP>The beautiful site you're looking at now <span role="img" aria-label="winky face">😉</span></HomeP></li>
						<li><HomeP>A social network intended to connect fitness teachers with students and encourage them to utilize public outdoor spaces for classes</HomeP></li>
						<li><HomeP>In the works: A tool for practicing "movement", a fitness philosophy I recently discovered that has inspired me</HomeP></li>
					</ul>
				</ExperienceSection>
			</ExperienceContent>
		</div>
	);
}
