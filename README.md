# Angular2 Exercise for Advanced Web Tech

# Contents
* [About](#about)
* [Assignment](#assignment)
* [Preparations](#preparations)
  * [Nodejs](#nodejs)
  * [How-To-Run](#how-to-run)
* [Solutions](#solutions)
* [Useful links](#useful-links)

##About

This repository was created to supply the participants of the Advanced Web Tech lecture at the RWTH Aachen in WS15/16 with a template for angular2 webapps, a short how to, tasks for the assignment, possible solution and useful links.
The group "YuSaGoAnMa" wishes good luck. Feel free to contribute or contact us, if something is not right or you need some help.

##Preparations
###Nodejs

To work with angular you need to install nodejs. You can download it from [here] (https://nodejs.org/en/download/), install it via `apt-get` in Linux or via `homebrew` in Mac:

 * `sudo apt-get install node`
 * `brew install node`

After the installation you can check if everything went right by entering node -v into the terminal. You should see something like v5.0.0. If not, check if your PATH variable includes your node installation or repeat the steps above.

###How-To-Run

To run this template clone this repository, create a working copy of the template directory and switch into your working copy. Now install the dependencies, transpile and run it:
```bash
#clone the repository
git clone https://github.com/Chocoloper/exercise.ang2

#create a working copy
cp -R ./exercise.ang2/template ./exercise.ang2/working

#switch into working copy
cd ./exercise.ang2/working

#install dependencies
npm install

#transpile
npm run tsc

#run it
npm start
```

##Assignment

###Scenario

Cookies! You love cookies! You know like ten thousand cookie recipes!!! Write an angular 2 app which enables you to save and list all your cookie recipes, so you will never again lose one of them! Cookies are great!!!

###Implementation Details

* Three components:
  *	One component which can create cookie recipes.
  *	The other component can list all cookie recipes.
  *	Third component routes to the other two components.
*	A service which stores all cookie recipes.
*	Use the http module to populate the service with sample data.
  *	Store two or more cookie recipes in a JSON file in the root of the assignment folder. o 
  *	You can now access the JSON through live-server by accessing it via its URL, e.g. “./cookies.json”.
*	A cookie recipes should consist of several different attributes which can be nested. E.g. a cookie recipe can have a difficulty and a set of ingredients.

##Solutions

Possible solutions will be uploaded into this repository after the exercise evalution.

##Useful Links

* [Angular 2 Cheat Sheet](https://angular.io/cheatsheet)
* [Angular 2 Lecture Demo App](https://github.com/svkurowski/angular-todos)
