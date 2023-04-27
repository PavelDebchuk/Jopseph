import styled from "styled-components";
import logo from "../images/logo.png";

const HeaderBlock = styled.header`
	position: relative;
	display: block;
	width: 100%;
	height: 300px;
	background-image: url("${logo}");
	position: relative;
	background-position: center;
	background-size: cover;
	@media (min-width: 768px) {
		height: 400px;
	}
`;

const MenuOpen = styled.button`
	position: absolute;
	top: 25px;
	right: 20px;
	width: 40px;
	height: 40px;
	background: transparent;
	border: none;
	span {
		background: black;
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	span:nth-of-type(2) {
		width: 30px;
		background: black;
	}

	span:nth-of-type(3) {
		width: 30px;
		background: black;
	}
	@media (min-width: 768px) {
		display: none;
	}
`;

const Bar = styled.span`
	display: block;
	width: 30px;
	height: 3px;
	margin-bottom: 7px;
	background-color: #fff;
`;

const MenuClouse = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 40px;
	height: 40px;
	background: transparent;
	border: none;
	z-index: 9;
	@media (min-width: 768px) {
		display: none;
	}
	span:nth-of-type(1) {
		transform: rotate(45deg) translate(10px, 10px);
		width: 30px;
	}
	span:nth-of-type(2) {
		opacity: 0;
		pointer-events: none;
	}
	span:nth-of-type(3) {
		transform: rotate(315deg) translate(4px, -4px);
		width: 30px;
	}
`;

const HeaderTitle = styled.h1`
	text-align: center;
	color: #fff;
	font-size: 20px;
	padding-top: 180px;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 40px;
		padding-top: 250px;
	}
`;
export { HeaderBlock, HeaderTitle, MenuOpen, MenuClouse, Bar };
