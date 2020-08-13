# Typescript-Programming

### **Installation**

#### Install TypeScript globally

```
npm i  -g typescript
```

<br/>

### **tsconfig Setup**

#### Create tsconfig.json this will be our configuration file for typescript

#### You can either create it from scratch and add the following configurations

#### Creating tsconfig:

```
touch tsconfig.json
```

#### Or you can initialize tsconfig by following command

```
tsc --init
```

#### Either way you have to uncomment or modify the following settings which are most important.

-   tsconfig.json code:

```json
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
		"watch": true,
		"lib": ["DOM", "ES2017"],
		"outDir": "./build",
		"rootDir": "./src"
	}
}
```

#### After doing this create a typescript file put it in the src folder.

#### Run this command in the root directory where sec and build are present and make sure your typescript file is in src folder.

```
tsc
```

#### This command will start the typescript compiler and automatically create a build folder with javascript code, You can change the JS versions from the config file.
