// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from '../Button';

const defaultProps = {
	onClick() {},
	type: 'default'
};

describe('Button Component', () => {
	it('should call onClick when user clicks the button', () => {
		const onClickMock = jest.fn();
		const wrapper = shallow(
			<Button
				{...defaultProps}
				onClick={onClickMock}
			/>
		);

		wrapper.simulate('click');

		expect(onClickMock).toHaveBeenCalled();
	});

	it('should render a primary button when type prop is missing', () => {
		const wrapper = mount(
			<Button
				{...defaultProps}
				type=""
			/>
		);

		expect(wrapper.html().includes('data-button-type="primary"')).toBeTruthy();
	});

	it('should render a primary button when type prop is not primary or secondary', () => {
		const wrapper = mount(
			<Button
				{...defaultProps}
				type="foo"
			/>
		);

		expect(wrapper.html().includes('data-button-type="primary"')).toBeTruthy();
	});

	it('should render a primary button when type prop is primary', () => {
		const wrapper = mount(
			<Button
				{...defaultProps}
				type="primary"
			/>
		);

		expect(wrapper.html().includes('data-button-type="primary"')).toBeTruthy();
	});

	it('should render a secondary button when type prop is secondary', () => {
		const wrapper = mount(
			<Button
				{...defaultProps}
				type="secondary"
			/>
		);

		expect(wrapper.html().includes('data-button-type="secondary"')).toBeTruthy();
	});
});
