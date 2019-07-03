# Movie List Starter Repo
This repo will provide a starting point for building Movie List, an educational prompt to practice building full-stack React Applications. The starter repo comes with full webpack setup, with the exception of a single transpilation error, embedded to allow students to practice.

### Setup
- Clone the repo to your desired directory
- Setup desired NPM scripts (i.e., what should the package.json file look like in the "scripts" section, how do we want to start our application?)
- Run webpack and review the transpiled output--does the React code look as you expect?
- Debug your transpilation!
- If you are stuck, check out the solution branch (after thinking through the debugging process and discussing with a peer).

### Notes on Setting Up React and Webpack (source: @LittleJenny)
Create a directory for your project before performing the following steps. The following steps should be performed in the root of that directory.

1. Install npm and run npm init. Provide relevant information to your package.json file. You should be able to see what you install with npm in ```package.json``` file moving forward.
```npm init```

2. Install react and react-dom. You can verify the name of the package, versions, and functionality in npm documentation. 
```npm install --save react react-dom```

3. Install babel-core, babel-cli, babel-preset env, babel-preset-react, and babel-loader. We will use Babel to compile JSX into regular Javascript. 
```npm install --save-dev @babel-core @babel-cli @babel-preset-env @babel-preset-react babel-loader```

4. Install webpack. Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser. It is also capable of transforming, bundling, or packaging.You should refer to official [webpack documentation](https://webpack.js.org/guides/getting-started/ "webpack documentation") for details on core concepts used to build our webpack configuration file (entry, output, loaders, plugins, mode, and browser compatibility).
```npm install --save-dev webpack webpack-cli```

5. Create two directories within your client folder, ```/dist``` and ```/src```. The ```/dist``` directory will contain the bundled file for webpack and the ```/src``` directory contain ```index.jsx```, ```app.jsx```, and all other react component ```.jsx``` files.

6. In your root directory, create a file named ```webpack.config.js```. We will be using this file to configure our webpack. Declare your empty ```module.exports``` object and assign the following properties:
    * ```entry```: (file path) specify which module webpack should use to begin building out its dependency graph. Default is ```./src/index.js```. 
    * ```mode```: (string) enable built-in optimizations by setting the mode parameter to ```none```,  ```development```, ```production``` (default).
    * ```watch```: (boolean) turn on/off webpack's ability to watch for changes in any resolved files
    * ```output```: (object) tells webpack where to emit the bundles it creates and how to name these files. It should have properties:
      * ```path```:  this defaults to the ```./dist``` folder for any other generated files
      * ```filename```:  rename output file to ```bundle.js``` (default ```./dist/main.js```)
    * ```module```: (object) should have a property called ```rules``` which has a value of an array. This array will contain an object with the following properties
      * ```test```: (regex) specifies which files will be affected by the loader (both ```.js``` and ```.jsx```)
      * ```exclude```: ```/node_modules/```,
      * ```use```: (array | object) allow for transpiling JavaScript files and JSX transformation using Babel and webpack via babel-loader and babel-presets. Refer to [babel-loader] (https://webpack.js.org/loaders/babel-loader/ "babel-loader") for setup.

7. Add script ```build: 'webpack'``` to ```package.json```. 

You may use either ```webpack-dev-server``` or ```live-server``` for development. These will serve the working directory (and subdirectories) and reload the browser when it detects any changes.
