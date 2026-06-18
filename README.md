# `oxlint-plugin-case-police`

[Oxlint](https://oxc.rs) plugin for [case-police](https://npmx.dev/package/case-police).

## Usage

```bash
npm install -D oxlint-plugin-case-police
```

```ts
// oxlint.config.ts
import { recommended } from 'oxlint-plugin-case-police';
import { defineConfig, type OxlintConfig } from 'oxlint';

const config: OxlintConfig = defineConfig({
  extends: [recommended],
});

export default config;
```

OR configure the rule with options:

```ts
// oxlint.config.ts
import { defineConfig, type OxlintConfig } from 'oxlint';

const config: OxlintConfig = defineConfig({
  jsPlugins: ['oxlint-plugin-case-police'],
  rules: {
    'case-police/string-check': [
      'warn',
      {
        // Add custom words to the dictionary
        dict: { mylib: 'MyLib' },
        // Disable the built-in dictionary and only use custom entries
        noDefault: false,
        // Only load specific preset groups
        presets: ['brands', 'softwares'], // ('softwares' | 'products' | 'general' | 'brands' | 'abbreviates')
        // Ignore specific words
        ignore: ['IoT'],
      },
    ],
  },
});

export default config;
```

## License

Licensed under the [MIT](./LICENSE) license.
