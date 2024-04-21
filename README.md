# DDD Patterns

## Repository creation steps

### Create project folder

```bash
mkdir fc-ddd-patterns-jom

code fc-ddd-patterns-jom
```

### Install typescript

```bash
npm install typescript --save-dev
```

### Add gitignore file

```bash
npx gitignore node
```

### Add LICENSE file

```bash
npx license
```

Then, select the license type.

### Add README.md file

```bash
touch README.md
```

### Init typescript project

```bash
npx tsc --init
```

On tsconfig.json file, change the following properties:

```json
"baseUrl": "./src",
"paths": {
      "@/*": ["*"]
},
"incremental": true
"outDir": "./dist"
```

And add the following properties:

```json
"exclude": ["node_modules"],
"include": ["src/**/*.ts"],
```

Add the `src` folder and create the `index.ts` file.

### Install tslint

```bash
npm install tslint tslint-config-prettier --save-dev
```

### Init tslint

```bash
npx tslint --init
```

### Install jest and SWC

```bash
npm install jest @types/jest ts-jest --save-dev
npm install @swc/jest @swc/cli @swc/core --save-dev
```

### Init jest

```bash
npx jest --init
```

## Compilation

To compile the project, run the following command:

```bash
npx tsc
```
