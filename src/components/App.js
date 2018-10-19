import React from 'react';
import styled from 'styled-components';
import media from 'media';

import Home from 'components/home/Home';

const StyledApp = styled.div`
	padding: 1em;

	${media.tablet`
		padding: 1em 3em;
	`}

	${media.desktop`
		padding: 3em 7em;
	`}
`;

export default class App extends React.Component {
	render() {
		return (
			<StyledApp>
				<Home />
			</StyledApp>
		);
	}
}
