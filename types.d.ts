import type {
	Plugin as RollupPlugin,
	TransformResult,
	PluginContext,
} from 'rollup';

export type Plugin = Omit<RollupPlugin, 'transform'> & {
	transform: (
		this: PluginContext,
		code: string,
		id: string
	) => Promise<TransformResult>;
};

/**
 * Plugin options.
 */
export interface Options {
	/**
	 * Pattern or array of patterns of files to minify.
	 */
	include?: Array<string | RegExp> | string | RegExp | null;
	/**
	 * Pattern or array of patterns of files not to minify.
	 */
	exclude?: Array<string | RegExp> | string | RegExp | null;
	/**
	 * Override include/exclude filter.
	 */
	filter?: (id: string) => boolean;
}
