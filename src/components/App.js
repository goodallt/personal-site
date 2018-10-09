import React from 'react';
import styled from 'styled-components';

import Home from './home/Home';

const StyledApp = styled.div`
	padding: 2em 12em;
	line-height: 1.5;
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
