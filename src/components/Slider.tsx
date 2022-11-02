import React from 'react';
import ReactSlick, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
	padding: 16px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	z-index: 1;
	top: 50%;
	background-color: #fff;
	${({ pos }) =>
		pos === 'left'
			? css`
					left: 0;
					transform: translate(-50%, -50%);
			  `
			: css`
					right: 0;
					transform: translate(50%, -50%);
			  `}
	&:brfore {
		content: initial;
	}
	> svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		color: #222;
	}
`;

const DEFAULT_SETTINGS: Settings = {
	dots: false,
	arrows: true,
	infinite: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 5,
	swipe: true,
	prevArrow: (
		<ArrowButton>
			<MdArrowBackIos></MdArrowBackIos>
		</ArrowButton>
	),
	nextArrow: (
		<ArrowButton>
			<MdArrowForwardIos></MdArrowForwardIos>
		</ArrowButton>
	),
};

interface Props {
	settings?: Settings;
}
const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS }, children) => {
	return <ReactSlick {...settings}>{children}</ReactSlick>;
};

export default Slider;
