import type { FC } from "react";

import { S } from "./Container.styled";
import { ContainerProps, Direction } from "./Container.types";

export const Container: FC<ContainerProps> = ({
	fullWidth = false,
	noSpaces = false,
	direction = Direction.Column,
	children,
}) => {
	return (
		<S.Root fullWidth={fullWidth} noSpaces={noSpaces} direction={direction}>
			{children}
		</S.Root>
	);
};
