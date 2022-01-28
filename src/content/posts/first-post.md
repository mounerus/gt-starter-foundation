---
template: blog-post
title: Apprendre à coder avec TypeScript
slug: /apprendre-a-coder-avec-typescript
date: 2022-01-10 02:00
description: Apprendre à coder avec TypeScript
featuredImage: /assets/ts.jpg
---




TypeScript est devenu de plus en plus populaire au cours des dernières années, et de nombreux travaux exigent désormais que les développeurs connaissent TypeScript.

Mais ne vous inquiétez pas - si vous connaissez déjà JavaScript, vous pourrez rapidement maîtriser TypeScript.

Même si vous ne prévoyez pas d'utiliser TypeScript, l'apprendre vous permettra de mieux comprendre JavaScript et fera de vous un meilleur développeur.

Dans cet article, vous apprendrez :

* Qu'est-ce que TypeScript et pourquoi devrais-je l'apprendre ?
* Comment configurer un projet avec TypeScript
* Tous les principaux concepts de TypeScript (types, interfaces, génériques, type-casting, et plus...)
* Comment utiliser TypeScript avec React

J'ai également créé une [feuille de triche TypeScript PDF](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-pdf) et une [affiche](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-poster) qui résument cet article sur une page. Cela facilite la recherche et la révision rapide des concepts/de la syntaxe.

## Qu'est-ce que TypeScript ?

TypeScript est un sur-ensemble de JavaScript, ce qui signifie qu'il fait tout ce que fait JavaScript, mais avec quelques fonctionnalités supplémentaires.

La principale raison d'utiliser TypeScript est d'ajouter un typage statique à JavaScript. Le typage statique signifie que le type d'une variable ne peut être modifié à aucun moment dans un programme. Cela peut éviter BEAUCOUP de bugs !

D'autre part, JavaScript est un langage typé dynamiquement, ce qui signifie que les variables peuvent changer de type. Voici un exemple :



```ts
// JavaScript
let foo = "hello";
foo = 55; // foo has changed type from a string to a number - no problem

// TypeScript
let foo = "hello";
foo = 55; // ERROR - foo cannot change from string to number
```



TypeScript ne peut pas être compris par les navigateurs, il doit donc être compilé en JavaScript par le compilateur TypeScript (TSC) - dont nous parlerons bientôt.

## Est-ce que TypeScript en vaut la peine ?

### Pourquoi devriez-vous utiliser TypeScript

* Des recherches ont montré que TypeScript peut détecter 15 % des bogues courants.
* Lisibilité - il est plus facile de voir ce que le code est censé faire. Et lorsque vous travaillez en équipe, il est plus facile de voir ce que les autres développeurs voulaient faire.
* C'est populaire - connaître TypeScript vous permettra de postuler à plus de bons emplois.
* Apprendre TypeScript vous donnera une meilleure compréhension et une nouvelle perspective sur JavaScript.



  ### Inconvénients de TypeScript

  * TypeScript prend plus de temps à écrire que JavaScript, car vous devez spécifier des types, donc pour les petits projets solo, cela ne vaut peut-être pas la peine de l'utiliser.
  * TypeScript doit être compilé, ce qui peut prendre du temps, en particulier dans les grands projets.

    Mais le temps supplémentaire que vous passerez à écrire un code plus précis et à le compiler sera plus qu'épargné par le nombre de bogues en moins que vous aurez dans votre code.

    Pour de nombreux projets, en particulier les projets de taille moyenne à grande, TypeScript vous fera économiser beaucoup de temps et de maux de tête.

    Et si vous connaissez déjà JavaScript, TypeScript ne sera pas trop difficile à apprendre. C'est un excellent outil à avoir dans votre arsenal.

## Comment configurer un projet TypeScript

### Installer Node et le compilateur TypeScript

Tout d'abord, assurez-vous que [Node](https://nodejs.org/en/download/) est installé globalement sur votre machine.

Installez ensuite le compilateur TypeScript globalement sur votre machine en exécutant la commande suivante :

\
npm i -g typescript

Pour vérifier si l'installation a réussi (elle renverra le numéro de version en cas de succès) :

```bash
tsc -v
```

### Comment compiler TypeScript

Ouvrez votre éditeur de texte et créez un fichier TypeScript (par exemple, index.ts).

Écrivez du JavaScript ou du TypeScript :

```ts
let sport = 'football';

let id = 5;
```

Nous pouvons maintenant compiler cela en JavaScript avec la commande suivante :

```bash
tsc index
```

TSC compilera le code en JavaScript et le sortira dans un fichier appelé index.js :



```js
var sport = 'football';
var id = 5;
```

Si vous souhaitez spécifier le nom du fichier de sortie :

`tsc index.ts --outfile file-name.js`

Si vous voulez que TSC compile votre code automatiquement, chaque fois que vous apportez une modification, ajoutez le drapeau "watch":

`tsc index.ts -w`

Une chose intéressante à propos de TypeScript est qu'il signale les erreurs dans votre éditeur de texte pendant que vous codez, mais il compilera toujours votre code, qu'il y ait des erreurs ou non.

Par exemple, ce qui suit amène TypeScript à signaler immédiatement une erreur :

```

var sport = 'football';
var id = 5;

id = '5'; // Error: Type 'string' is not assignable to 
type 'number'.

```

\
Mais si nous essayons de compiler ce code avec `tsc index`, le code compilera toujours, malgré l'erreur.

Il s'agit d'une propriété importante de TypeScript : elle suppose que le développeur en sait plus. Même s'il y a une erreur TypeScript, cela ne vous empêche pas de compiler le code. Il vous indique qu'il y a une erreur, mais c'est à vous de décider si vous faites quelque chose à ce sujet.

### Comment configurer le fichier de configuration ts

Le fichier de configuration ts doit se trouver dans le répertoire racine de votre projet. Dans ce fichier, nous pouvons spécifier les fichiers racine, les options du compilateur et la rigueur avec laquelle nous voulons que TypeScript vérifie notre projet.

Tout d'abord, créez le fichier de configuration ts :

`tsc --init`

Vous devriez maintenant avoir un `tsconfig.json`fichier à la racine du projet.

Voici quelques options qu'il est bon de connaître (si vous utilisez un framework frontal avec TypeScript, la plupart si ce truc est pris en charge pour vous):

```
{
    "compilerOptions": {
        ...
        /* Modules */
        "target": "es2016", // Change to "ES2015" to compile to ES6
        "rootDir": "./src", // Where to compile from
        "outDir": "./public", // Where to compile to (usually the folder to be deployed to the web server)
        
        /* JavaScript Support */
        "allowJs": true, // Allow JavaScript files to be compiled
        "checkJs": true, // Type check JavaScript files and report errors
        
        /* Emit */
        "sourceMap": true, // Create source map files for emitted JavaScript files (good for debugging)
         "removeComments": true, // Don't emit comments
    },
    "include": ["src"] // Ensure only files in src are compiled
}
```

Pour tout compiler et surveiller les changements :

`tsc -w`

Remarque : lorsque des fichiers d'entrée sont spécifiés sur la ligne de commande (par exemple, `tsc index`), `tsconfig.json`les fichiers sont ignorés.

Pour tout compiler et surveiller les changements :

`tsc -w`

Remarque : lorsque des fichiers d'entrée sont spécifiés sur la ligne de commande (par exemple, `tsc index`), `tsconfig.json`les fichiers sont ignorés.

## Types dans TypeScript

### Types primitifs

En JavaScript, une valeur primitive est une donnée qui n'est pas un objet et qui n'a pas de méthode. Il existe 7 types de données primitives :

* chaîne de caractères
* numéro
* bigint
* booléen
* indéfini
* nul
* symbole

Les primitives sont immuables : elles ne peuvent pas être modifiées. Il est important de ne pas confondre une primitive elle-même avec une variable affectée d'une valeur primitive. La variable peut être réaffectée à une nouvelle valeur, mais la valeur existante ne peut pas être modifiée de la même manière que les objets, les tableaux et les fonctions peuvent être modifiés.

Voici un exemple :

```
let name = 'Danny';
name.toLowerCase();
console.log(name); // Danny - the string method didn't mutate the string

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array

name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
```

En JavaScript, toutes les valeurs primitives (à l'exception de null et undefined) ont des équivalents d'objet qui entourent les valeurs primitives. Ces objets wrapper sont String, Number, BigInt, Boolean et Symbol. Ces objets wrapper fournissent les méthodes qui permettent de manipuler les valeurs primitives.

De retour à TypeScript, nous pouvons définir le type que nous voulons qu'une variable ajoute `: type`(appelée "annotation de type" ou "signature de type") après avoir déclaré une variable. Exemples:

```ts
let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
```

Mais il est généralement préférable de ne pas indiquer explicitement le type, car TypeScript déduit automatiquement le type d'une variable (inférence de type) :

```
let id = 5; // TS knows it's a number
let firstname = 'danny'; // TS knows it's a string
let hasDog = true; // TS knows it's a boolean

hasDog = 'yes'; // ERROR
```

Nous pouvons également définir une variable pour pouvoir être un type d'union. **Un type d'union est une variable à laquelle plusieurs types peuvent être affectés** :

```
let age: string | number;
age = 26;
age = '26';
```

### Types de référence

En JavaScript, presque "tout" est un objet. En fait (et ce qui prête à confusion), les chaînes, les nombres et les booléens peuvent être des objets s'ils sont définis avec le mot- `new`clé :



```
let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
```

Mais lorsque nous parlons de types de référence en JavaScript, nous faisons référence à des tableaux, des objets et des fonctions.

#### Mise en garde : types primitifs et types de référence

Pour ceux qui n'ont jamais étudié les types primitifs par rapport aux types de référence, discutons de la différence fondamentale.

Si un type primitif est affecté à une variable, nous pouvons considérer cette variable comme *contenant* la valeur primitive. Chaque valeur primitive est stockée dans un emplacement unique en mémoire.

Si nous avons deux variables, x et y, et qu'elles contiennent toutes deux des données primitives, alors elles sont complètement indépendantes l'une de l'autre :

![Les données primitives sont stockées dans des emplacements de mémoire uniques](https://www.freecodecamp.org/news/content/images/2022/01/image-66.png)

X et Y contiennent tous deux des données primitives indépendantes uniques

```
let x = 2;
let y = 1;

x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)
```

Ce n'est pas le cas avec les types de référence. Les types de référence font référence à un emplacement mémoire où l'objet est stocké.

Ce n'est pas le cas avec les types de référence. Les types de référence font référence à un emplacement mémoire où l'objet est stocké.

![Emplacements de mémoire des types de référence](https://www.freecodecamp.org/news/content/images/2022/01/image-67.png)

point1 et point2 contiennent une référence à l'adresse où l'objet est stocké

```ts
let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)
```

C'était un aperçu rapide des types principaux par rapport aux types de référence. Consultez cet article si vous avez besoin d'une explication plus approfondie : [Types primitifs vs types de référence](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) .

#### Tableaux en TypeScript

Dans TypeScript, vous pouvez définir le type de données qu'un tableau peut contenir :

```js
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
```

Vous pouvez utiliser des types d'union pour définir des tableaux contenant plusieurs types :

```ts
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects

```

Si vous initialisez une variable avec une valeur, il n'est pas nécessaire d'indiquer explicitement le type, car TypeScript le déduira :

```ts
let person = ['Danny', 1, true]; // This is identical to above example
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
```

Il existe un type spécial de tableau qui peut être défini dans TypeScript : Tuples. **Un tuple est un tableau avec une taille fixe et des types de données connus.** Ils sont plus stricts que les tableaux normaux.

```
let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```

#### Objets dans TypeScript

Les objets dans TypeScript doivent avoir toutes les propriétés et types de valeur corrects :

#### Objets dans TypeScript

Les objets dans TypeScript doivent avoir toutes les propriétés et types de valeur corrects :

```ts
// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolean


person = {
  name: 'John',
  location: 'US',
}; 
// ERROR: missing the isProgrammer property
```

Lors de la définition de la signature d'un objet, vous utiliserez généralement une **interface** . Ceci est utile si nous devons vérifier que plusieurs objets ont les mêmes propriétés spécifiques et types de valeur **:**

Lors de la définition de la signature d'un objet, vous utiliserez généralement une **interface** . Ceci est utile si nous devons vérifier que plusieurs objets ont les mêmes propriétés spécifiques et types de valeur **:**

```ts
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

let person2: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};
```

\
Nous pouvons également déclarer des propriétés de fonction avec des signatures de fonction. Nous pouvons le faire en utilisant les fonctions JavaScript courantes de la vieille école ( `sayHi`) ou les fonctions fléchées ES6 ( `sayBye`):

```ts
interface Speech {
  sayHi(name: string): string;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
```

Notez que dans l' `sayStuff`objet, `sayHi`ou `sayBye`pourrait recevoir une fonction fléchée ou une fonction JavaScript commune - TypeScript s'en moque.

#### Fonctions dans TypeScript

Nous pouvons définir quels types doivent être les arguments de la fonction, ainsi que le type de retour de la fonction :

```ts
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
  return 'The circumference is ' + Math.PI * diam;
}

console.log(circle(10)); // The circumference is 31.41592653589793
```

La même fonction, mais avec une fonction flèche ES6 :

```ts
const circle = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

console.log(circle(10)); // The circumference is 31.41592653589793
```

\
Remarquez qu'il n'est pas nécessaire d'indiquer explicitement qu'il `circle`s'agit d'une fonction ; TypeScript le déduit. TypeScript déduit également le type de retour de la fonction, il n'est donc pas nécessaire de l'indiquer non plus. Bien que, si la fonction est volumineuse, certains développeurs aiment indiquer explicitement le type de retour pour plus de clarté.

```ts
// Using explicit typing 
const circle: Function = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle = (diam: number) => {
  return 'The circumference is ' + Math.PI * diam;
};
```

Nous pouvons ajouter un point d'interrogation après un paramètre pour le rendre facultatif. Notez également ci-dessous comment `c`un type d'union peut être un nombre ou une chaîne :



```ts
const add = (a: number, b: number, c?: number | string) => {
  console.log(c);

  return a + b;
};

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// I could pass a number, string, or nothing here!
// 9
```

Une fonction qui ne renvoie rien est censée renvoyer void - une absence totale de valeur. Ci-dessous, le type de retour de vide a été explicitement indiqué. Mais encore une fois, ce n'est pas nécessaire car TypeScript le déduira.

```ts
const logMessage = (msg: string): void => {
  console.log('This is the message: ' + msg);
};

logMessage('TypeScript is superb'); // This is the message: TypeScript is superb
```

Si nous voulons déclarer une variable de fonction, mais pas la définir (dire exactement ce qu'elle fait), **alors utilisez une signature de fonction.** Ci-dessous, la fonction `sayHello`doit suivre la signature après les deux-points :



```ts
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny
```

### Types dynamiques (tous)

En utilisant le `any`type, nous pouvons en gros transformer TypeScript en JavaScript :

```ts
let age: any = '100';
age = 100;
age = {
  years: 100,
  months: 2,
};
```

Il est recommandé d'éviter `any`autant que possible d'utiliser le type, car il empêche TypeScript de faire son travail et peut entraîner des bogues.

### Tapez les alias

Les alias de type peuvent réduire la duplication de code, en gardant notre code DRY. Ci-dessous, nous pouvons voir que l' `PersonObject`alias de type a empêché la répétition et agit comme une source unique de vérité pour les données qu'un objet personne doit contenir.



```ts
type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: 'John',
  id: 1,
};

const person2: PersonObject = {
  name: 'Delia',
  id: 2,
};

const sayHello = (person: PersonObject) => {
  return 'Hi ' + person.name;
};

const sayGoodbye = (person: PersonObject) => {
  return 'Seeya ' + person.name;
};
```

### Le DOM et le casting de type

TypeScript n'a pas accès au DOM comme JavaScript. Cela signifie que chaque fois que nous essayons d'accéder aux éléments DOM, TypeScript n'est jamais sûr qu'ils existent réellement.

L'exemple ci-dessous montre le problème :

```ts
const link = document.querySelector('a');

console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
```

Avec l'opérateur d'assertion non nul (!), nous pouvons indiquer explicitement au compilateur qu'une expression a une valeur autre que `null`ou `undefined`. Cela peut être utile lorsque le compilateur ne peut pas déduire le type avec certitude, mais nous avons plus d'informations que le compilateur.



```ts
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;

console.log(link.href); // www.freeCodeCamp.org
```

Remarquez que nous n'avons pas eu à indiquer le type de la `link`variable. En effet, TypeScript peut clairement voir (via l'inférence de type) qu'il est de type `HTMLAnchorElement`.

Mais que faire si nous devions sélectionner un élément DOM par sa classe ou son identifiant ? TypeScript ne peut pas déduire le type, car il peut s'agir de n'importe quoi.

```ts
const form = document.getElementById('signup-form');

console.log(form.method);
// ERROR: Object is possibly 'null'.
// ERROR: Property 'method' does not exist on type 'HTMLElement'.
```

Ci-dessus, nous obtenons deux erreurs. Nous devons dire à TypeScript que nous sommes certains qu'il `form`existe et que nous savons qu'il est de type `HTMLFormElement`. Nous faisons cela avec le casting de type :



```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

console.log(form.method); // post
```

Et TypeScript est content !

TypeScript a également un objet Event intégré. Ainsi, si nous ajoutons un écouteur d'événement submit à notre formulaire, TypeScript nous donnera une erreur si nous appelons des méthodes qui ne font pas partie de l'objet Event. Découvrez à quel point TypeScript est cool - il peut nous dire quand nous avons fait une faute d'orthographe :



```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // prevents the page from refreshing

  console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
});
```

## Classes en TypeScript

Nous pouvons définir les types que chaque élément de données doit être dans une classe :



```ts
class Person {
  name: string;
  isCool: boolean;
  pets: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isCool = c;
    this.pets = p;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
  }
}

const person1 = new Person('Danny', false, 1);
const person2 = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.

console.log(person1.sayHello()); // Hi, my name is Danny and I have 1 pets
```



Nous pourrions alors créer un `people`tableau qui ne comprend que des objets construits à partir de la `Person`classe :

```ts
let People: Person[] = [person1, person2];
```

Nous pouvons ajouter des modificateurs d'accès aux propriétés d'une classe. TypeScript fournit également un nouveau modificateur d'accès appelé `readonly`.



```ts
class Person {
  readonly name: string; // This property is immutable - it can only be read
  private isCool: boolean; // Can only access or modify from methods within this class
  protected email: string; // Can access or modify from this class and subclasses
  public pets: number; // Can access or modify from anywhere - including outside the class

  constructor(n: string, c: boolean, e: string, p: number) {
    this.name = n;
    this.isCool = c;
    this.email = e;
    this.pets = p;
  }

  sayMyName() {
    console.log(`Your not Heisenberg, you're ${this.name}`);
  }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Fine
person1.name = 'James'; // Error: read only
console.log(person1.isCool); // Error: private property - only accessible within Person class
console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(person1.pets); // Public property - so no problem
```

Nous pouvons rendre notre code plus concis en construisant des propriétés de classe de cette façon :



```ts
class Person {
  constructor(
    readonly name: string,
    private isCool: boolean,
    protected email: string,
    public pets: number
  ) {}

  sayMyName() {
    console.log(`Your not Heisenberg, you're ${this.name}`);
  }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny
```

En l'écrivant de la manière ci-dessus, les propriétés sont automatiquement attribuées dans le constructeur, ce qui nous évite d'avoir à les écrire toutes.

Notez que si nous omettons le modificateur d'accès, par défaut la propriété sera publique.

Les classes peuvent également être étendues, comme en JavaScript normal :

```ts
class Programmer extends Person {
  programmingLanguages: string[];

  constructor(
    name: string,
    isCool: boolean,
    email: string,
    pets: number,
    pL: string[]
  ) {
    // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
    super(name, isCool, email, pets);
    this.programmingLanguages = pL;
  }
}
```

[Pour plus d'informations sur les classes, reportez-vous à la documentation officielle de TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html) .



## Modules en TypeScript

En JavaScript, un module est simplement un fichier contenant du code associé. Les fonctionnalités peuvent être importées et exportées entre les modules, en gardant le code bien organisé.

TypeScript prend également en charge les modules. Les fichiers TypeScript seront compilés en plusieurs fichiers JavaScript.

Dans le `tsconfig.json`fichier, modifiez les options suivantes pour prendre en charge l'importation et l'exportation modernes :

```ts
 "target": "es2016",
 "module": "es2015"
```

(Bien que, pour les projets Node, vous vouliez très probablement `"module": "CommonJS"`- Node ne prend pas encore en charge l'importation/exportation moderne.)

Maintenant, dans votre fichier HTML, modifiez l'importation du script pour qu'elle soit de type module :

```html
<script type="module" src="/public/script.js"></script>
```

Nous pouvons maintenant importer et exporter des fichiers en utilisant ES6 :

```ts
// src/hello.ts
export function sayHi() {
  console.log('Hello there!');
}

// src/script.ts
import { sayHi } from './hello.js';

sayHi(); // Hello there!
```

Remarque : importez toujours en tant que fichier JavaScript, même dans les fichiers TypeScript.



## Interfaces en TypeScript

Les interfaces définissent l'apparence d'un objet :

```ts
interface Person {
  name: string;
  age: number;
}

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  age: 48,
}); // Hi John
```

Vous pouvez également définir un type d'objet à l'aide d'un alias de type :

```ts
type Person = {
  name: string;
  age: number;
};

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  age: 48,
}); // Hi John
```

Ou un type d'objet peut être défini de manière anonyme :

```ts
function sayHi(person: { name: string; age: number }) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  age: 48,
}); // Hi John
```

Les interfaces sont très similaires aux alias de type et, dans de nombreux cas, vous pouvez utiliser l'un ou l'autre. La principale distinction est que les alias de type ne peuvent pas être rouverts pour ajouter de nouvelles propriétés, par rapport à une interface qui est toujours extensible.

Les exemples suivants sont tirés de la [documentation TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) .

Extension d'une interface :

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: "Winnie",
  honey: true,
}
```

Extension d'un type via des intersections :

```ts
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name: "Winnie",
  honey: true,
}
```

Ajout de nouveaux champs à une interface existante :

```ts
interface Animal {
  name: string
}

// Re-opening the Animal interface to add a new field
interface Animal {
  tail: boolean
}

const dog: Animal = {
  name: "Bruce",
  tail: true,
}
```

Voici la principale différence : un type ne peut pas être modifié après avoir été créé :

```ts
type Animal = {
  name: string
}

type Animal = {
  tail: boolean
}
// ERROR: Duplicate identifier 'Animal'.
```

En règle générale, les documents TypeScript recommandent d'utiliser des interfaces pour définir des objets, jusqu'à ce que vous ayez besoin d'utiliser les fonctionnalités d'un type.

Les interfaces peuvent également définir des signatures de fonction :

```
interface Person {
  name: string
  age: number
  speak(sentence: string): void
}

const person1: Person = {
  name: "John",
  age: 48,
  speak: sentence => console.log(sentence),
}
```

Vous vous demandez peut-être pourquoi nous utiliserions une interface sur une classe dans l'exemple ci-dessus.  

L'un des avantages de l'utilisation d'une interface est qu'elle n'est utilisée que par TypeScript, pas par JavaScript. Cela signifie qu'il ne sera pas compilé et n'alourdira pas votre JavaScript. Les classes sont des fonctionnalités de JavaScript, elles seraient donc compilées.

De plus, une classe est essentiellement une *fabrique d'objets* (c'est-à-dire un plan de ce à quoi un objet est censé ressembler puis implémenté), alors qu'une interface est une structure utilisée uniquement pour *la vérification de type* .

Alors qu'une classe peut avoir des propriétés et des méthodes initialisées pour aider à créer des objets, une interface définit essentiellement les propriétés et le type qu'un objet peut avoir.

### Interfaces avec les classes

Nous pouvons indiquer à une classe qu'elle doit contenir certaines propriétés et méthodes en implémentant une interface :

```ts
interface HasFormatter {
  format(): string;
}

class Person implements HasFormatter {
  constructor(public username: string, protected password: string) {}

  format() {
    return this.username.toLocaleLowerCase();
  }
}

// Must be objects that implement the HasFormatter interface
let person1: HasFormatter;
let person2: HasFormatter;

person1 = new Person('Danny', 'password123');
person2 = new Person('Jane', 'TypeScripter1990');

console.log(person1.format()); // danny
```

Assurez-vous qu'il `people`s'agit d'un tableau d'objets qui implémentent `HasFormatter`(garantit que chaque personne dispose de la méthode format):

```ts
let people: HasFormatter[] = [];
people.push(person1);
people.push(person2);
```

## Types littéraux dans TypeScript

En plus des types généraux `string`et `number`, nous pouvons faire référence à des chaînes et des nombres spécifiques dans les positions de type :

```
// Union type with a literal type in each position
let favouriteColor: 'red' | 'blue' | 'green' | 'yellow';

favouriteColor = 'blue';
favouriteColor = 'crimson'; // ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.
```

## Génériques

Les génériques vous permettent de créer un composant qui peut fonctionner sur une variété de types, plutôt qu'un seul, **ce qui contribue à rendre le composant plus réutilisable.**

Prenons un exemple pour vous montrer ce que cela signifie...

La `addID`fonction accepte n'importe quel objet et renvoie un nouvel objet avec toutes les propriétés et valeurs de l'objet transmis, plus une `id`propriété avec une valeur aléatoire comprise entre 0 et 1000. En bref, elle attribue un ID à tout objet.

```ts
 const addID = (obj: object) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person1 = addID({ name: 'John', age: 40 });

console.log(person1.id); // 271
console.log(person1.name); // ERROR: Property 'name' does not exist on type '{ id: number; }'.
```

Comme vous pouvez le voir, TypeScript génère une erreur lorsque nous essayons d'accéder à la `name`propriété. En effet, lorsque nous transmettons un objet à `addID`, nous ne spécifions pas les propriétés que cet objet devrait avoir - donc TypeScript n'a aucune idée des propriétés de l'objet (il ne les a pas "capturées"). Ainsi, la seule propriété que TypeScript sait se trouver sur l'objet renvoyé est `id`.

Alors, comment pouvons-nous transmettre n'importe quel objet à `addID`, tout en indiquant à TypeScript les propriétés et les valeurs de l'objet ? Nous pouvons utiliser un *générique* , `<T>`– où `T`est connu comme le *paramètre de type* :

```ts
// <T> is just the convention - e.g. we could use <X> or <A>
const addID = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};
```

Qu'est-ce que cela fait? Eh bien, maintenant, lorsque nous passons un objet dans `addID`, nous avons dit à TypeScript de capturer le type - `T`devient ainsi le type que nous passons. `addID`saura maintenant quelles sont les propriétés de l'objet que nous passons.

Mais, nous avons maintenant un problème : tout peut être transmis `addID`et TypeScript capturera le type et ne signalera aucun problème :

```ts
let person1 = addID({ name: 'John', age: 40 });
let person2 = addID('Sally'); // Pass in a string - no problem

console.log(person1.id); // 271
console.log(person1.name); // John

console.log(person2.id);
console.log(person2.name); // ERROR: Property 'name' does not exist on type '"Sally" & { id: number; }'.
```

Lorsque nous avons transmis une chaîne, TypeScript n'a vu aucun problème. Il n'a signalé une erreur que lorsque nous avons essayé d'accéder à la `name`propriété. Donc, nous avons besoin d'une contrainte : nous devons indiquer à TypeScript que seuls les objets doivent être acceptés, en faisant de notre type générique, `T`, une extension de`object` :

```ts
const addID = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person1 = addID({ name: 'John', age: 40 });
let person2 = addID('Sally'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'object'.
```

L'erreur est détectée immédiatement - parfait... enfin, pas tout à fait. En JavaScript, les tableaux sont des objets, nous pouvons donc toujours nous en tirer en passant un tableau :

```ts
let person2 = addID(['Sally', 26]); // Pass in an array - no problem

console.log(person2.id); // 824
console.log(person2.name); // Error: Property 'name' does not exist on type '(string | number)[] & { id: number; }'.
```

Nous pourrions résoudre ce problème en disant que l'argument de l'objet doit avoir une propriété name avec une valeur de chaîne :

```ts
const addID = <T extends { name: string }>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person2 = addID(['Sally', 26]); // ERROR: argument should have a name property with string value
```

Le type peut également être transmis à `<T>`, comme ci-dessous - mais ce n'est pas nécessaire la plupart du temps, car TypeScript le déduira.

```ts
// Below, we have explicitly stated what type the argument should be between the angle brackets.
let person1 = addID<{ name: string; age: number }>({ name: 'John', age: 40 });
```

**Les génériques vous permettent d'avoir une sécurité de type dans les composants où les arguments et les types de retour sont inconnus à l'avance.**

**En TypeScript, les génériques sont utilisés lorsque nous voulons décrire une correspondance entre deux valeurs.** Dans l'exemple ci-dessus, le type de retour était lié au type d'entrée. Nous avons utilisé un *générique* pour décrire la correspondance.

Autre exemple : si nous avons besoin d'une fonction qui accepte plusieurs types, il est préférable d'utiliser un générique plutôt que le `any`type. Ci-dessous montre le problème avec l'utilisation de `any`:

```ts
function logLength(a: any) {
  console.log(a.length); // No error
  return a;
}

let hello = 'Hello world';
logLength(hello); // 11

let howMany = 8;
logLength(howMany); // undefined (but no TypeScript error - surely we want TypeScript to tell us we've tried to access a length property on a number!)
```

Nous pourrions essayer d'utiliser un générique :

```ts
function logLength<T>(a: T) {
  console.log(a.length); // ERROR: TypeScript isn't certain that `a` is a value with a length property
  return a;
}
```

Au moins, nous obtenons maintenant des commentaires que nous pouvons utiliser pour renforcer notre code.

Solution : utilisez un générique qui étend une interface garantissant que chaque argument transmis a une propriété de longueur :

```ts
interface hasLength {
  length: number;
}

function logLength<T extends hasLength>(a: T) {
  console.log(a.length);
  return a;
}

let hello = 'Hello world';
logLength(hello); // 11

let howMany = 8;
logLength(howMany); // Error: numbers don't have length properties
```

Nous pourrions également écrire une fonction où l'argument est un tableau d'éléments qui ont tous une propriété de longueur :

```ts
interface hasLength {
  length: number;
}

function logLengths<T extends hasLength>(a: T[]) {
  a.forEach((element) => {
    console.log(element.length);
  });
}

let arr = [
  'This string has a length prop',
  ['This', 'arr', 'has', 'length'],
  { material: 'plastic', length: 30 },
];

logLengths(arr);
// 29
// 4
// 30
```

Les génériques sont une fonctionnalité géniale de TypeScript !

### Génériques avec interfaces

Lorsque nous ne savons pas à l'avance de quel type sera une certaine valeur dans un objet, nous pouvons utiliser un générique pour transmettre le type :

```ts
// The type, T, will be passed in
interface Person<T> {
  name: string;
  age: number;
  documents: T;
}

// We have to pass in the type of `documents` - an array of strings in this case
const person1: Person<string[]> = {
  name: 'John',
  age: 48,
  documents: ['passport', 'bank statement', 'visa'],
};

// Again, we implement the `Person` interface, and pass in the type for documents - in this case a string
const person2: Person<string> = {
  name: 'Delia',
  age: 46,
  documents: 'passport, P45',
};
```

## Énumérations dans TypeScript

Les énumérations sont une fonctionnalité spéciale que TypeScript apporte à JavaScript. Les énumérations nous permettent de définir ou de déclarer une collection de valeurs liées, qui peuvent être des nombres ou des chaînes, comme un ensemble de constantes nommées.

```ts
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1

// To start from 1
enum ResourceType {
  BOOK = 1,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 1
console.log(ResourceType.AUTHOR); // 2
```

Par défaut, les énumérations sont basées sur des nombres - elles stockent les valeurs de chaîne sous forme de nombres. Mais il peut aussi s'agir de chaînes :

```ts
enum Direction {
  Up = 'Up',
  Right = 'Right',
  Down = 'Down',
  Left = 'Left',
}

console.log(Direction.Right); // Right
console.log(Direction.Down); // Down
```

Les énumérations sont utiles lorsque nous avons un ensemble de constantes liées. Par exemple, au lieu d'utiliser des nombres non descriptifs dans votre code, les énumérations rendent le code plus lisible avec des constantes descriptives.

Les énumérations peuvent également empêcher les bogues, car lorsque vous tapez le nom de l'énumération, intellisense apparaîtra et vous donnera la liste des options possibles pouvant être sélectionnées.

## Mode strict TypeScript

Il est recommandé d'activer toutes les opérations de vérification de type stricte dans le `tsconfig.json`fichier. Cela entraînera TypeScript à signaler plus d'erreurs, mais aidera à empêcher de nombreux bogues de se glisser dans votre application.

```ts
 // tsconfig.json
 "strict": true
```

Discutons de quelques-unes des choses que fait le mode strict : pas de vérifications implicites quelconques et strictes.

### Aucun implicite aucun

Dans la fonction ci-dessous, TypeScript a déduit que le paramètre `a`est de `any`type. Comme vous pouvez le voir, lorsque nous transmettons un nombre à cette fonction et essayons d'enregistrer une `name`propriété, aucune erreur n'est signalée. Pas bon.

```ts
function logName(a) {
  // No error??
  console.log(a.name);
}

logName(97);
```

Avec l' `noImplicitAny`option activée, TypeScript signalera instantanément une erreur si nous n'indiquons pas explicitement le type de `a`:

```ts
// ERROR: Parameter 'a' implicitly has an 'any' type.
function logName(a) {
  console.log(a.name);
}
```

### Contrôles nuls stricts

Lorsque l' `strictNullChecks`option est false, TypeScript ignore effectivement `null`et `undefined`. Cela peut entraîner des erreurs inattendues lors de l'exécution.

Avec `strictNullChecks`la valeur true, `null`et `undefined`ont leurs propres types, et vous obtiendrez une erreur de type si vous les affectez à une variable qui attend une valeur concrète (par exemple, `string`).

```ts
let whoSangThis: string = getSong();

const singles = [
  { song: 'touch of grey', artist: 'grateful dead' },
  { song: 'paint it black', artist: 'rolling stones' },
];

const single = singles.find((s) => s.song === whoSangThis);

console.log(single.artist);
```

Ci-dessus, `singles.find`n'a aucune garantie qu'il trouvera la chanson - mais nous avons écrit le code comme s'il le ferait toujours.

En définissant `strictNullChecks`sur true, TypeScript générera une erreur car nous n'avons pas fait de garantie `single`existante avant d'essayer de l'utiliser :

```ts
const getSong = () => {
  return 'song';
};

let whoSangThis: string = getSong();

const singles = [
  { song: 'touch of grey', artist: 'grateful dead' },
  { song: 'paint it black', artist: 'rolling stones' },
];

const single = singles.find((s) => s.song === whoSangThis);

console.log(single.artist); // ERROR: Object is possibly 'undefined'.
```

TypeScript nous dit essentiellement de nous assurer qu'il `single`existe avant de l'utiliser. Nous devons vérifier si ce n'est pas le cas `null`ou d' `undefined`abord :

```ts
if (single) {
  console.log(single.artist); // rolling stones
}
```

## Limitation dans TypeScript

Dans un programme TypeScript, **une variable peut passer d'un type moins précis à un type plus précis.** Ce processus est appelé rétrécissement de type.

Voici un exemple simple montrant comment TypeScript réduit le type moins spécifique `string | number`à des types plus spécifiques lorsque nous utilisons des instructions if avec `typeof`:

```ts
function addAnother(val: string | number) {
  if (typeof val === 'string') {
    // TypeScript treats `val` as a string in this block, so we can use string methods on `val` and TypeScript won't shout at us
    return val.concat(' ' + val);
  }

  // TypeScript knows `val` is a number here
  return val + val;
}

console.log(addAnother('Woooo')); // Woooo Woooo
console.log(addAnother(20)); // 40
```

Autre exemple : ci-dessous, nous avons défini un type union appelé `allVehicles`, qui peut être soit de type `Plane`soit `Train`.

```ts
interface Vehicle {
  topSpeed: number;
}

interface Train extends Vehicle {
  carriages: number;
}

interface Plane extends Vehicle {
  wingSpan: number;
}

type PlaneOrTrain = Plane | Train;

function getSpeedRatio(v: PlaneOrTrain) {
  // In here, we want to return topSpeed/carriages, or topSpeed/wingSpan
  console.log(v.carriages); // ERROR: 'carriages' doesn't exist on type 'Plane'
}
```

Étant donné que la fonction `getSpeedRatio`fonctionne avec plusieurs types, nous avons besoin d'un moyen de distinguer si `v`est a `Plane`ou `Train`. Nous pourrions le faire en donnant aux deux types une propriété distinctive commune, avec une valeur de chaîne littérale :

```ts
// All trains must now have a type property equal to 'Train'
interface Train extends Vehicle {
  type: 'Train';
  carriages: number;
}

// All trains must now have a type property equal to 'Plane'
interface Plane extends Vehicle {
  type: 'Plane';
  wingSpan: number;
}

type PlaneOrTrain = Plane | Train;
```

Maintenant, nous et TypeScript pouvons affiner le type de `v`:

```ts
function getSpeedRatio(v: PlaneOrTrain) {
  if (v.type === 'Train') {
    // TypeScript now knows that `v` is definitely a `Train`. It has narrowed down the type from the less specific `Plane | Train` type, into the more specific `Train` type
    return v.topSpeed / v.carriages;
  }

  // If it's not a Train, TypeScript narrows down that `v` must be a Plane - smart!
  return v.topSpeed / v.wingSpan;
}

let bigTrain: Train = {
  type: 'Train',
  topSpeed: 100,
  carriages: 20,
};

console.log(getSpeedRatio(bigTrain)); // 5
```

## Bonus : TypeScript avec React

TypeScript prend entièrement en charge React et JSX. Cela signifie que nous pouvons utiliser TypeScript avec les trois frameworks React les plus courants :

* créer-réagir-app ( [configuration TS](https://create-react-app.dev/docs/adding-typescript/) )
* Gatsby ( [configuration TS](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/) )
* Next.js ( [configuration TS](https://nextjs.org/learn/excel/typescript) )

Si vous avez besoin d'une configuration React-TypeScript plus personnalisée, vous pouvez configurer [Webpack](https://webpack.js.org/) (un bundle de modules) et le configurer `tsconfig.json`vous-même. Mais la plupart du temps, un framework fera l'affaire.

Pour configurer create-react-app avec TypeScript, par exemple, exécutez simplement :

```ts
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
```

Dans le dossier src, nous pouvons maintenant créer des fichiers avec des extensions `.ts`(pour les fichiers TypeScript normaux) ou `.tsx`(pour TypeScript avec React) et écrire nos composants avec TypeScript. Cela sera ensuite compilé en JavaScript dans le dossier public.

### Réagissez les accessoires avec TypeScript

Ci-dessous, nous disons que cela `Person`devrait être un composant fonctionnel React qui accepte un objet props avec les props `name`, qui devrait être une chaîne, et `age`, qui devrait être un nombre.

```tsx
// src/components/Person.tsx
import React from 'react';

const Person: React.FC<{
  name: string;
  age: number;
}> = ({ name, age }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

export default Person;
```

Mais la plupart des développeurs préfèrent utiliser une interface pour spécifier les types d'accessoires :

```tsx
interface Props {
  name: string;
  age: number;
}

const Person: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};
```

Nous pouvons ensuite importer ce composant dans `App.tsx`. Si nous ne fournissons pas les accessoires nécessaires, TypeScript générera une erreur.

```tsx
import React from 'react';
import Person from './components/Person';

const App: React.FC = () => {
  return (
    <div>
      <Person name='John' age={48} />
    </div>
  );
};

export default App;
```

Voici quelques exemples de ce que nous pourrions avoir comme types d'accessoires :

```tsx
interface PersonInfo {
  name: string;
  age: number;
}

interface Props {
  text: string;
  id: number;
  isVeryNice?: boolean;
  func: (name: string) => string;
  personInfo: PersonInfo;
}
```

### Réagissez les crochets avec TypeScript

#### useState()

Nous pouvons déclarer les types d'une variable d'état en utilisant des crochets angulaires. Ci-dessous, si nous omettions les crochets angulaires, TypeScript en déduirait qu'il `cash`s'agit d'un nombre. Donc, si nous voulons lui permettre d'être également nul, nous devons spécifier :

```tsx
const Person: React.FC<Props> = ({ name, age }) => {
  const [cash, setCash] = useState<number | null>(1);

  setCash(null);

  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};
```

#### useRef()

`useRef`renvoie un objet mutable qui persiste pendant toute la durée de vie du composant. Nous pouvons indiquer à TypeScript à quoi l'objet ref doit faire référence - ci-dessous, nous disons que le prop doit être un `HTMLInputElement`:

```tsx
const Person: React.FC = () => {
  // Initialise .current property to null
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
};
```



## Ressources utiles et lectures complémentaires

* [La documentation officielle de TypeScrip](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
* [Vidéo TypeScript de Ben Awad avec React](https://www.youtube.com/watch?v=Z5iWr6Srsj8&ab_channel=BenAwad)
* [Rétrécissement dans TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) (une fonctionnalité très intéressante de TS que vous devriez apprendre)
* [Surcharges de fonctions](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
* [Valeurs primitives en JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
* [Objets JavaScript](https://www.w3schools.com/js/js_object_definition.asp)

J'espère que cela a été utile. Si vous êtes arrivé ici, vous connaissez maintenant les principaux principes de base de TypeScript et pouvez commencer à l'utiliser dans vos projets.