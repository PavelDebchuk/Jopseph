import styled from "styled-components";
import { device } from "constants/device";

const FooterBlock = styled.footer`
	display: flex;
	justify-content: space-around;
	bottom: 0;
	width: 100%;
	height: 135px;
	background: #123d2c;
	font-size: 19px;

	@media ${device.tablet} {
		font-size: 14px;
	}
`;

const AddressLink = styled.address`
	display: inline-block;
`;

const Privacy = styled.a`
	display: inline-block;
	text-decoration: none;
	color: #fff;
	padding-top: 48px;
	font-weight: 900;
	line-height: 16px;
	letter-spacing: 0.05em;
	&:nth-child(2) {
		margin-left: 25px;
	}
`;

export { FooterBlock, AddressLink, Privacy };
