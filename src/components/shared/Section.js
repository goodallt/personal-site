import styled from 'styled-components';
import media from 'media';

const Section = styled.section`
	background-color: #fafafa;
	border-radius: 1em;
	box-shadow: 0.2em 0.2em 1em rgba(0, 0, 0, 0.2);
	margin: 1em;
	padding: 1em;
	${media.tablet`
		padding: 2em;
	`}
`;

export default Section;
