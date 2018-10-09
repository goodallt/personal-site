import styled from 'styled-components';

const Button = styled.a`
	display: block;
	text-align: center;
	padding: 0.5em 0;
	border-radius: 0.25em;
	text-decoration: none;
	border: 1px solid;
	width: 8em;

	&:active {
		color: inherit;
		border-color: inherit;
	}
`;

export default Button;
