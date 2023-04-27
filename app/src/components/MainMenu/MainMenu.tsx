import { FC } from "react";

import { MenuBlockNav, MenuNav, MenuList, MenuItem } from "./MainMenu.styled";

const MainMenu: FC = () => {
	const MenuListData = [
		{
			id: 1,
			name: "головна",
			href: "#",
		},
		{
			id: 2,
			name: "парафія",
			href: "#",
		},
		{
			id: 3,
			name: "галерея",
			href: "alt",
		},
		{
			id: 4,
			name: "камера",
			href: "#",
		},
	];

	return (
		<MenuBlockNav>
			<MenuNav>
				{MenuListData.map((menu) => (
					<MenuList key={menu.id}>
						<MenuItem href={menu.href}>{menu.name}</MenuItem>
					</MenuList>
				))}
			</MenuNav>
		</MenuBlockNav>
	);
};

export default MainMenu;
