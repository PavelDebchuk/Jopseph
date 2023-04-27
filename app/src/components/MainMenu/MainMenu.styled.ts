import styled from "styled-components";

const MenuBlockNav = styled.nav`
	top: 0;
	z-index: 8;
	overflow: scroll;
	overflow-x: hidden;
	display: flex;
	position: fixed;
	width: 100%;
	height: 100%;
	background: #999;
	font-weight: 700;
	line-height: 19px;

	@media (min-width: 768px) {
		bottom: 0;
		font-weight: 700;
		line-height: 19px;
		background: none;
		position: inherit;
	}
`;

const MenuNav = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 50px 0;
	margin: 0 auto;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		padding: 0;
	}
`;

const MenuList = styled.li`
	list-style-type: none;
	@media (min-width: 768px) {
		margin-left: 20px;
		margin-bottom: 0;
		text-align: center;

		&:nth-child(1) {
			margin-left: 0;
		}
	}
`;

const MenuItem = styled.a`
	font-size: 50px;
	text-decoration: none;
	text-transform: capitalize;
	color: #fff;
	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

export { MenuBlockNav, MenuNav, MenuList, MenuItem };
