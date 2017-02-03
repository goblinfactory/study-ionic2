# study-ionic2
Another ionic sandbox, starting over, this time step by step following the docs. 

## Changes

The only thing I want to document here is any experimental change - deviation from the standard *getting started* stuff. 

### folder structure

Moved all the app files into the root, delete the 'myapp' folder. 

* This keeps VSCode folder structure just a small bit cleaner, avoids unecessary folder nesting. (I might be wrong, this is an experiment)
* only needs a single `.gitignore` and `.vscode` (folder) for the entire project.

### .gitignore

* remove the ignore for `.vscode` so that i can include my personalisations for `Peep` plugin, and automatically ignore all the `js` and `.map` files.

## references

* [Ionic 2 Tutorial](http://ionicframework.com/docs/v2/intro/tutorial/)