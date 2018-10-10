import React from 'react';
import styled from 'styled-components';

import MainHeader from './MainHeader';
import HomeP from './HomeP';

const StyledSummary = styled.div`
	display: flex;
`;

const SideBar = styled.section`
	padding: 3em;
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 10px;
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	padding: 1em;
`;

const ImgButton = styled.img`
	width: 2em;
	padding: 0.25em;
`;

const HEADER_IMG_SIZE = 16;
const ProfileImg = styled.img`
	width: ${HEADER_IMG_SIZE}em;
	height: ${HEADER_IMG_SIZE}em;
	border-radius: ${HEADER_IMG_SIZE / 2}em;
	box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.5)
`;

export default function HomeSummary() {
	return (
		<StyledSummary>
			<section>
				<header><MainHeader>Todd Goodall</MainHeader></header>
				<HomeP>I'm a software engineer based in Seattle, and I specialize in building web applications.</HomeP>
				<HomeP>In my free time I'm a traveler, a personal finance enthusiast, a practicing <a href="//mrmoneymustache.com/2011/10/02/what-is-stoicism-and-how-can-it-turn-your-life-to-solid-gold/" target="_blank" rel="noopener noreferrer">stoic</a>, and an aspiring mountaineer.</HomeP>
			</section>

			<SideBar>
				<ProfileImg alt="Todd Goodall's face" src="/profilepic.jpg" />
				<ButtonGroup>
					<a href="//linkedin.com/in/toddpgoodall" target="_blank" rel="noopener noreferrer"><ImgButton src="/icons/linkedin.svg" /></a>
					<a href="//github.com/goodallt" target="_blank" rel="noopener noreferrer"><ImgButton src="/icons/github.svg" /></a>
					<a href="mailto:toddpgoodall@gmail.com" target="_top"><ImgButton src="icons/gmail.svg" /></a>
					<a href="//www.facebook.com/toddpgoodall" target="_blank" rel="noopener noreferrer"><ImgButton src="/icons/facebook.svg" /></a>
				</ButtonGroup>
			</SideBar>
		</StyledSummary>
	);
}
