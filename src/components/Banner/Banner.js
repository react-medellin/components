import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	queenPink,
	rocketMetallic,
	camouflageGreen,
	teaGreen,
	mediumFont,
	cornSkin,
	nikel
} from '../../constants';

// Base Banner Styles
const BannerStyles = styled.div`
	border-width: 1px;
	border-radius: .1em;
	padding: 1.5em 3em;
	font-size: ${mediumFont};
	text-align: center;
`;

// Success Banner Styles
const SuccessBanner = BannerStyles.extend`
	background: ${teaGreen};
	color: ${camouflageGreen};
	border: 1px solid ${camouflageGreen};
`;

// Error Banner Styles
const ErrorBanner = BannerStyles.extend`
	background: ${queenPink};
	color: ${rocketMetallic};
	border: 1px solid ${rocketMetallic};
`;

// Warning Banner
const WarningBanner = BannerStyles.extend`
	background: ${cornSkin};
	color: ${nikel};
	border: 1px solid ${nikel};
`;

const bannerType = {
	success: SuccessBanner,
	warning: WarningBanner,
	error: ErrorBanner,
	default: SuccessBanner
};

export const Banner = (props) => {
	const { type = 'default' } = props;
	const BannerType = bannerType[type] || bannerType.default;

	return (
		<BannerType {...props}>++++++++{props.children}++++++++</BannerType>
	);
};
Banner.propTypes = {
	type: PropTypes.string,
	children: PropTypes.element
};
