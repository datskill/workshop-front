# Documentation technique

Ce document représente la documentation technique du frontend de l'application "Producteur à Particulier" réalisé durant le workshop de l'**EPSI**.

L'application "PàP" permet la mise en relation entres producteurs et livreurs afin de pouvoir délivrer les commandes aux clients.

L'objectif est de développer le retour aux produits locaux, notamment dans les villes : seulement les producteurs n'ont pas toujours les moyens (financiers, logistiques, etc..)
pour mettre en place un système de livraison aux clients particuliers.

Notre application permet aux producteurs désirant vendre et livrer ses clients particuliers d'être mis en relation avec un livreur disponible.



## 1. Solution technique

<p align="center"><a href="http://angular.io/" target="blank"><img src="https://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png" width="160" alt="Angular Logo"/></a></p>

**Angular** est un framework typescript puissant et léger.

**TypeScript** est une alternative à Javascript qui permet de typer le code ce qui nous permet d'éviter plus facilement des probables erreurs de développement et qui force à coder "proprement"

Le site web est une application "PWA" qui fonctionne en offline et est également responsive, adapté pour les utilisateurs mobiles ou tablettes. 

Nous avons utilisés plusieurs packages pour réaliser le site, notamment : 

- **Angular Material**

- **Google Maps**

Toutes les dépendances sont à retrouvées dans le **package.json**


## 2. Mise en route

### Pré-requis

* Installation de <a href="https://nodejs.org/en/download/" target="blank">NodeJS</a> contenant <a href="https://www.npmjs.com/package/mongodb" target="blank">NPM</a>
* Installation d'<a href="https://angular.io/" target="blank">Angular</a>
  * Via <a href="https://www.npmjs.com/package/yarn" target="blank">NPM</a>
   * ```bash
      $ npm i -g @angular/cli
      ```
* Installation de : <a href="https://www.npmjs.com/package/http-server" target="blank">Http-server</a>
  * Via <a href="https://www.npmjs.com/package/yarn" target="blank">NPM</a>
   * ```bash
      $ npm i -g http-server
      ```

## Installation

Dans votre terminal :

```bash
$ npm i
```

Cela va initialiser le projet et installer les dépendances nécessaires au projet.


## Démarrer l'application

```bash
# development
$ ng serve -o
```

```bash
# production mode
$ http-server -p 8080 -c-1 dist/workshop-front
```

#### [Retour au sommaire](../../master/README.md)


