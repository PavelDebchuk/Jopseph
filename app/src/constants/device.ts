const size = {
	mobile: "425px",
	tablet: "768px",
	desktop: "1024px",
	large: "1200px",
};

export const device = {
	large: `(min-width: ${size.large})`,
	desktop: `(min-width: ${size.desktop})`,
	tablet: `(min-width: ${size.tablet})`,
	mobile: `(min-width: ${size.mobile})`,
};
