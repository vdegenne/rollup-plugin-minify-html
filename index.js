import {createFilter} from 'rollup-pluginutils';
import {minify} from 'html-minifier-terser';

/**
 * @param {import('./types').Options} options
 * @returns {import('./types').Plugin} Rollup plugin object
 */
function minifyHtml(options = {}) {
	if (!options.filter) {
		options.filter = createFilter(
			options.include ?? './**/*.{html}',
			options.exclude
		);
	}

	return {
		name: 'my-plugin',

		async transform(code, id) {
			if (options.filter(id)) {
				return {
					code: await minify(code, {
						collapseWhitespace: true,
						minifyCSS: true,
						minifyJS: true,
						removeComments: true,
					}),
				};
			}
		},
	};
}

export {minifyHtml};
export default minifyHtml;
