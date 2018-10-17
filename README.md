#Gestiosoft Readme

#install cli
npm install -g @angular/cli


#install dependecies project
npm install

#Git account settings
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
#Checking Your Settings
git config --list


## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. 

## SCAFFOLDING ..  g = generate
ng g component feature/new-cmp
# and your component will be generated in src/app/feature/new-cmp 
Component	ng g component my-new-component
Directive	ng g directive my-new-directive
Pipe	    ng g pipe my-new-pipe
Service	    ng g service my-new-service
Class	    ng g class my-new-class
Guard	    ng g guard my-new-guard
Interface	ng g interface my-new-interface
Enum	    ng g enum my-new-enum
Module	    ng g module my-module   



## Build
Run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.
