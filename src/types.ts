import type { Presets } from 'case-police';

export type RuleOption = {
	dict?: Record<string, string>;
	noDefault?: boolean;
	presets?: Presets[];
	ignore?: string[];
};
