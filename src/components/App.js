import React from 'react';
import styled from 'styled-components';

import Home from 'components/home/Home';

const StyledApp = styled.div`
	padding: 3em 7em;
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
