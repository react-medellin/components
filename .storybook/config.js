import { configure } from '@storybook/react';

function loadStories() {
	// require('../stories/button.js');
	require('../stories/banner.js');
}

configure(loadStories, module);
