---
template: blog-post
title: Comment Implémenter des tests E2E dans React avec Cypress
slug: /test-end-to-end-react-cypress
date: 2022-03-04 10:37
description: Comment Implémenter des tests E2E (end to end) dans React avec Cypress
featuredImage: /assets/cypress-react.png
---
## introduction

**[Cypress](https://go.cypress.io/)** est le principal outil de test end to end ("E2E") pour les tests frontend mais de nombreux développeurs front n'ont qu'une familiarité passagère avec les tests en tant que concept. Si vous êtes confus ou mal à l'aise avec les tests dans un environnement front, et que vous les associez peut-être uniquement aux tests unitaires/composants ou au backend, alors vous êtes au bon endroit. Dans cet article, nous allons approfondir les raisons pour lesquelles les tests E2E sont importants ; comment l'utilisation de [Cypress](https://go.cypress.io/) peut vous faire gagner du temps ; et bien sûr apprendre à implémenter les bases de Cypress dans une application ReactJS 'MadLibs'.

### 1. Les tests et le frontend

Le développement piloté par les tests ('TDD') est dans la bouche de tous les développeurs backend, car les tests ont enfin pris la place qui leur revient en tant que 'must-have' du génie logiciel. Toute entreprise n'utilisant pas les tests backend est en retard. Cependant, ce regain d'intérêt n'a commencé que récemment à prendre de l'ampleur pour le frontend. Quiconque passe au développement frontal se sentira probablement très à l'aise avec les tests unitaires, où des composants spécifiques sont vérifiés pour s'assurer qu'ils produisent les bons résultats. Cependant, les tests E2E frontaux sont une bête entièrement différente.

Alors, comment tester de bout en bout une application frontale ? Entrez Cyprès.

Le concept clé à comprendre dans les tests frontend est que nous voulons tester les résultats, pas les détails de la mise en œuvre. En d'autres termes : l'écran finit-il par ressembler à ce que nous voulons qu'il soit, et fait-il ce que nous voulons qu'il fasse ? Super! Nous ne nous soucions pas des appels de fonction spécifiques, de l'état ou des structures de données ici. Nous testons simplement l'expérience utilisateur.

### 2. Organiser/agir/affirmer

Arrange/Act/Assert est une manière simple d'aborder les tests, ce qui peut vous aider à comprendre le processus de base par lequel tous les tests (y compris le backend !) sont structurés. Ils constituent également une bonne base pour expliquer les bases au fur et à mesure que nous progressons dans notre application de démonstration. En bref, Arrange/Act/Assert est un framework pour structurer vos tests.

La première étape lors de l'écriture d'un test consiste à «organiser» le bon environnement. Dans notre cas, vous verrez que nous devons charger la page que nous voulons tester.

Ensuite, nous « agissons » en effectuant une action (ou une série d'actions) nécessaire pour reproduire la façon dont l'utilisateur pourrait interagir avec notre application. Une autre façon d'y penser est que « l'acte » est l' **action** que nous testons.

Mais bien sûr, il ne sert à rien de charger une page, de saisir des données et de cliquer sur "Soumettre" sans dire à nos tests ce que nous attendons. Souhaitons-nous que Submit entraîne un popup ou un chargement de page ? C'est là qu'intervient 'assert' : nous indiquons exactement à notre fichier de test le résultat que nous attendons, en fonction des actions des étapes précédentes.

### 3. Présentation de notre exemple d'application

Pour les besoins de cette démo, j'ai créé une petite application "MadLibs" avec React. Pour ceux qui ne connaissent pas MadLibs en tant que concept, il s'agit d'écrire une courte histoire avec quelques lacunes, remplie de mots saisis par l'utilisateur. Le hic ? L'utilisateur ne sait pas comment les mots seront utilisés ! Ils entrent les mots en fonction de ce qui est nécessaire ("animal", "nourriture", etc.) puis l'auteur les assemble de manière à produire des histoires vraiment étranges et merveilleuses.

* Exemple d'application MadLibs sans Cypress : <https://github.com/AJMcDee/Cypress_Demo_BaseApp>

Dans notre application, nous demandons dix entrées à notre utilisateur. Une fois qu'ils sont tous entrés, ils peuvent soumettre les réponses et une petite histoire apparaît avec leurs propres mots. C'est ça. C'est toute l'application.

Avec cet exemple simple, nous pouvons démontrer certaines fonctionnalités de base de Cypress et créer un point de départ pour votre exploration des tests E2E frontend.

N'oubliez pas que peu importe quel composant est chargé, quelle fonction est appelée, quel état est utilisé ou quoi que ce soit à voir avec le code. Tout ce que nous testons, c'est ce que l'utilisateur peut (ou ne peut pas) faire.

## Faire fonctionner Cypress

Une fois que vous avez cloné l'application localement, `cd`exécutez -la `npm install `et `npm start`. Cela devrait démarrer l'application React, et vous pouvez essayer ma petite histoire MadLibs ! Amusement!

Mais bien sûr, nous ne sommes pas seulement là pour jouer avec mes talents d'écrivain expert. Nous sommes ici pour apprendre Cypress ! Retournez au terminal et entrez ce qui suit depuis le répertoire du projet.



```javascript
npm install --save-dev cypress
npx cypress open
```

Cette deuxième commande est la façon dont vous continuerez à accéder à cypress, bien que vous puissiez également envisager de l'ajouter en tant que script npm supplémentaire dans votre fichier `package.json`.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "e2e-test": "cypress open"
  },
```

Maintenant, si je veux exécuter cypress, je peux l'utiliser `npm run e2e-test`dans le terminal. En fin de compte, cependant, c'est à vous de décider si vous franchissez cette étape supplémentaire et, le cas échéant, comment vous souhaitez nommer votre script.

Exécutons cette commande et voyons ce qui se passe…

Tout d'abord, une nouvelle fenêtre de cyprès s'ouvrira, vous présentant quelques tests préchargés que vous pouvez utiliser comme référence.

![Capture d'écran 2021-09-12 à 15.31.16.png](https://blog.openreplay.com/static/4eff36ec0ed66503fdccaf22ad2d21e3/43a06/img1.png)

Cypress a également pris la liberté de créer un dossier appelé `cypress`dans votre projet, qui comprend de nombreux exemples auxquels vous pouvez vous référer. Nous n'aurons pas besoin de ces exemples aujourd'hui, c'est donc à vous de les conserver pour votre propre référence ou de les supprimer.

### Notre page se charge-t-elle dans Cypress ?

La première étape du test dans Cypress consiste à charger votre application. Heureusement, c'est assez simple ! Tout d'abord, nous devons créer un nouveau dossier de test.

`mkdir ./cypress/integration/0-my-madlibs`

Dans ce dossier, créez un nouveau fichier avec la fin `.spec.js`: cela signale à Cypress qu'il s'agira d'un fichier en cours d'exécution de tests, et il apparaîtra automatiquement dans l'interface graphique de Cypress.

![Capture d'écran 2021-09-12 à 15.37.17.png](https://blog.openreplay.com/static/db368726a260243be68fd662951ce6bd/daafc/img2.png)

Notre fichier de test est actuellement là sans rien faire, alors connectons-nous à notre application. Tout d'abord, nous devons démarrer l'application (si elle n'est pas encore en cours d'exécution) en utilisant `npm start`. Une fois chargé, nous devrions voir nos Super Cool MadLibs(TM) dans le navigateur à `http://localhost:3000`.

Nous devons maintenant mettre à jour notre fichier pour inclure notre chargement de page :

```
describe('The MadLibs Main Form', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000')
    })
})
```

Parlons de ce qui se passe ici :

**`describe`** est utilisé pour regrouper les tests qui s'emboîtent, et il prend deux arguments :

1. une chaîne où vous décrivez littéralement ce qui est testé (par exemple, composant/page)
2. une fonction de rappel qui devrait inclure votre configuration de test et vos assertions

**`it`**est ce que nous utilisons pour indiquer nos tests individuels, et il faut à nouveau deux arguments :

1. une chaîne qui décrit ce que le test doit accomplir
2. une fonction de rappel avec les étapes d'un test individuel

**`cy.visit`**est une commande cypress qui indique au navigateur d'aller à l'adresse désignée

Pour le moment, cela ne *teste* rien. Nous sommes encore dans la phase « d'arrangement » à ce stade. Néanmoins, il est important de savoir que cela fonctionne. Accédez à l'interface graphique de Cypress et cliquez sur le test. Il devrait ouvrir une nouvelle fenêtre de navigateur et afficher la page.

![Capture d'écran 2021-09-12 à 15.55.34.png](https://blog.openreplay.com/static/b11b254e68f552cfa7e5db2ba48c2f63/829d2/img3.png)

Notez que le test sera officiellement "réussi", même si nous n'avons rien affirmé, car rien ne s'est mal passé. En d'autres termes : **les tests Cypress réussissent toujours jusqu'à ce qu'ils échouent, et non l'inverse.**

Pour nous assurer que notre formulaire se charge réellement, nous voudrons peut-être vérifier que la barre de navigation, l'en-tête, le tableau et le bouton sont tous là.

```
describe('The MadLibs Main Form', () => {
    it('loads successfully', () => {
        // ARRANGE
        cy.visit('http://localhost:3000')

        // ACT
        // None: Loading only

        // ASSERT
        // Navbar
        cy.get('nav')
            .should('be.visible')
            .within(() => {
                cy.get('h1')
                    .should('contain.text','My Cool MadLibs')
                cy.get('a')
                    .should('be.visible')
                    .should('contain.text', 'Exit Site')
            })

        // Form
        cy.get('h2').should('contain.text','Enter Your Choices!')
        cy.get('table').should('be.visible')
        cy.get('tr').should('have.length', 10)
        cy.get('button')
            .should('contain.text','Complete')
            .should('be.disabled')
    })
})
```

Cypress utilise jQuery sous le capot, mais même si vous n'avez jamais utilisé jQuery auparavant, la `.get`méthode devrait être assez facile à comprendre, car elle utilise la même syntaxe que les sélecteurs CSS. En d'autres termes, il utilise une combinaison de JavaScripts `.querySelector`et `.querySelectorAll`: il interroge en fonction du sélecteur et si un élément est renvoyé, alors seul cet élément est traité. Si plusieurs éléments sont renvoyés, une collection est alors traitée.

Une fois que vous avez `.get`l'élément HTML que vous recherchez, vous pouvez ensuite enchaîner plusieurs assertions. Vous remarquerez peut-être également qu'une fois que nous avons trouvé un élément unique, nous pouvons également limiter nos assertions à l'intérieur de cet élément en utilisant `.within`et une fonction de rappel, comme nous le faisons ci-dessus pour notre barre de navigation.

Ici, nous avons rendu le test plus long et plus détaillé que nécessaire, afin de démontrer une gamme d'affirmations de base à notre disposition :

* `.should('be.visible')`: L'élément est visible par l'utilisateur.
* `.should('contain.text','My Cool MadLibs')`: L'élément contient le texte saisi en deuxième argument.
* `.should('have.length', 10)`: Le nombre d'éléments renvoyés doit être 10.
* `.should('be.disabled')`: Cet élément doit être désactivé (c'est-à-dire non cliquable).

Bien sûr, il existe une myriade d' [autres assertions](https://docs.cypress.io/guides/references/assertions) disponibles à partir desquelles nous pouvons appeler.

## Relecture de session open source

Le débogage d'une application Web en production peut être difficile et prendre du temps. [OpenReplay](https://github.com/openreplay/openreplay) est une alternative open-source à FullStory, LogRocket et Hotjar. Il vous permet de surveiller et de rejouer tout ce que vos utilisateurs font et montre comment votre application se comporte pour chaque problème. C'est comme si l'inspecteur de votre navigateur était ouvert tout en regardant par-dessus l'épaule de votre utilisateur. OpenReplay est la seule alternative open source actuellement disponible.

![OuvrirReplay](https://blog.openreplay.com/static/ae9c963425a758f4f376b11469501d8c/77bb7/replayer.png)

Bon débogage, pour les équipes frontend modernes - [Commencez à surveiller votre application Web gratuitement](https://github.com/openreplay/openreplay) .

### Ajout de quelques actions

Maintenant que nous savons comment organiser (par exemple charger la page) et affirmer (par exemple vérifier que les choses sont comme nous le voulons), ajoutons sans doute la partie la plus cool de Cypress : AGIR !

Nous allons demander à Cypress de remplir notre formulaire et de nous assurer que notre histoire correspond exactement à ce que nous voulons qu'elle soit. Faisons des MadLibs automatisés !

Tout d'abord, est-ce que notre bouton s'active lorsque tous nos champs sont remplis ? Il est important de séparer ce test, car s'il échoue à l'avenir, nous pouvons immédiatement identifier qu'il y a un problème avec notre bouton, et non avec nos résultats.

```
it('activates the button when the form is filled in', () => {
        //ACT
        cy.get('input#animal').type('platypus')
        cy.get('input#action').type('caressing')
        cy.get('input#object').type('vacuum cleaner')
        cy.get('input#food').type('popcorn')
        cy.get('input#name').type('FLANJESUA THE ADORABLE')
        cy.get('input#drink').type('chocolate milk')
        cy.get('input#number').type('8')
        cy.get('input#adjective').type('flowery')
        cy.get('input#city').type('Copenhagen')
        cy.get('input#mood').type('inconsolable')

        //ASSERT
        cy.get('button').should('be.enabled')

    })
```

En sauvegardant ceci (ou votre propre choix d'entrées) et en observant le coureur Cypress exécuter le test, vous verrez le formulaire se remplir ! COOL!

Étant donné que la plupart des formulaires incluent également d'autres champs, voici d'autres actions que vous pouvez effectuer :

* `.check()`ou `.uncheck()`pour les cases à cocher
* `.select('Germany')`pour les éléments sélectionnés. Par exemple, cela sélectionnerait l'option 'Allemagne'.
* `.trigger('change')`pour déclencher un événement sur un élément DOM. Par exemple, cela pourrait être la première étape pour déclencher un changement de valeur sur une entrée de curseur.

Maintenant, faisons la partie amusante et cliquez sur notre bouton ! Plus de théâtre, s'il vous plait !

```
it('shows the completed story with our input data',() => {

    //ARRANGE
    const finalStory = `Once upon a time in Copenhagen, FLANJESUA THE ADORABLE got out of bed to start their day. To their surprise, sitting at the end of their bed was an enormous platypus caressing the vacuum cleaner.FLANJESUA THE ADORABLE felt so inconsolable, they knocked over the glass of chocolate milk on their bedside table.Suddenly, the platypus spoke..."You must answer 8 flowery questions, or I will steal your soul... and your popcorn!"`

    //ACT
    cy.get('button').click()

    //ASSERT
    cy.get('div.results').should('contain.text', finalStory).within(() => {
        cy.get('h2').should('contain.text', 'Results')
    })

})
```

Il est important de noter que les deux autres tests ici ont également fait partie de l'étape « Arranger » pour nous. Nous avons mis en place l'environnement dont nous avons besoin pour agir et nous affirmer pour notre histoire finale. En les conservant dans le même fichier de test, nous n'avons pas besoin de réorganiser le chargement de la page, par exemple.

Ici, on « agit » en courant `click()`sur notre bouton. Après cela, nous "affirmons" en vérifiant que notre histoire finale (ici enregistrée dans une constante) s'affiche correctement, puis, juste pour le plaisir, nous nous assurons que notre en-tête a également changé.

Voyons ce que Cypress a à dire à ce sujet…

![Capture d'écran 2021-09-15 à 17.45.18.png](https://blog.openreplay.com/static/d362aa5125dd80068d4477f6aec74a2c/2c042/img5.png)

Merveilleux! Tous les tests passent !

Bien sûr, cliquer n'est pas le seul événement de souris que nous pouvons déclencher, en voici quelques autres :

* `.dblclick()`
* `.hover()`
* `.rightclick()`

Il existe une grande variété de commandes disponibles, bien sûr. Pour une liste complète, [reportez-vous à la documentation ici](https://docs.cypress.io/api/commands) .

### Merci! Les bases ont du sens maintenant ! Et après?

La belle partie de Cypress est, bien sûr, de regarder une énorme suite de tests s'exécuter ensemble. Si nous " cassons " notre application, dans cet exemple en modifiant notre histoire, en gâchant l'état de notre bouton désactivé ou en important accidentellement trop de champs, nos tests échoueront et nous pourrons savoir immédiatement que nous avons foiré quelque chose. En utilisant une dénomination descriptive de nos tests et en les séparant en étapes distinctes, il devrait également être clair *ce que* nous avons gâché.

Si vous souhaitez étendre votre utilisation de Cypress, alors bien sûr, les docs sont un bon point de départ, et je recommanderais également de rechercher des commandes supplémentaires qui peuvent aider à une approche DRY, par exemple en utilisant `.each()`pour parcourir les assertions. La majeure partie de Cypress peut être apprise en l'appliquant à une application frontale existante et en testant simplement les limites de comment et sur quoi vous pouvez agir et affirmer.

Utilisé de manière appropriée, Cypress peut constituer la base d'une approche TDD du développement frontal. Imaginez un monde dans lequel nous décidons de ce que nous voulons que notre nouvelle fonctionnalité fasse et à quoi elle ressemblera, décrivons-la dans Cypress en étapes distinctes, puis observons de plus en plus de tests passer au fur et à mesure que nous la développons. Une telle approche pourrait nous aider à planifier nos fonctionnalités avec plus de soin et à rester concentrés sur nos objectifs lors de leur développement.

Cypress n'est pas seulement une chose super cool à regarder exécuter (ce qu'il est DÉFINITIVEMENT), mais aussi un outil essentiel pour rationaliser vos tests, détecter les problèmes tôt et économiser du temps et de l'argent aux testeurs manuels qui cliquent sur votre application. Commencez dès aujourd'hui en couvrant les bases, et peut-être verrez-vous bientôt plus d'informations sur l'approfondissement des tests Cypress !