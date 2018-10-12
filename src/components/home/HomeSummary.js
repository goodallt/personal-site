import React from 'react';
import styled from 'styled-components';

import MainHeader from 'components/home/MainHeader';
import { SideBar, MainAndSideBarContainer } from 'components/shared/SideBar';

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
`;

const ImgButton = styled.img`
	width: 2em;
	padding: 0.25em;
`;

const HEADER_IMG_SIZE = 14;
const ProfileImg = styled.img`
	width: ${HEADER_IMG_SIZE}em;
	height: ${HEADER_IMG_SIZE}em;
	border-radius: 50%;
	box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.5);
	margin: 1em;
`;

const EmailP = styled.p`
	text-align: center;
	font-size: 1.2em;
`;

const SummaryP = styled.p`
	font-size: 1.5em;
	margin: 1em 0;
`;

export default function HomeSummary() {
	return (
		<MainAndSideBarContainer>
			<section>
				<header><MainHeader>Todd Goodall</MainHeader></header>
				<SummaryP>I'm a software engineer based in Seattle WA. I specialize in building full stack web applications.</SummaryP>
				<SummaryP>In my free time I'm a traveler, a personal finance enthusiast, a practicing <a href="//mrmoneymustache.com/2011/10/02/what-is-stoicism-and-how-can-it-turn-your-life-to-solid-gold/" target="_blank" rel="noopener noreferrer">stoic</a>, and an aspiring mountaineer.</SummaryP>
			</section>

			<SideBar>
				<ProfileImg alt="Todd Goodall's face" src="/profilepic.jpg" />
				<ButtonGroup>
					<a href="//linkedin.com/in/toddpgoodall" target="_blank" rel="noopener noreferrer"><ImgButton src="/icons/linkedin.svg" /></a>
					<a href="//github.com/goodallt" target="_blank" rel="noopener noreferrer"><ImgButton src="/icons/github.svg" /></a>
					<a href="//www.facebook.com/toddpgoodall" target="_blank" rel="noopener noreferrer"><ImgButton src="/icons/facebook.svg" /></a>
				</ButtonGroup>
				<EmailP>contact@toddpgoodall.com</EmailP>
			</SideBar>
		</MainAndSideBarContainer>
	);
}
