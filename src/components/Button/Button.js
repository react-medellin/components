// @flow

import React from 'react';
// $FlowFixMe: We're waiting on this PR to add flow here. https://github.com/styled-components/styled-components/issues/843
import styled from 'styled-components';
import {
	seaSerpent,
	white,
	tealBlue,
	maximumBlue,
	smallFont,
	mediumFont,
	bigFont
} from '../../constants';

const fontSizes = {
	sm: smallFont,
	md: mediumFont,
	lg: bigFont,
	default: mediumFont
};

const ANIMATION_TIME = '1000ms';

const getButtonSize = props => fontSizes[props.size] || fontSizes.default;

const buttons = {
	primary: 'primary',
	secondary: 'secondary'
};

// Base Button Styles
export const ButtonStyles = styled.button.attrs({
	'data-button-type': props => buttons[props.type] || buttons.primary
})`
	border-radius: .1em;
	padding: .5em 1em;
	outline: none;
	font-size: ${props => getButtonSize(props)};
	transition: background-color ${ANIMATION_TIME} ease,
				color ${ANIMATION_TIME} ease,
				border ${ANIMATION_TIME} ease;

	:hover {
		cursor: pointer;
	}
`;

// Primary Button Styles
export const PrimaryButton = ButtonStyles.extend`
	background: ${seaSerpent};
	color: ${white};
	border: 1px solid ${white};

	:hover {
		background: ${tealBlue};
		border: 1px solid ${tealBlue};
		color: ${white};
	}
`;

// Default Button Styles
export const SecondaryButton = ButtonStyles.extend`
	background: ${white};
	color: ${seaSerpent};
	border: 1px solid ${maximumBlue};

	:hover {
		border: 1px solid ${tealBlue};
		color: ${tealBlue};
	}
`;

const buttonTypes = {
	primary: PrimaryButton,
	secondary: SecondaryButton,
	default: PrimaryButton
};

type Props = {
	type?: string;
	onClick: () => void;
	children?: React$Element<*>
};

export const Button = (props: Props) => {
	const { type = 'default' } = props;
	const Btn = buttonTypes[type] || buttonTypes.default;

	return (
		<Btn
			{...props}
			onClick={props.onClick}
		>
			{props.children}
		</Btn>
	);
};
