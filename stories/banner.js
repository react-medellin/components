import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Banner } from '../dist/index';

storiesOf('Button', module)
	.add('with text', () => (
		<Banner onClick={action('clicked')}>Hello Banner</Banner>
	)).add('with some emoji', () => (
		<Banner onClick={action('clicked')}>😀 😎 👍 💯</Banner>
	));

