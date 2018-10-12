import React from 'react';

import HomeSummary from 'components/home/HomeSummary';
import Experience from 'components/home/Experience';
import AboutMe from 'components/home/AboutMe';

export default function Home() {
	return (
		<div>
			<HomeSummary />
			<Experience />
			<AboutMe />
		</div>
	);
}
