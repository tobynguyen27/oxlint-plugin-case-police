import { recommended } from 'oxlint-plugin-case-police';
import { defineConfig, type OxlintConfig } from 'oxlint';

const config: OxlintConfig = defineConfig({
	extends: [recommended],
});

export default config;
