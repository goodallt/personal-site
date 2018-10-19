import styled from 'styled-components';
import media from 'media';

export const TwoColumnContainer = styled.div`
	display: flex;
	flex-direction: column;

	${media.desktop`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	`}
`;
