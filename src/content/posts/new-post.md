---
template: blog-post
title: Comment rapporter un bug sur JIra
slug: /rapport-bug-sur-jira
date: 2021-08-09 07:53
description: Comment rapporter un bug sur JIra
featuredImage: /assets/jira.png
---
L'utilisation d'un outil de rapport de bogues Jira aide les développeurs et leurs équipes à enregistrer et à suivre l'état des bogues dans leurs applications du début à la fin. Vous pouvez ajouter une description de bogue, des pièces jointes, identifier les versions affectées, les affecter aux bons membres à corriger et attribuer des niveaux de gravité, tout en ayant un aperçu unique de tout dans le backlog.

Jira vous permet de personnaliser les wokflows en fonction de vos besoins. Vous pouvez ajuster et façonner votre flux comme vous le souhaitez afin de pouvoir suivre vos problèmes du début à la fin en fonction de vos processus. Au cours des 15 dernières années, les gens ont utilisé Jira avec succès de nombreuses manières, de la gestion de projet agile au suivi des tickets du centre de services et même à l'écriture. Cependant, l'une des applications les plus populaires de Jira, et notre préférée, sera toujours le suivi des bogues.

Voici tout ce que vous devez savoir pour créer un flux de bogues dans Jira et démarrer avec un outil de rapport de bogues Jira.

 

 

### Flux de travail

 

### **![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Library-jira_workflow_awesome-11-1-1024x390.png)**

 

Le flux de travail est le schéma suivi par vos projets. Il s'agit d'un ensemble de statuts et de transitions qu'un problème traverse au cours de son cycle de vie. Le flux de travail est l'environnement dans lequel le problème évolue jusqu'à ce qu'il soit considéré comme résolu, ou dans notre exemple, **les étapes qu'un bogue signalé traverse avant d'être considéré comme résolu** .

Pour créer un workflow, vous devez définir deux composants principaux : vos statuts et vos transitions. Ceux-ci déterminent les différentes étapes et chemins autorisés par lesquels le bogue peut passer.

 

 

### Types de flux de travail

 

**![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/42f6c15bcf3e3e4bbdd849b7286355a2.jpg)**

 

**Un flux de travail inactif**  est un flux de travail qui n'est pas utilisé et auquel aucun projet n'est actuellement affecté. Vous pouvez modifier les statuts et les transitions d'un workflow à ce stade.

**Un flux de travail actif**  est un flux de travail en cours d'utilisation et auquel un ou plusieurs projets sont actuellement affectés. Vous ne pouvez pas modifier les statuts ou les transitions d'un flux de travail à ce stade, car cela affecterait les projets qui lui sont affectés.

 

 

### Statuts

 

**![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Status2.jpg)**

Un statut représente l'état actuel d'un problème dans un workflow spécifique. Un problème ne peut avoir qu'un seul statut à un moment donné. Dans notre cas, vous devez définir toutes les étapes par lesquelles passe un bogue lorsqu'il passe par votre flux de travail. Cela dépendra de facteurs tels que votre méthodologie de gestion de projet, les membres de votre équipe et la structure de votre entreprise.

Un ensemble commun de statuts pour la correction des bogues sont ceux indiqués ci-dessus. **"En attente"**  est le premier état d'un bogue après son signalement. **"En cours"**  indique que le bogue est en cours de correction, où le bogue à corriger est choisi en fonction du niveau de gravité, puis est attribué à l'équipe/personne responsable de sa correction. Une fois le bogue résolu, il aurait un  statut **"Corrigé"** , qui agit généralement comme le backlog de l'équipe d'assurance qualité. **"En cours d'examen"** signifie qu'il est en cours de traitement par QA, tandis que **"Approuvé"** signifie que le correctif de bogue a passé l'examen. **"Déployé"**signifie que le correctif de bogue est en production. Gardez à l'esprit qu'un problème peut passer par différents statuts plusieurs fois jusqu'à ce qu'il atteigne son statut final, qui est **"Fermé"** .

Maintenant que vos statuts sont définis, vous devez définir les chemins que peut emprunter le bug pour passer d'un état à un autre, qui sont les transitions.

 

 

### Transitions

 

**![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Jira-Workflow-3.jpg)**

 

Une transition est un lien entre deux états. Pour qu'un problème passe d'un état à l'autre, une transition doit exister. Alors qu'un statut représente l'état d'un bogue, une transition est l' *action* qui le déplace vers et depuis cet état. Les transitions ne peuvent se déplacer que dans une seule direction, donc pour créer un chemin bidirectionnel, vous devrez créer deux transitions différentes entre deux statuts.

Dans notre exemple, la première action qui se produit dans le cycle de vie d'un bogue est qu'il est signalé, donc **"Signaler un bogue"** est la première transition, et il déplace le bogue vers le statut "En attente". Selon la gravité du bogue, les bogues signalés qui sont « En attente » peuvent soit rester « En attente », passer à « En cours », ou être rejetés et considérés comme « Fermés ». L'action, ou la transition, qui déplace le bogue vers "En cours" consiste à le **"Corriger"** , tandis qu'une transition **"Fermer le problème"** le fait passer au statut "Fermé". Un bogue peut être désamorcé de "En cours" à "En attente" si vous décidez de le **"Retarder"** , l'action qui relie ces deux statuts. Pendant ce temps, un bogue passe de "En cours" à "Corrigé" avec un **"Soumettre le correctif"**transition lorsqu'il est envoyé à votre équipe QA. Lorsqu'ils sélectionnent un bogue à **« Réviser »** , la transition suivante, le statut du bogue devient « En cours de révision ». À partir de ce statut, le bogue peut soit revenir au statut "En cours" s'il y a un **"Problème trouvé"** par QA, ou si le correctif du bogue a **"Passé QA"** , il peut passer au statut "Approuvé". Une fois "Approuvé", lorsque vous **"publiez"** le correctif de bogue, il passe au statut "Déployé". S'il y a un **"Problème trouvé"** après le déploiement, le bogue revient à l'état "Corrigé" pour que QA l'évalue à nouveau. Enfin, le bogue passe de "Déployé" à "Fermé" avec une transition **"Fermer le problème" .**

 

 

### Types d'édition de flux de travail

 

**![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/workflow_designer_anno-status.png)**

 

**Workflow Designer** est un outil très simple et facile à utiliser qui vous aide à visualiser la disposition et le déroulement de votre processus. Il vous permet d'ajouter les statuts et de les lier entre eux à l'aide des transitions par glisser-déposer. Lorsqu'un statut est sélectionné, vous pouvez modifier ses propriétés, le renommer ou le supprimer.

**Le mode texte** est un moyen plus avancé d'éditer et de travailler avec des flux de travail. Vous pouvez également utiliser le mode texte pour ajouter, supprimer ou modifier des étapes et des transitions.

 

 

### Publier

 

**![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/red_nerd_view_issue_anno1-1024x543.png)**

 

Un problème est un élément de votre projet. Selon la façon dont vous ou votre entreprise utilisez Jira, le problème peut représenter une tâche de projet, un ticket d'assistance, un formulaire de demande ou à peu près tout ce que vous souhaitez qu'il représente. Dans notre exemple ici, un problème représente un bogue d'application mobile.

Lorsque vous créez un problème, vous devez ajouter toutes les informations pertinentes, telles qu'un résumé, une description, un type, une priorité, une résolution, etc. Vous pouvez même joindre des documents, des images, des notes vocales et des vidéos. Cela permettrait aux membres de votre équipe de comprendre le bogue en détail et de prioriser ceux sur lesquels travailler en premier.

 

 

### Résolutions

 

**![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/tumblr_mzmp2sFajD1rdzuduo5_500.gif)**

 

Les statuts sont classés en deux types : non résolus et résolus. Lorsqu'un problème se voit attribuer une résolution, il est alors considéré comme résolu, sinon il est considéré comme non résolu par défaut.

Par exemple, **les statuts non résolus** seraient lorsque le bogue est "En attente" ou "En cours" tandis que les **statuts résolus** seraient "Déployé" ou "Fermé".

 

 

### Créer un problème

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/create-an-issue.jpg)

 

Lors de la création d'un problème, vous devez sélectionner le projet auquel vous souhaitez ajouter ce bogue, ainsi que le type de problème. Pour les rapports de bogues, nous choisirons le type de problème "Bug", mais jetons un coup d'œil aux différents types de problèmes disponibles.

 

 

### Types de problèmes

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Issue-Types.jpg)

 

Chaque application Jira est livrée avec ses types de problèmes, en fonction de ce que vous devez accomplir. Vous pouvez également créer vos propres types de problèmes.

Certains types de problèmes Jira par défaut sont :

* **Tâche :**  quelque chose qui doit être fait/accompli
* **Sous-tâche :** sous- ensembles ou tâches plus petites au sein d'une tâche plus vaste
* **Histoire :** Une fonctionnalité sur laquelle vous devez travailler
* **Bogue :**  une erreur ou un défaut dans une certaine fonctionnalité
* **Épique :** un gros travail avec de nombreux problèmes inclus
* **Incident :** un incident signalé dans le cadre du processus
* **Demande de service :** demande d'un utilisateur pour un service/une assistance
* **Changement :** un changement dans les technologies ou fonctionnalités actuelles
* **Problématique :** Suivi des causes d'incidents

 

 

### Détails du problème

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/create-a-defect.jpg)

 

Lorsque vous créez un problème, vous devez entrer des détails. Ces informations changent en fonction du type de problème.

Pour les bogues, les informations que vous devez saisir sont :

* **ID :** Attribué automatiquement par Jira.
* **Résumé :**  Une description rapide du bogue.
* **Description :**  Plus la description est détaillée, plus il est facile d'identifier la solution.
* **Priorité :** le niveau de gravité du bogue.
* **Environnement :**  éléments tels que l'appareil, le système d'exploitation, l'autonomie de la batterie, la connectivité réseau, etc.
* **Pièce jointe :**  toutes les captures d'écran, documents, notes vocales ou enregistrements vidéo pouvant aider à identifier et à corriger le bogue.
* **Responsable :**  la personne chargée de gérer ce problème. (Sera discuté plus en détail ensuite)
* **Statut :** créé automatiquement lors de la création en fonction de votre flux de travail. Par défaut, Jira attribue au début un problème comme "Nouveau" ou "À faire".

 

 

### Cessionnaires

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/145851-young-avatar-collection.png)

Jira vous permet d'affecter une ou plusieurs personnes à des problèmes pour y travailler, comme l'affectation d'un développeur pour corriger un certain bogue par exemple. Vous pouvez également automatiser cette étape en lui faisant changer automatiquement les destinataires lors du passage d'un statut à un autre. Ainsi, vous pouvez le faire changer le membre de l'équipe affecté sur le rapport de bogue d'un développeur à un membre QA lors de la transition vers la partie révision du processus par exemple.

Il vous permet également de définir des autorisations sur qui peut faire passer un problème d'un certain statut à un autre. Ainsi, dans notre exemple, vous autoriseriez le chef d'équipe qui détermine sur quel bogue travailler en fonction de l'urgence et de la gravité à pouvoir faire passer un problème de **« En attente »** à **« En cours »**  et affecter les membres de l'équipe appropriés au travail. sur eux. Une fois cela fait, les membres de l'équipe seraient autorisés à déplacer le bogue vers **"Corrigé"** . À ce stade, seuls les membres de l'équipe d'AQ seraient autorisés à déplacer le bogue de **"Corrigé"** à **"En cours d'examen"** , puis à " **Approuvé"** , s'il réussit le test, ou à le renvoyer pour qu'il soit à nouveau corrigé.

 

 

### Activité

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Comments.jpg)

 

Chaque numéro a une section d'activité. Cela inclut le journal de travail et l'historique de toutes les activités qui se sont produites avec ce problème. Étant donné que chaque problème peut être attribué à plusieurs personnes, la section des commentaires aide les gens à collaborer sur le même problème de manière plus efficace.

 

 

### Liens

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Linking-the-defect.jpg)

 

Jira vous permet de lier plusieurs problèmes entre eux s'ils ont une sorte de relation entre eux.

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/issue-details-page.jpg)

 

Ceci est très utile en termes de rapport de bogue. Si plusieurs personnes signalent le même bogue, vous pouvez lier les problèmes ensemble, au lieu d'avoir plusieurs problèmes ouverts pour le même bogue. Si vous remarquez qu'un bogue en provoque un autre, vous pouvez également les lier afin que les développeurs comprennent leur relation et donnent la priorité à celui qu'il faut corriger en premier.

 

 

### Rapports

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Reports.jpg)

 

Jira vous aide à générer de nombreux types de rapports différents pour vous donner un meilleur aperçu de vos problèmes.

* **Rapport sur l'âge moyen :** affiche la durée/l'âge moyen des problèmes non résolus en jours.
* **Créé Vs. Rapport sur les problèmes résolus :** affiche le nombre de problèmes créés par opposition au nombre de problèmes résolus sur une période donnée.
* **Rapport de graphique à secteurs :** affiche les résultats de la recherche à partir d'un filtre de problème (ou d'un projet) spécifié dans un graphique à secteurs, en fonction d'une statistique de votre choix.
* **Rapport sur le temps de résolution :** affiche le temps moyen nécessaire pour résoudre les problèmes.
* **Rapport sur les problèmes récemment créés :** affiche la fréquence à laquelle les problèmes sont créés.
* **Rapport Grouper par niveau unique :** affiche les résultats de la recherche à partir d'un filtre de problème, regroupés par un champ de votre choix.
* **Rapport de temps depuis les problèmes :** affiche le nombre de problèmes pour lesquels le champ de date que vous avez choisi (par exemple, "Créé") a été défini à une date donnée.
* **Rapport de suivi du temps :** affiche des informations de suivi du temps sur les problèmes d'une version particulière d'un projet.
* **Rapport de charge de travail de l'utilisateur :** indique la quantité de travail allouée à un utilisateur et le temps que cela devrait prendre.
* **Rapport de suivi de la durée de la version :** affiche la progression vers l'achèvement d'une version donnée, en fonction des journaux de travail des problèmes et des estimations de temps.
* **Rapport sur la charge** de travail de la version : affiche le volume de travail restant (par utilisateur et par problème) avant qu'une version donnée ne soit terminée.
* **Rapport de graphique à secteurs de la charge de travail :** affiche la charge de travail relative des personnes affectées à tous les problèmes d'un projet ou d'un filtre de problèmes particulier.

 

 

### Exportation

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Export.jpg)

 

Vous pouvez exporter vos données Jira dans un fichier téléchargeable, soit pour les visualiser dans différents formats, soit pour les conserver en tant que sauvegarde.

Voici les données que vous pouvez exporter :

* Problèmes
* Paramètres des utilisateurs et des groupes d'utilisateurs
* Émettre des pièces jointes, des avatars d'utilisateurs et des logos de projet

 

 

### Importer

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/Import.jpg)

 

Comme vous vous en rendez probablement compte maintenant, le processus de création de problèmes peut certainement prendre du temps. Jira vous permet d'importer une grande quantité de problèmes à partir d'un fichier CSV. Cela peut être très utile si vous migrez à partir d'un autre outil ou si vous souhaitez compiler tous les problèmes dans un seul fichier pour plus de facilité, puis les ajouter tous ensemble.

Disons que votre application mobile est en phase de test bêta et que vous avez des centaines de testeurs. Chaque fois qu'un testeur trouve un bogue, il doit arrêter l'application, puis se diriger vers Jira pour créer un problème ou se diriger vers une feuille Google Excel partagée que vous avez configurée, ajouter toutes les informations sur le bogue qu'il a trouvé, et à la fin de la journée, vous importez tous les bogues signalés dans Jira.

Il y a certainement beaucoup de problèmes avec cette approche. Ce n'est pas très efficace et vous devrez travailler sur la définition des autorisations pour vos testeurs, que ce soit sur votre projet Jira ou sur Google Sheets. De nombreuses données sur l'environnement de l'appareil pourraient être difficiles à trouver ou prendraient beaucoup de temps aux testeurs pour le faire. C'est pourquoi il est fortement recommandé aux développeurs d'intégrer un outil de rapport de bogues Jira.

 

 

### Outils de signalement de bogues

 

![Outil de rapport de bogues JIRA](https://instabug.com/blog/wp-content/uploads/2017/08/screen3.png)

 

Pour gérer les bogues, vous devez d'abord les trouver à l'aide d'un outil de rapport de bogues Jira. Les outils de signalement de bogues vous aident à trouver et à enregistrer les bogues. Ils peuvent également vous donner un aperçu d'informations plus détaillées auxquelles vous n'avez peut-être pas accès. Cela pourrait vous aider à identifier la cause des problèmes de manière plus rapide et plus efficace.