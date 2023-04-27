import { DefaultTheme } from "styled-components";

import COLORS from "./colors";
import Mixins from "./mixing";
import SPACINGS from "./spacing";
import TYPOGRAPHY from "./typography";

export const theme: DefaultTheme = {
	colors: COLORS,
	spacings: SPACINGS,
	typography: TYPOGRAPHY,
};

export { TYPOGRAPHY, SPACINGS, COLORS, Mixins };

export { GlobalStyles } from "./GlobalStyles";
