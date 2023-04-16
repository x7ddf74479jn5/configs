import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export const reactRules = {
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "react/display-name": "error",
  "react/jsx-handler-names": [
    "error",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
      checkLocalVariables: true,
      checkInlineFunction: true,
    },
  ],
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
};

export const reactConfig = {
  files: ["**/*.{tsx,jsx}"],
  plugins: {
    react: react,
    "react-hooks": reactHooks,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
