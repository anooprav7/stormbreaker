import colors from './colors';

// https://styled-system.com/table
// Sample - https://primer.style/components/docs/Button
export default {
	breakpoints: ['544px', '768px', '1012px', '1280px'],
	space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
	fontSizes: [10, 12, 14, 16, 20, 24, 32, 40, 48],
	fontWeights: { light: 300, normal: 400, bold: 700 },
	lineHeights: {
		condensedUltra: 1,
		condensed: 1.25,
		default: 1.5
	},
	letterSpacings: {
		normal: 'normal',
		tracked: '0.1em',
		tight: '-0.05em',
		mega: '0.25em'
	},
	fonts: {
		normal:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'
	},
	borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
	radii: [0, 3, 6],
	width: [16, 32, 64, 128, 256],
	// heights: [16, 32, 64, 128, 256],
	maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
	shadows: {
		small: '0 1px 1px rgba(27, 31, 35, 0.1)',
		medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
		large: '0 1px 15px rgba(27, 31, 35, 0.15)',
		'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
		formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
		formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em'
	},
	colors: colors
};
