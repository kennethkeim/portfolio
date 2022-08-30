module.exports = {
   root: true,
   ignorePatterns: ["projects/**/*"],
   overrides: [
      {
         files: ["*.ts"],
         parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true
         },
         extends: [
            "plugin:@angular-eslint/recommended",
            "plugin:@angular-eslint/template/process-inline-templates",
            "prettier"
         ],
         rules: {
            "@angular-eslint/directive-selector": [
               "error",
               {
                  type: "attribute",
                  prefix: "app",
                  style: "camelCase"
               }
            ],
            "@angular-eslint/component-selector": [
               "error",
               {
                  type: "element",
                  prefix: "app",
                  style: "kebab-case"
               }
            ],
            "@angular-eslint/no-empty-lifecycle-method": ["off"],
            curly: ["warn", "multi-line", "consistent"],
            eqeqeq: "error",
            // git on windows checks out CRLF and commits LF
            "linebreak-style": [process.platform === "win32" ? "off" : "error", "unix"],
            // "multiline-comment-style": ["warn", "starred-block"],
            "no-lonely-if": ["warn"],
            "no-use-before-define": "off", // use the rule from typescript-eslint
            "no-await-in-loop": "warn",
            "@typescript-eslint/dot-notation": "off",
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/member-delimiter-style": [
               "warn",
               {
                  multiline: {
                     delimiter: "none"
                  }
               }
            ],
            "@typescript-eslint/member-ordering": ["warn"],
            "@typescript-eslint/no-confusing-non-null-assertion": ["warn"],
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-use-before-define": [
               "error",
               {
                  enums: true,
                  typedefs: true,
                  ignoreTypeReferences: false
               }
            ],
            "@typescript-eslint/prefer-for-of": ["warn"],
            "@typescript-eslint/strict-boolean-expressions": "off",
            "@typescript-eslint/promise-function-async": "off", // flags angular lazy-loaded imports
            "@typescript-eslint/naming-convention": [
               "warn",
               {
                  selector: "default",
                  format: ["camelCase"]
               },
               {
                  selector: "typeLike",
                  format: ["PascalCase"]
               },
               {
                  // allow leading _ for private class properties
                  selector: "classProperty",
                  modifiers: ["private"],
                  format: null
               },
               {
                  // ignore formatting if requires quotes
                  selector: [
                     "classProperty",
                     "objectLiteralProperty",
                     "typeProperty",
                     "classMethod",
                     "objectLiteralMethod",
                     "typeMethod",
                     "accessor",
                     "enumMember"
                  ],
                  format: null,
                  modifiers: ["requiresQuotes"]
               }
            ]
         }
      },
      {
         files: ["*.html"],
         extends: ["plugin:@angular-eslint/template/recommended"],
         rules: {}
      }
   ]
}
