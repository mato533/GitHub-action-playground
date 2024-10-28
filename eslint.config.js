import eslint from "@eslint/js";
// eslint-disable-next-line import/no-unresolved
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ["src/**"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
          moduleDirectory: ["src", "node_modules"],
        },
      },
    },
    rules: {
      "import/newline-after-import": "error",
    },
  },
);
