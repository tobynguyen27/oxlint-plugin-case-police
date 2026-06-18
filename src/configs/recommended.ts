import { defineConfig, type OxlintConfig } from 'oxlint';

export const recommended: OxlintConfig = defineConfig({
	overrides: [
		{
			files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue,svelte,astro}'],
			jsPlugins: ['oxlint-plugin-case-police'],
			rules: {
				'case-police/string-check': 'warn',
			},
		},
	],
});
