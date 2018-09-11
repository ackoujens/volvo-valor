# Study notes

## Install Angular CLI

Check NPM Version `npm -v`
Install `npm install -g @angular/cli`

## Create Angular project

ng new client --style=scss --routing

## Open project

`cd PROJECT_NAME`
`ng serve -o`

## Generate component

`ng generate component sidebar`

## Angular project structure

- package.json (lets you know version numbers of angular and its libraries, scripts section CAN be worth messing with later on)
- src/styles.scss (main styling sheet)
- src/index.html (root html file)
- src/app (all components reside here, you spend most of your time here)
- src/app/app-routing.module.ts (because you used --routing flag)
- src/app/COMPONENT (components are stored in separate folders inside app folder)
- src/app.module.ts (whenever components/services are created, these are declared here / adding imports to array)
- src/app.component.ts (first basic component, also seperated in its own html, scss files)

## Install Angular animations

`npm install @angular/animations@latest --save`

## Create distribution

Normal build: `ng build`
Smaller build: `ng build --prod`

## Typescript

### Types

let myString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>;
let anything: Any;

### Class

// Create class
class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle(): void {
        this.speed--;
    }

    getSpeed(): void {
        console.log(this.speed);
    }

    // Callable without instantiating object
    static numberOfWheels(): number {
        return 4;
    }
}

// Initiate object from class
let car = new Car(5);
car.accelerate():
car.getSpeed();

console.log(Car.numberOfWheels());

### Interfaces

// Example interface
interface User {
    username: string;
    password: string;
    confirmPassword?: string; // optional property => does not have to be implemented
}

// Gives compilation error because not satisfied to interface contract
let user:User;

// This value complies to interface contract
user = {username: 'bob', password: 'bob1234'};

// Interfaces can also contain functions (without body)
interface CanDrive {
    accelerate(speed:number): void;
}

let car:CanDrive = {
    accelerate: function (speed:number) {
        // ... function body here
    }
}

### Modules

// Without "export", this class is only usable in class file
export class ExportedClass {
    // This class is exported
}