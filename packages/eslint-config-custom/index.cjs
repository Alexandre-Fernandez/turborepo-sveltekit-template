module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"airbnb-base",
		"plugin:import/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:github/recommended",
		"plugin:sonarjs/recommended",
		"plugin:unicorn/recommended",
		"prettier",
	],
	plugins: ["@typescript-eslint", "import", "github", "sonarjs", "unicorn"],
	ignorePatterns: ["*.cjs"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
			},
		},
	},
	rules: {
		"import/no-unresolved": "error",
	},
}
