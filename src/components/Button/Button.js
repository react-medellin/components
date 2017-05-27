import React from 'react';
import styled from 'styled-components';
import { seaSerpent, white } from '../../constants/colors';

const ButtonStyles = styled.button`
	background: ${white};
	color: ${seaSerpent};
	border: 1px solid ${seaSerpent};
	border-radius: 3px;
	padding: 6px 12px;

	:hover {
		background: ${seaSerpent};
		color: ${white};
		cursor: pointer;
	}
`;

export const Button = props => (
	<ButtonStyles {...props}>{props.children}</ButtonStyles>
);
