import React from 'react';
import styled from 'styled-components';

import { SubHeader, SubSubHeader } from 'components/home/Headers';
import HomeP from 'components/home/HomeP';
import { TwoColumnContainer, Column } from 'components/shared/Columns';

const ExperienceSectionHeader = styled.h3`
	text-align: center;
	font-weight: 300;
	font-size: 2em;
`;

export default function Experience() {
	return (
		<div>
			<SubHeader>Stuff I've Built</SubHeader>
			<TwoColumnContainer>
				<Column>
					<ExperienceSectionHeader>At Work</ExperienceSectionHeader>
					<ul>
						<li><HomeP>A brand new dashboard application for administrators to view product usage data. Built with typescript, node, react, redux. Also includes async data flows on the backend with job workers and a queueing system</HomeP></li>
						<li><HomeP>A new project that allows imports of company CSS and JS in projects that don't use AngularJS</HomeP></li>
						<li><HomeP>A React component library to provide an interface to an internal data visualization library</HomeP></li>
						<li><HomeP>A customizable scatterplot data visualization and regression analysis tool for interpreting survey response data</HomeP></li>
					</ul>
				</Column>

				<Column>
					<ExperienceSectionHeader>On my own</ExperienceSectionHeader>
					<ul>
						<li><HomeP>The beautiful site you're looking at now <span role="img" aria-label="winky face">😉</span></HomeP></li>
						<li><HomeP>A social network intended to connect fitness teachers with students and encourage them to utilize public outdoor spaces for classes</HomeP></li>
						<li><HomeP>In the works: A tool for practicing "movement", a fitness philosophy I recently discovered that has inspired me</HomeP></li>
					</ul>
				</Column>
			</TwoColumnContainer>

			<SubSubHeader>Technologies Used</SubSubHeader>
			<HomeP>Professionally: typescript, react, redux, nodejs, angular, rails, html, css, d3, git, aws</HomeP>
			<HomeP>Other: c++, java, python, sql, heroku</HomeP>
		</div>
	);
}
