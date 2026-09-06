import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".agents/**",
    ".github/**",
    // Node CommonJS tooling: `require()` is correct here, and these never ship
    // to the browser. Linting them under the Next/TS browser config only ever
    // produced false `no-require-imports` errors.
    "scripts/**",
    ".claude/**",
  ]),
]);

export default eslintConfig;
