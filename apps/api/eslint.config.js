// @ts-check
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

import globals from 'globals';

export default defineConfig([
  {
    ignores: ['eslint.config.mjs'],
  rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
    		plugins: {
			js,
		},
		extends: ["js/recommended"],
  },
  
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
  
  },]
);
