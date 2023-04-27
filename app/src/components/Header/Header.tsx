import { FC, useState } from "react";
import MainMenu from "../MainMenu";
import { HeaderBlock, HeaderTitle, MenuOpen, MenuClouse, Bar } from "./Header.styled";
import { device } from "../../constants/device";

const Header: FC = () => {
	const widthDevice = parseInt(device.tablet.replace(/\D+/g, ""));
	const widthWindow = window.screen.width;

	const [menu, isOpen] = useState(false);

	const openClouseMenu = () => {
		isOpen(!menu);
		{
			document.body.style.overflow = "hidden";
		}

		{
			menu && scrollOff();
		}
	};

	const scrollOff = () => {
		document.body.style.overflow = "visible";
	};

	return (
		<HeaderBlock>
			{menu === false && (
				<MenuOpen onClick={openClouseMenu}>
					<Bar />
					<Bar />
					<Bar />
				</MenuOpen>
			)}
			<HeaderTitle>Костел св.Йосипа Робітника</HeaderTitle>
			{menu && <MainMenu />}
			{menu && (
				<MenuClouse onClick={openClouseMenu}>
					<Bar />
					<Bar />
					<Bar />
				</MenuClouse>
			)}
			{widthWindow > widthDevice && <MainMenu />}
		</HeaderBlock>
	);
};

export default Header;
