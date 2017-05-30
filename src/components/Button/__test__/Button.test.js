import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../Button';

const defaultProps = {
	onClick() {}
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
});
