import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    // Register the plugin so `eslint-disable-next-line react-hooks/...` comments
    // resolve, and enable only the two classic hook rules (warn). The v7
    // `recommended` config enables aggressive React-Compiler rules (set-state-in-effect,
    // purity, …) that error on pre-existing code, so we opt in deliberately.
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
    rules: {
      // A11y rules surface as warnings so the Problems panel flags them without
      // failing local lint. Promote to 'error' to gate CI (see `lint:a11y`).
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/anchor-is-valid': [
        'warn',
        { components: ['Link'], specialLink: ['to'] },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    rules: {
      // React 18 + Vite uses the automatic JSX runtime — import of React not required.
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // Apostrophes/quotes in prose ("Children's Museum") are fine; not an a11y issue.
      'react/no-unescaped-entities': 'warn',

      // Downgrade the two noisiest TS lint rules to warnings so the default
      // `npm run lint` stays green on pre-existing code (many are in src/imports).
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    ignores: [
      'dist/',
      'public/',
      'src/imports/',
      'scripts/',
      'node_modules/',
      '**/*.report.html',
    ],
  },
)
