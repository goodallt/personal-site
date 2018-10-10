import React from 'react';

import HomeSummary from './HomeSummary';
import Experience from './Experience';
import AboutMe from './AboutMe';

export default function Home() {
	return (
		<div>
			<HomeSummary />
			<Experience />
			<AboutMe />
		</div>
	);
}
