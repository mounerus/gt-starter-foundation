---
template: blog-post
title: " le behavior driven development (BDD) "
slug: /behavior-driven-development-test
date: 2021-06-11 08:40
description: Apprenez le behavior driven development (BDD) test
featuredImage: /assets/bdd.png
---
Si vous cherchiez un moyen de rendre vos tests de logiciels accessibles à tous les membres de l'équipe, vous avez probablement rencontré des frameworks de test BDD.  

Il existe une variété de frameworks BDD disponibles sur le marché qui fonctionnent avec différents langages de programmation. Cet article donnera un aperçu des tests BDD, ainsi que certains des frameworks les plus populaires à prendre en compte par votre équipe.   

## Qu'est-ce que BDD ? 

> Le développement piloté par le comportement (BDD) est un processus de développement logiciel agile qui utilise un langage métier ou axé sur l'utilisateur pour décrire le comportement d'une application. Cette méthode simplifie la collaboration entre les équipes de développement, de test et de produit, garantissant ainsi une moindre perte de traduction lors du développement logiciel. 

BDD peut être utilisé pour une acceptation automatisée pendant votre cycle de test continu. [Intégrer BDD à votre](https://www.perfecto.io/webinars/bdd-worth-it-considerations-advanced-test-automation)  processus de test continu aidera votre équipe à donner aux parties prenantes des commentaires rapides et faciles à comprendre sur le fonctionnement de votre application.   

## Qu'est-ce que le cornichon ? 

La plupart des tests BDD sont écrits dans un langage de programmation lisible par l'entreprise appelé Gherkin, qui décrit le comportement de l'entreprise sans entrer dans les détails de sa mise en œuvre. Les frameworks qui n'utilisent pas Gherkin utilisent des langages spécifiques au domaine (DSL) non Gherkin qui ont des fonctionnalités de type BDD. 

Gherkin est décomposé en une construction de langage Given-When-Then : 

* Étant donné : le contexte, comme l'inscription à un essai gratuit. 
* Quand : Une action qui se produit en raison du contexte précédemment donné, comme remplir un formulaire « Essai gratuit ». 
* Ensuite : le résultat, par exemple une invite à créer un compte "Essai".   

En utilisant cette répartition, les scripts Gherkin relient le concept humain de cause à effet au concept d'entrée/processus/sortie trouvé dans le développement et les tests de logiciels. En plus de refléter les processus métier et utilisateur naturels, Gherkin est également basé sur TreeTop Grammar, qui existe dans plus de 35 langues. Par conséquent, les utilisateurs peuvent écrire des scénarios de test Gherkin en langage clair.  

## Avantages des tests BDD 

Cet article a déjà mentionné quelques avantages majeurs des tests BDD, tels que sa perspective axée sur l'entreprise, la simplicité d'écriture des tests Gherkin dans un anglais simple et sa capacité résultante à aider à accroître la collaboration entre les équipes.  

Les autres avantages importants des tests BDD incluent : 

* **Activation du test de décalage vers la gauche.** BDD se produit généralement aux premières étapes du cycle de développement logiciel comme point de départ pour le développement piloté par les tests de niveau inférieur, ou TDD. La capacité du développeur à tester dès les premières étapes du développement logiciel fait de BDD une excellente option pour les entreprises qui cherchent à se déplacer vers la gauche. 
* **Facile à maintenir.** Étant donné que le framework de test BDD utilise un langage simple pour écrire des scripts de test, ces tests sont plus simples à maintenir que ceux écrits via du code. Les objectifs de test sont plus clairs, ce qui facilite la pertinence et la mise à jour des tests BDD.  
* **Offert en plusieurs langages de programmation.**  Il existe plusieurs frameworks BDD pour pratiquement tous les langages de programmation. Quelle que soit votre pile technologique de développement et de test de logiciels existante, vous pourrez trouver le framework Find BDD pour votre équipe.  

## Exemples de frameworks de test BDD 

Comme dans tout autre cas où vous cherchez à investir dans un nouvel outil, le choix du meilleur framework BDD dépend principalement des exigences spécifiques de votre organisation. Pourtant, il existe de nombreux frameworks BDD qui peuvent mieux prendre en charge votre application ou le fonctionnement de votre équipe. 

Voici quelques-uns des frameworks de test BDD les plus populaires qui devraient être sur votre radar.  

### Concombre 

Cucumber est l'un des frameworks de test BDD les plus populaires sur le marché. Écrit à l'origine dans le langage de programmation Ruby, Cucumber prend désormais en charge une variété de langages de programmation différents, notamment Java et JavaScript. Cucumber est toujours particulièrement populaire au sein de la communauté des développeurs Ruby, car beaucoup connaissent déjà le framework et n'ont pas besoin d'apprendre un nouvel outil pour BDD. 

Certaines organisations implémentent  [Cucumber dans un framework Selenium](https://www.perfecto.io/blog/cucumber-vs-selenium)  pour permettre une automatisation fiable des tests qui met l'accent sur le langage clair. Cela permet :  

* Une compréhension partagée de la façon dont le logiciel doit fonctionner.  
* Amélioration de la collaboration entre les testeurs, les codeurs et les décideurs.  
* Tests Web automatisés sur tous les navigateurs à grande échelle.   

### Quantum 

Quantum est un framework de test BDD open source basé sur Java conçu par Perfecto. Pour les organisations qui cherchent à étendre leurs efforts d'automatisation,  [l'intégration Quantum intégrée de Perfecto](https://www.perfecto.io/integrations/quantum)  est une excellente option BDD pour les développeurs et les ingénieurs de test.  

Les tests automatisés Quantum BDD sont exécutés dans le cloud Perfecto, ce qui maintient ces exécutions stables sur des appareils Android/iOS et des navigateurs de bureau propres et sécurisés. Les utilisateurs peuvent également profiter de toutes les fonctionnalités communes de Cucumber BDD, telles que les tableaux de données, les contours de scénarios, les exemples et les arrière-plans. 

### SpecFlow 

SpecFlow est l'un des frameworks .NET BDD les plus demandés. Il existe deux versions de SpecFlow : open-source et premium, connue sous le nom de SpecFlow+. La version gratuite et open-source nécessite un exécuteur de test unitaire distinct, tel que MSTest ou Unit, pour exécuter des scénarios de test, tandis que SpecFlow + est livré avec un exécuteur adapté aux tests BDD inclus. La version premium de SpecFlow comprend également d'autres fonctionnalités, telles que les intégrations Microsoft Excel, la documentation dynamique et le support premium.  

### JBehave 

JBehave est un framework BDD de premier plan pour Java et d'autres langages JVM, tels que Groovy, Kotlin et Scala. Également connu comme l'un des frameworks BDD originaux, JBehave est particulièrement connu des développeurs et des ingénieurs de test.  

Bien qu'il offre des fonctionnalités très utiles telles que les étapes composites et les injections de paramètres pour paramétrer les tests, il est également important de noter que JBehave n'offre pas certaines fonctionnalités courantes de Gherkin. Les équipes à la recherche d'un framework BDD en langage Java ou JVM entièrement conforme ajoutent souvent Cucumber-JVM à leur liste de considérations. 

### Codeception 

Codecpetion est un framework populaire pour PHP. Bien qu'inspiré de BDD, Codeception est un framework de test complet qui effectue également des tests unitaires, des tests d'API et des tests fonctionnels, en plus des tests BDD.  

Les équipes à la recherche d'un type plus flexible de framework de test axé sur les développeurs sont généralement plus attirées par Codeception que par d'autres frameworks. 

## Pilotez les tests BDD avec Perfecto 

Bénéficiez de tous les avantages du développement piloté par le comportement (BDD) avec Perfecto. Améliorez la vitesse et la qualité à grande échelle grâce à une solution qui permet aux équipes de traduire rapidement les exigences BDD écrites dans Gherkin en étapes de test fonctionnelles que tout le monde peut comprendre, automatiser et dépanner. 

## Conclusion 

Les tests BDD sont un excellent moyen de déplacer vos tests vers la gauche et d'offrir une plus grande transparence dans votre organisation, des membres de l'équipe aux parties prenantes. Quel que soit le langage de programmation que vos développeurs ou ingénieurs de test préfèrent, il existe un framework BDD pour vous. 

Perfecto prend en charge une large gamme de frameworks BDD, permettant aux équipes d'améliorer la vitesse et la qualité à grande échelle. Combiné à d'autres  [intégrations](https://www.perfecto.io/integrations)  sur l'ensemble de la chaîne d'outils DevOps, Perfecto fait des tests d'applications un processus rapide et rationalisé.