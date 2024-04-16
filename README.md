# DDD Patterns

## Repository creation steps

1.Create project folder

```bash
mkdir fc-ddd-patterns-jom

code fc-ddd-patterns-jom
```

2.Install typescript

```bash
npm install typescript --save-dev
```

3.Add gitignore file

```bash
npx gitignore node
```

4.Add LICENSE file

```bash
npx license
```

Then, select the license type.

5.Add README.md file

```bash
touch README.md
```

6.Init typescript project

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

7.Install tslint

```bash
npm install tslint --save-dev
```

8.Init tslint

```bash
npx tslint --init
```

## Compilation

To compile the project, run the following command:

```bash
npx tsc
```
