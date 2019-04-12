import colors from './colors';
export default {
	breakpoints: [32, 48, 64],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
	fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
	lineHeights: {
		solid: 1,
		title: 1.25,
		copy: 1.5
	},
	letterSpacings: {
		normal: 'normal',
		tracked: '0.1em',
		tight: '-0.05em',
		mega: '0.25em'
	},
	fonts: {
		serif: 'athelas, georgia, times, serif',
		sansSerif:
			'-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
	},
	borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
	radii: [0, 2, 4, 16, 9999, '100%'],
	width: [16, 32, 64, 128, 256],
	heights: [16, 32, 64, 128, 256],
	maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	},
	colors: colors
};
