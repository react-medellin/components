import React from 'react';
import { storiesOf } from '@storybook/react';
import { Banner } from '../dist/index';

const Wrapper = ({ children }) => (
	<div
		style={{
			padding: '3em'
		}}
	>
		{children}
	</div>
);

storiesOf('Banner', module)
	.add('Success Banner', () => (
		<Wrapper>
			<Banner type="success">Success banner</Banner>
		</Wrapper>
	))
	.add('Warning Banner', () => (
		<Wrapper>
			<Banner type="warning">Warning banner</Banner>
		</Wrapper>
	))
	.add('Error Banner', () => (
		<Wrapper>
			<Banner type="error">Error banner</Banner>
		</Wrapper>
	));
