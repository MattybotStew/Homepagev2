import base from './eslint.config.mjs'
import jsxA11y from 'eslint-plugin-jsx-a11y'

// Promotes every jsx-a11y rule to an error so `npm run lint:a11y` acts as a
// hard accessibility gate (exit 1 on any a11y violation). Reuses the base config;
// appended last so the overrides win.
const a11yRules = Object.fromEntries(
  Object.keys(jsxA11y.rules).map((name) => [`jsx-a11y/${name}`, 'error']),
)

export default [...base, { rules: a11yRules }]
