// @flow

import React from 'react';
// $FlowFixMe: We're waiting on this PR to add flow here. https://github.com/styled-components/styled-components/issues/843
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


type Props = {
	type?: string;
	children: React$Element<*>;
};

export const Banner = (props: Props) => {
	const { type = 'default' } = props;
	const BannerType = bannerType[type] || bannerType.default;

	return (
		<BannerType {...props}>{props.children}</BannerType>
	);
};
