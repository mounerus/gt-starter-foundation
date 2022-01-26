---
template: blog-post
title: Pourquoi il est important de tester son application web ou mobile
slug: /tester-son-application-web-et-mobile
date: 2022-01-26 21:08
description: QA pourquoi il est important de tester son application web ou mobile
featuredImage: /assets/qa_web.jpeg
---
Cet article se concentrera sur les tests pour les applications qui s'exécutent sur le Web, et non sur les applications logicielles générales, de sorte que seules les méthodologies et techniques de test liées au Web seront mentionnées.

# 1. Pourquoi tester ?

L'écriture de tests automatisés pour les applications Web présente de nombreux avantages, en voici quelques-uns ;

* Vous êtes plus productif car vous n'avez pas à passer du temps à tester manuellement le code vous-même.
* Vous pouvez apporter des modifications au code sans vous soucier si quelque chose est cassé (tant que les tests réussissent).
* Les tests fournissent une documentation sur ce que votre code est réellement censé faire.

Ce n'est pas un défenseur du développement piloté par les tests (TDD) car je pratique en fait le développement piloté par le comportement (BDD), mais vous pouvez vous abonner à l'un et continuer à écrire des tests, ou même un peu des deux.

# 2. Tests de la boîte noire et de la boîte blanche

Commençons par la chose la plus facile à visualiser. Ce ne sont probablement pas des phrases que les développeurs utiliseront couramment lorsqu'il s'agira de tester, mais c'est un bon moyen de différencier les deux types principaux.

## une. Boîte noire

Tester sans connaître le fonctionnement interne d'une application. Essentiellement, vous transmettez une entrée dans une boîte noire et vérifiez si la sortie correspond à ce que vous attendiez.

## b. Boîte blanche

Le contraire de la boîte noire, tester le code du logiciel. Le blanc est censé impliquer que la boîte est transparente, donc cela aurait dû être un test de boîte transparente, mais je suppose que le blanc est plus facile à dire.

![Pyramide des tests](/assets/unit_test.png "pyramides des tests")

# 3. Unité > Intégration > Fonctionnelle

Il existe de nombreux types de tests qu'une application Web peut avoir, mais ce sont les trois principaux tests automatisés que la plupart, sinon tous, devraient avoir.

## une. Tests unitaires

Test de boîte blanche le plus populaire parmi les développeurs, qui consiste à tester une unité de code ; une fonction, une méthode ou une classe alors qu'elle est isolée des autres parties du code. Cela teste si cette partie du code fonctionne comme il se doit, et puisqu'elle n'est pas connectée à d'autres parties si des informations externes sont requises, un *Mock* ou un *Stub* est créé.

* **Mock :** Une fausse méthode ou un objet qui simule le comportement d'un vrai. Par exemple, supposons que vous souhaitiez tester si une API externe que vous utilisez remplacera un ensemble de lettres par sa valeur numérique dans l'alphabet, vous pouvez recréer cette méthode comme une simulation, transmettre une chaîne et tester sa sortie.
* **Stub :** objet (généralement écrit à la main) qui n'est pas dynamique et qui est simplement utilisé pour fournir des données. Par exemple, si une méthode testée nécessite un nom, une adresse, une taille et un sexe dans une API pour fonctionner mais qu'elle n'a pas besoin d'être spécifique, un stub peut contenir toutes ces informations dans le fichier de test lui-même et chaque fois que le test est exécuté, il collecte ces informations, éliminant ainsi le besoin de les extraire de l'API.

Gardez à l'esprit qu'il s'agit de définitions générales et que différents frameworks de test peuvent avoir différentes variations sur ces fonctionnalités. Les frameworks pour les tests unitaires Javascript (JS) incluent ; [Jasmine](https://jasmine.github.io/) , [Moka](https://mochajs.org/) , [Tape](https://github.com/substack/tape) , [Jest](https://facebook.github.io/jest/) et bien d'autres.

## b. Essais d'intégration

La plupart des applications Web modernes ont non seulement des composants/classes qui interagissent les uns avec les autres, mais aussi une API externe, une base de données ou dépendent d'un outil tiers. Les tests d'intégration permettent de s'assurer que toutes ces connexions sont en bon état de fonctionnement. Comme les tests unitaires remplacent le besoin de tester tout ce qui est externe avec des simulations et des stubs, les tests d'intégration sont le seul moyen de le faire.

Selon le type de test d'intégration requis, le framework utilisé ici sera très probablement identique à celui utilisé pour les tests unitaires.

## c. Essais fonctionnels

Aussi connus sous le nom de tests de bout en bout (E2E), ces tests sont principalement des tests de boîte noire. Cela implique de tester ce avec quoi l'utilisateur va réellement interagir, donc les entrées qu'il va utiliser, les boutons sur lesquels il clique et ce qu'il voit à l'écran. Pour ce faire, un faux navigateur est manipulé par le framework de test. Les tests fonctionnels ont également tendance à vérifier les performances du site sous différentes connexions réseau et matériels.

Certains développeurs placent des tests fonctionnels sous intégration car ils doivent vérifier les services externes et les relations entre les composants pour que l'application fonctionne comme souhaité, mais j'aime les garder séparés. Les frameworks de test fonctionnel JS incluent [PhantomJS](http://phantomjs.org/) ; [Jasmine](https://jasmine.github.io/) , [Protractor](http://www.protractortest.org/#/) , [Nightwatch](http://nightwatchjs.org/) , [CasperJ](http://casperjs.org/) S, [Nemo](http://nemo.js.org/) et bien d'autres.

# 4. Élaboration de la couverture de test

Le terme « couverture des tests » englobe en fait la couverture des trois tests décrits ci-dessus. Lorsque vous entendez un développeur dire quelque chose comme "couverture de test à 100 %", il fait très probablement référence à la \_couverture du code\_. Il existe plusieurs façons de déterminer la couverture du code, mais deux principales, la couverture des branches et des instructions. Il existe également des outils pour calculer la couverture, mais je n'en ai jamais utilisé personnellement auparavant, donc je ne sais pas à quel point ils sont bons.

## une. Couverture des succursales

Les branches sont les options possibles d'un point de décision, donc si les déclarations, les boucles, les commutateurs et ainsi de suite. La couverture des branches consiste à tester toutes les branches possibles dans un morceau de code. Ainsi, une instruction **if** sans **else if** aura deux branches à tester. Si une branche a des tests, cela équivaut à une couverture de code de 50 % et si les deux branches ont des tests, c'est 100. [Cette vidéo Udacity](https://www.youtube.com/watch?v=JkJFxPy08rk) fait un bon travail pour l'expliquer.

## b. Couverture du relevé

Bien que la couverture des branches couvre davantage de scénarios que la couverture des instructions, il s'agit de la méthode de calcul de couverture préférée de la plupart des développeurs. La couverture des instructions vérifie si chaque lien de ce qui est testé est touché par le test. Donc encore une fois pour une instruction **if** sans **else if** si un test est écrit pour le **if** et un pour le **else** , alors toutes les lignes du code ont été touchées, ce qui équivaut à une couverture de test de 100%. Cependant, si cette même instruction **if** n'a pas d'autre écrit, cela signifie écrire un test pour le **if** touchera toutes les lignes de code, mais l'invisible **else** n'a pas été testé, donc ce n'est pas vraiment une couverture de test à 100%. C'est pourquoi la branche est meilleure.[Cette vidéo Udacity](https://www.youtube.com/watch?v=9PSrhH2gtkU) fait un bon travail pour l'expliquer.

# Conclusion

Alors pour répondre à la question de cet article, faut-il écrire des tests ? Eh bien, je suppose que c'est la personne qui prend les décisions sur votre lieu de travail concernant le type de produit sur lequel vous travaillez, mais la façon dont l'industrie évolue, on s'attend à ce que la plupart des développeurs frontaux aient une certaine expérience des tests (principalement des tests unitaires ). Mais quoi que vous décidiez de faire, j'espère que cet article vous a aidé à vous informer d'une manière ou d'une autre sur les tests et le type de tests à effectuer, si ou quand vous décidez de le faire.