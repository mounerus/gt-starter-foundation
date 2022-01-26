---
template: blog-post
title: Frameworks d'automatisation des tests Javascript
slug: /framework-test-javascript
date: 2020-10-13 12:47
description: QA & Frameworks d'automatisation des tests Javascript
featuredImage: /assets/js-test.jpeg
---
Les **frameworks** d'automatisation des tests basés sur Javascript sont très demandés par les employeurs du monde entier. L'une des principales raisons de la popularité des frameworks basés sur Javascript est que la plupart des applications Web frontales ou de l'interface utilisateur ont des composants Javascript et automatiseront ces applications Web plus facilement avec Java script que tout autre langage de programmation.

Dans cet article, Gotestr vous guidera à travers les principaux frameworks couramment utilisés pour l'automatisation des tests.

Vous devriez apprendre autant de frameworks que possible mentionnés dans l'article.

### Cadres d'automatisation de l'interface utilisateur :

* *[WebdriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)* - est un webdriver Nodejs  implémenté par les auteurs de Selenium, inclut uniquement les fonctionnalités et commandes de base. Utilise le flux de contrôle pour synchroniser les actions asynchrones.
* *[WebdriverIO](http://webdriver.io/)* - Nodejs webdriver. Possède sa propre gestion des actions asynchrones à l'aide d'un riche ensemble de fonctionnalités.
* *[Protractor](http://www.protractortest.org/)* - Framework de test de bout en bout pour les applications Angular, livré avec JasmineWD inclus et construit sur WebdriverJS
* *[CodeceptJS](http://codecept.io/)* - Tests de bout en bout suralimentés pour NodeJS
* *[Nightwatch.js](http://nightwatchjs.org/)* - Solution de test de bout en bout (E2E) basée sur Node.js et facile à utiliser pour les applications et les sites Web basés sur un navigateur.
* *[Dalek.js](http://dalekjs.com/)* - Tests multi-navigateurs automatisés avec JavaScript.
* *[Nemo](http://nemo.js.org/)* - Nemo fournit un moyen simple d'ajouter l'automatisation du sélénium à vos projets Web NodeJS. Avec une puissante capacité de configuration fournie par krakenjs/confit et une architecture de plug-in, Nemo est suffisamment flexible pour gérer tout besoin d'automatisation de navigateur/appareil.
* *[Frisby](https://docs.frisbyjs.com/introduction/readme)* - Est un framework de test d'API REST construit sur node.js et Jasmine qui rend le test des points de terminaison d'API facile, rapide et amusant.
* *[TestCafe](https://devexpress.github.io/testcafe/)* - Tests de navigateur automatisés pour la pile de développement Web moderne.
* *[Puppeteer](https://github.com/puppeteer/puppeteer)* - Puppeteer est une bibliothèque Node qui fournit une API de haut niveau pour contrôler Chrome headless via le protocole DevTools. Il peut également être configuré pour utiliser Chrome complet.
* *[Playwright](https://playwright.dev/)* - Playwright est une bibliothèque Node pour automatiser les navigateurs Chromium, WebKit et Firefox avec une seule API. Il permet une automatisation Web multi-navigateurs qui est toujours fiable et rapide.
* *[CasperJS](http://casperjs.org/)* - CasperJS est un utilitaire de script et de test de navigation pour PhantomJS et SlimerJS (encore expérimental). Il facilite le processus de définition d'un scénario de navigation complet et fournit des fonctions, des méthodes et un sucre syntaxique de haut niveau utiles pour effectuer des tâches courantes.
* *[Cypress.io](https://www.cypress.io/)* - Tests rapides, faciles et fiables pour tout ce qui s'exécute dans un navigateur. Fonctionne sur Mac, Linux, Windows et n'importe quel CI.
* *[Serenity/JS](https://serenity-js.org/handbook/)* - Serenity/JS rend les tests d'acceptation et de régression des applications Web modernes plus rapides, plus collaboratifs et plus faciles à mettre à l'échelle.
* *[Sakuli](https://sakuli.io/)* - Une solution de test de bout en bout (E2E) basée sur Node.js qui combine des tests Web basés sur Selenium avec une automatisation complète du bureau. Son DSL personnalisé permet d'écrire des scénarios complexes qui basculent de manière transparente entre le navigateur et votre bureau. Son support de surveillance intégré permet de mesurer les données de performance du point de vue de l'utilisateur.
* *[BackstopJS](https://garris.github.io/BackstopJS/)* - BackstopJS automatise les tests de régression visuelle de votre interface utilisateur Web réactive en comparant les captures d'écran DOM au fil du temps.
* *[Taiko](https://github.com/getgauge/Taiko)* - Une bibliothèque Node.js pour tester et automatiser les navigateurs chromium.
* *[QA Wolf](https://github.com/qawolf/qawolf)* - Une bibliothèque Node.js pour créer des tests de navigateur 10 fois plus rapidement avec Puppeteer et Jest.

### Cadres d'automatisation fictifs :

* *[Sinon.JS](http://sinonjs.org/)* - Espions de test autonomes, stubs et mocks pour JavaScript. Aucune dépendance, fonctionne avec n'importe quel framework de test unitaire.

### Cadres d'automatisation d'API :

* *[SuperTest](https://github.com/visionmedia/supertest)* - Bibliothèque pilotée par super-agent pour tester les serveurs HTTP node.js à l'aide d'une API fluide.
* *[Frisby](https://github.com/vlucas/frisby)* - Frisby est un framework de test d'API REST construit sur Jest qui rend le test des points de terminaison d'API facile, rapide et amusant.
* *[PactumJS](https://pactumjs.github.io/)* - Outil de test API REST pour tous les niveaux d'une pyramide de test.

### Cadres d'automatisation mobile :

* *[Implémentation Appium de WebdriverIO](https://github.com/webdriverio/appium-boilerplate/)* - liaisons nodejs implémentant les commandes Appium.
* *[Detox](https://github.com/wix/Detox)* - Cadre de test et d'automatisation de bout en bout de Grey Box pour les applications mobiles

### Cadres d'analyse de code :

* *[ESLint](http://eslint.org/)* - Outil de linting JavaScript enfichable. Des règles personnalisées peuvent être ajoutées pour étendre les fonctionnalités existantes.
* *[JSHint](https://github.com/jshint/jshint)* - Outil d'analyse de code js de conduite communautaire pris en charge par twitter, facebook, wiki, jquery, mozilla, yahoo et autres.
* *[JsLint](https://www.jslint.com/)* - Vérificateur et validateur de syntaxe JavaScript.

### Cadres BDD :

* *[CucumberJS](https://github.com/cucumber/cucumber-js)* - Cucumber est un outil permettant d'exécuter des tests automatisés écrits en langage clair. Cucumber.js est l'implémentation JavaScript de Cucumber et s'exécute à la fois sur Node.js et sur les navigateurs Web modernes.
* *[MochaJS](https://mochajs.org/)* - Framework de test JavaScript riche en fonctionnalités exécuté sur node.js et le navigateur.
* *[Jasmine](https://jasmine.github.io/)* - Framework de test de développement piloté par le comportement pour JavaScript. Il ne repose pas sur les navigateurs, DOM ou tout framework JavaScript. Ainsi, il convient aux sites Web, aux projets Node.js ou à tout autre endroit où JavaScript peut s'exécuter.
* *[Intern](https://theintern.io/)* - est une pile de tests complète pour JavaScript conçue pour vous aider à écrire et à exécuter des cas de test cohérents et de haute qualité pour vos bibliothèques et applications JavaScript. Il peut être utilisé pour tester n'importe quel code JavaScript. Ses capacités de test fonctionnel peuvent même être utilisées pour tester des applications Web et mobiles non JavaScript, si vous le souhaitez vraiment.
* *[Chai](https://www.chaijs.com/)* - Chai est une bibliothèque d'assertions BDD / TDD pour le nœud et le navigateur qui peut être délicieusement associée à n'importe quel framework de test javascript

### Performance & stress & charge

* *[k6](https://github.com/loadimpact/k6)* - Comme les tests unitaires, pour les performances. Un outil de test de charge moderne, utilisant Go et JavaScript.
* *[artillery](https://artillery.io/)* - Artillery est une boîte à outils de test de charge moderne, puissante et facile à utiliser. Utilisez-le pour créer des applications évolutives qui restent performantes et résilientes sous une charge élevée.