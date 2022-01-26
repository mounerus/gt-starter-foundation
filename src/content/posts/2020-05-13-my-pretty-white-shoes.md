---
template: blog-post
title: Les 7 principes de base des tests que vous devez connaître
slug: /sept-principes-de-test
date: 2021-05-13 12:55
description: Les 7 principes de base des tests que vous devez connaître de l'ISTQB
featuredImage: /assets/sept-principe.png
---
Les tests sont une chose importante dans le développement de logiciels. Il peut également s'agir d'une activité complexe à structurer correctement et d'une manière qui favorise une efficacité maximale. En raison de cette complexité, il est toujours utile d'afficher les processus et les directives pour s'assurer qu'ils suivent les meilleures pratiques et un bon point de départ avec l'ISTQB (International Software Testing Qualifications Board) indiquant sept principes de base des tests.

**Pourquoi utilisons-nous sept principes fondamentaux de test ?**

L'application des principes de test à nos tests pourrait garantir une plus grande efficacité et améliorer la qualité de notre stratégie de test globale. Nous pouvons obtenir des résultats de test optimaux tout en gérant les tests de logiciels. Voici les 7 principes de test que nous utilisons couramment.\
**01) Les tests montrent la présence de défauts**

*"Nous ne pouvons jamais dire que notre système est exempt de défauts"*

Le plus important est qu'en tant que testeur, nous testons des logiciels pour déterminer les défauts. Nous pouvons donc être sûrs que le système fonctionne correctement. Quoi qu'il en soit, lors des tests, le logiciel ne vérifie pas entièrement qu'il n'y a aucun défaut. Les tests peuvent réduire considérablement le nombre de défauts non détectés cachés dans le logiciel, mais ils ne peuvent pas prouver que le logiciel est exempt de défauts à 100 %. De plus, si aucun défaut n'est trouvé, il n'y a aucune preuve d'exactitude.

Exemple : Supposons un téléphone portable de n'importe quelle marque, certaines fonctionnalités peuvent ne pas fonctionner avec nos attentes lorsque nous l'utilisons pendant un certain temps.

Pouvons-nous imaginer que ce genre d'entreprise de téléphonie mobile de marque commercialise son produit sans le tester pour nuire à sa réputation ?

Ainsi, les tests peuvent montrer qu'il est défectueux, mais ils ne prouvent jamais que les défauts n'en sont pas.

**02) Des tests exhaustifs sont impossibles**

*"Impossible de tout tester"*

Nous pouvons simplement dire que c'est la façon de tester notre système avec tous les

entrées (Valide ou Invalide) et pré-conditions. Un test exhaustif est impossible signifie que nous ne pouvons jamais tester chaque cas de test avec des entrées et des conditions préalables possibles. Tester l'ensemble du système peut prendre du temps, être coûteux, etc. En tant que testeur, nous devons tester les fonctions critiques de notre système et nous assurer que nous pouvons obtenir la sortie correcte de notre système. Pour ce faire, nous devons trouver des moyens plus intelligents de tester notre application. Prenons un exemple,

Exemple : la salle de sport Imagine offre un abonnement au client âgé de 16 à 60 ans. Elle dispose du formulaire de demande en ligne suivant pour obtenir l'adhésion à la salle de sport.

Formulaire de demande en ligne

· Entre 16 et 60

· Moins de 16 ans

· Plus de 60

Supposons que les clients âgés de 5, 18, 30, 58 et 65 ans remplissent le formulaire en ligne pour devenir membre, mais selon la technique de répartition par équivalence, nous ne pouvons prendre que les clients âgés de 18, 30 et 58 ans comme membres valides.

**03) Tests précoces**

*"On peut parler de l'Efficacité des tests"*

Les tests précoces vous aident à trouver les problèmes plus rapidement. Pour détecter les défauts de manière précoce, nous devons commencer les activités de test statiques et dynamiques dès que possible dans le cycle de vie du développement logiciel (SDLC). Pour améliorer les performances du logiciel, les tests doivent être commencés à un stade précoce. Cela signifie que les tests répondront à la phase d'analyse des exigences. La correction des défauts à ce stade peut aider à économiser plus de temps, d'efforts et d'argent que les étapes ultérieures.

Exemple : Résoudre les problèmes avec cette procédure est beaucoup plus facile et moins cher que de le résoudre dès que le cycle de vie du produit est terminé. Sinon, nous pouvons manquer des délais, entraînant des dépassements et nous pourrions avoir besoin de réécrire tout le domaine de la fonctionnalité.

**04) Regroupement des défauts**

*"Un petit nombre de modules contiennent la plupart des défauts"*

Dans le 'defect clustering', 80% des défauts se trouvent dans 20% des modules. Ici, la règle de Pareto de 80:20 peut être appliquée. Connaissant ce principe et si nous trouvons un défaut dans un module particulier, nous avons plus de chance d'y trouver beaucoup plus de défauts.

**05) Le paradoxe des pesticides***"Pour détecter plus de défauts, nous devons modifier les données de test"*

Si nous exécutons le même cas de test encore et encore, nous ne pourrions pas trouver de nouveaux bogues dans notre système. Pour détecter de nouveaux défauts, nous devons mettre à jour les données de test existantes, les scénarios de test ainsi que l'écriture de nouveaux tests. Je crois fermement que nos cerveaux doivent être utilisés pour la création de nouvelles solutions, n'hésitez pas à innover en vous basant sur les principes existants.

Exemple : Comment appliquer ce principe à un projet ?

Nous pouvons nous concentrer sur cinq points.

· Variation des données d'entrée

· Augmenter le nombre de points de contrôle

· Appliquer des techniques de test pour couvrir plus de scénarios

· Augmenter la durée du test

· Augmenter les récurrences de test

**06) Les tests dépendent du contexte**

*"Les tests se font différemment dans un contexte différent"*

Toutes les applications développées ne sont pas identiques. Nous devons utiliser différentes approches, méthodologies, techniques de test, types de test en fonction de l'application. Différents types de logiciels nécessitent différents types de tests. Nous ne testons jamais le site E-Commerce et l'application android de la même manière. Ce que nous testons influencera toujours notre approche.

Exemple : le système de point de vente dans un magasin de détail sera différent du test d'un guichet automatique

**07) Absence d'erreur d'erreur**

*"Se concentrer sur le besoin de l'entreprise"*

Nous devons nous concentrer sur les attentes des clients. Si le logiciel est exempt de bogues à 99 %, mais ne se concentre pas sur les besoins du client, il est alors inutilisable. Cela se produira si le système est testé pour la mauvaise exigence. Assurez-vous donc de répondre aux besoins du client. Tester signifie non seulement trouver des défauts, mais aussi tester les besoins du client. La recherche et la correction des défauts n'aident pas si la construction du système est inutilisable et ne répond pas aux besoins et aux exigences de l'utilisateur.

Exemple : Même tester complètement toutes les exigences spécifiées et corriger tous les défauts ne suffit pas si le système construit n'est pas convivial. Cela signifie qu'il ne répond pas aux attentes du client.

[](https://medium.com/@ruwanthiranasinghe1996?source=post_sidebar--------------------------post_sidebar--------------)