import styled from "styled-components/macro";

import { Direction } from "./Container.types";

interface IStyledProps {
	fullWidth: boolean;
	noSpaces: boolean;
	direction: Direction;
}

export namespace S {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	export const Root = styled.section<IStyledProps>`
		display: flex;
		${({ fullWidth, noSpaces, direction, theme: { size } }) => `
			flex-direction: ${direction};
			width: 100%;
    		max-width: ${fullWidth ? "100%" : size.large};
			margin-left: ${fullWidth ? "0" : "auto"};
			margin-right: ${fullWidth ? "0" : "auto"};
			margin-top: ${noSpaces ? "0" : "40px"};
			margin-bottom: ${noSpaces ? "0" : "40px"};
    `}
	`;
}
