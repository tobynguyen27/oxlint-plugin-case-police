import { definePlugin, type Plugin } from '@oxlint/plugins';
import { stringCheck } from './rules/stringCheck';

const plugin: Plugin = definePlugin({
	meta: {
		name: 'case-police',
	},
	rules: {
		'string-check': stringCheck,
	},
});

export default plugin;
export { recommended } from './configs/recommended';
