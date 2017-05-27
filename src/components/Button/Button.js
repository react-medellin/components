import React from 'react';
import styled from 'styled-components';
import {
	seaSerpent,
	white,
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
	border-radius: .2em;
	padding: .5em 1em;
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
		background: ${maximumBlue};
		border: 1px solid ${maximumBlue};
		color: ${white};
	}
`;

// Default Button Styles
const SecondaryButton = ButtonStyles.extend`
	background: ${white};
	color: ${seaSerpent};
	border: 1px solid ${seaSerpent};

	:hover {
		background: ${seaSerpent};
		border: 1px solid ${white};
		color: ${white};
	}
`;

const buttonTypes = {
	primary: PrimaryButton,
	secondary: SecondaryButton,
	default: PrimaryButton
};

const getButtonType = props => buttonTypes[props.type] || buttonTypes.default;

export const Button = (props) => {
	const ButtonType = getButtonType(props);

	return (
		<ButtonType {...props}>{props.children}</ButtonType>
	);
};
