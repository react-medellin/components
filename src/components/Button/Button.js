import React from 'react';
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

const ANIMATION_TIME = '500ms';

const getButtonSize = props => fontSizes[props.size] || fontSizes.default;

// Base Button Styles
const ButtonStyles = styled.button`
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
const PrimaryButton = ButtonStyles.extend`
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
const SecondaryButton = ButtonStyles.extend`
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

const getButtonType = props => buttonTypes[props.type] || buttonTypes.default;

export const Button = (props) => {
	const Btn = getButtonType(props);

	return (
		<Btn {...props}>{props.children}</Btn>
	);
};
