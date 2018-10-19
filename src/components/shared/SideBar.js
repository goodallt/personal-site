import styled from 'styled-components';
import media from 'media';

export const MainAndSideBarContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	${media.desktop`
		flex-direction: row;
	`}
`;

export const SideBar = styled.aside`
	${media.desktop`
		padding: 0 3em;
	`}
	display: flex;
	flex-direction: column;
	top: 10px;
`;
