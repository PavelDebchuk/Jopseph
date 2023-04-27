import { ReactElement } from "react";

export type ReactParent = {
	children?: ReactElement | ReactElement[] | string;
};

export enum Direction {
	Column = "column",
	Row = "row",
}

export type ContainerProps = ReactParent & {
	fullWidth?: boolean;
	noSpaces?: boolean;
	direction?: Direction;
};
