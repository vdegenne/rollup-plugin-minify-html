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
