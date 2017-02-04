# study-ionic2
Another ionic sandbox, starting over, this time step by step following the docs. 

## Changes

The only thing I want to document here is any experimental change - deviation from the standard *getting started* stuff. 

### folder structure

Moved all the app files into the root, delete the 'myapp' folder. 

* This keeps VSCode folder structure just a small bit cleaner, avoids unecessary folder nesting. (I might be wrong, this is an experiment)
* only needs a single `.gitignore` and `.vscode` (folder) for the entire project.

### .gitignore

## huh moments!

* **Peep files - hide show** :  went to remove the ignore for `.vscode` so that i can include my personalisations for `Peep` plugin, so that I can automatically ignore all the `js` and `.map` files, and when I went to VSCode to test it (before doing this), I realised the `.js` files were not being shown. ***Huh!*** I'm a bit behind my study schedule so don't care (for now) why this is, and I'm sure if I ignore it, it will come back to bite me and then I can look up the details. for now, ... will go with the flow. My guess is either the recent updates (today) to VSCode, or a change in the Ionic build process, possibly a clean-step or some type of file barrel bundler?

### overview

[summary of the different files in an Ionic2 app](docs/ionic-files.md)

## references

* [Ionic 2 Tutorial](http://ionicframework.com/docs/v2/intro/tutorial/)