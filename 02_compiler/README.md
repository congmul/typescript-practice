# TypeScript Compiler

## Watch Mode
- Whenever types changes, TypeScript will recompile : tsc app.ts -w 
- You can quit thereafter via CTRL + C

## Compiling the Entire Project / Multiple Files
- Manage every TypeScripts in the folder by json file :  tsc --init
- Compile all at once : Run tsc without pointing a specific tsc file.
- Watch mode for all : tsc -w

## exclude & include in tsconfig.json
- Compiling include - exclude 
- If there is no include, compiling all file withou exclude basically
```js
  "exclude": [
    "node_modules",  // would be the default
    "analytics.ts",
    "*.dev..ts",
    "**/*.dev..ts"
  ], 
  "include": [
    "app.ts"
  ]
```

## compilerOptions in tsconfig.json
- "target": "ES5" // Default

## "sourceMap": true, in tsconfig.json
- Generate .map file that I can see on Sources on Dev tool
- It simplifies debugging.

## Others in tsconfig.json
- "outDir": "./dist",  
- "rootDir": "./src",   
- "removeComments": true, : Remove comments when Compilation
- "noEmitOnError": true,  : No Compilation if there is a error in TS syntax
- "noUnusedLocals": true,
- "noUnusedParameters": true,
- "noImplicitReturns": true,     
