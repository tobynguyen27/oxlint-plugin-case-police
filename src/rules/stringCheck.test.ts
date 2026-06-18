import { RuleTester } from 'oxlint/plugins-dev';
import * as vitest from 'vite-plus/test';
import { stringCheck } from './stringCheck';
import { readFileSync } from 'node:fs';
import { join } from 'pathe';

RuleTester.it = vitest.it;
RuleTester.itOnly = vitest.it.only;
RuleTester.describe = vitest.describe;

export const ruleTester: RuleTester = new RuleTester();

const invalids = [
	{
		code: 'const a="Typescript \\n Ant design"',
		output: 'const a="TypeScript \\n Ant Design"',
		errors: 2,
	},
	{ code: 'const a="Typescript"', output: 'const a="TypeScript"', errors: 1 },
	{
		code: 'const a="Typescript and Javascript"',
		output: 'const a="TypeScript and JavaScript"',
		errors: 2,
	},
	{ code: 'const a={name:"Ant design"}', output: 'const a={name:"Ant Design"}', errors: 1 },
	{
		code: 'const a="nintendo Switch and Javascript"',
		output: 'const a="Nintendo Switch and JavaScript"',
		errors: 2,
		options: [{ dict: { 'nintendo switch': 'Nintendo Switch' } }],
	},
	{
		code: 'const a="nintendo Switch and Javascript"',
		output: 'const a="Nintendo Switch and Javascript"',
		errors: 1,
		options: [{ dict: { 'nintendo switch': 'Nintendo Switch' }, noDefault: true }],
	},
	{
		code: 'const a="alphaGo"',
		output: 'const a="AlphaGo"',
		errors: 1,
		options: [{ presets: ['brands'] }],
	},
];

ruleTester.run('string-check', stringCheck, {
	valid: [
		'const a="Ant Design"',
		{ code: 'const a="iOc"', options: [{ presets: ['softwares'] }] },
	],
	invalid: [
		{
			code: readFileSync(join(__dirname, '../../tests/original.txt'), 'utf-8'),
			output: readFileSync(join(__dirname, '../../tests/expect.txt'), 'utf-8'),
			errors: 5,
		},
		...invalids,
	],
});
