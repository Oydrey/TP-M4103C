# TP M4103C - Partie gestion des plannings

Notre objectif a été de proposer une gestion des plannings pour que les livreurs sachent quelles commandes ils ont à livrer.

## Membres du groupe

Goran SARRIBOUETTE - Maël FIAUDRIN - Loreena FAUCHER - Julian DESMARTIN - Valentin JANDARD

## Activités de Maël

Tout d'abord, Loreena n'ayant pas d'ordinateur portable à disposition, nous avons réalisé une partie de notre travail en commun.

Ainsi, avec Loreena nous avons commencé par réfléchir à comment nous allons mettre en place la partie de gestion des plannings afin que toute l'équipe parte sur une idée commune et puisse se répartir le travail à accomplir plus facilement. De ce fait, nous sommes allés au tableau pour s'accorder sur une maquette et un système de gestion des plannings. (Les documents issus de cette analyse sont disponible dans la dernière partie).

Une fois que nous avons validé la partie conception avec le reste du groupe, nous avons implémenté la base du projet en récupérant une version de full calendar se rapprochant de notre conception de la gestion des plannings et l'avons adapté à notre projet.

Ensuite nous nous sommes occupés de la suppression des éléments (commande et livreur)  mis dans le planning. Cela nous a prit un temps assez conséquent du fait que nous supprimions seulement l'évènement mais pas l'élément html en question.

Enfin, je me suis occupé de mettre à jour la sélection des commandes suite à une création d'association ou bien suite à la suppression de celle-ci. En effet, un livreur peut être impliqué dans plusieurs livraison mais une commande quant à elle ne devait plus être proposé pour une nouvelle livraison. Ainsi lors de la création d'une association, j'ai implémenté la suppression de la commande situé dans le select. De même, lors de la suppression d'une association placée dans le planning, j'ai implémenté le rajout de cette commande dans le select des commandes.

## Activités de Goran

  J'ai tout d'abord aidé à la phase de conception du projet. En aidant sur la disposition des différents éléments ainsi que les différentes fonctionnalités. J'ai également créer le GitHub afin d'aider à la mise en place du projet.
  
  J'ai ensuite aidé à mettre en place le calendrier full calendar ainsi qu'a construire certaines petites fonctionnalités. Je n'ai pas réalisé de fonctionnalité à part entière, j'ai surtout aidé mes équipiers à réaliser leurs fonctionnaliés. 

## Activités de Loreena

Nous avons commencé notre projet par une phase de compréhension ponctué de maquettes et de questions. Après s'être tous mis d'accord sur le sujet que nous voulions prendre, nous avons commencer à essayer de déterminer ce que nous allions faire visuellement et techniquement.

  J'étais en charge de poser les questions et de noter les informations sur une feuille dont chaque membre du groupe avait une copie afin que nous puissions prendre en compte les éléments fournis afin de réaliser notre projet. Je me suis ensuite concentrée sur la partie graphique de l'application afin de déterminer comment et où nous allions intégrer nos éléments pour la création de planning.

  N'ayant pas d'ordinateur portable, je me suis mise en binôme avec Maël afin de pouvoir aider à la réalisation technique du projet. Je faisais les recherches pour la prochaine heure de TP chez moi et j'utilisais les informations obtenues lors des cours avec Maël afin d'avancer dans le projet.

  Pour la partie technique, nous avons réalisé trop tard que la version de fullcalendar que nous avions implémentée n'était pas celle permettant de réaliser le travail le plus efficacement et facilement possible. Néanmoins, nous avons fait avec par manque de temps et de conaissances sur le sujet.

## Activités de Julian

  De mon côté j'ai commencé par récupérer les différents éléments utiles (calendrier / liste dans la barre verticale) de fullcalendar et de les implenter au sein de notre projet de manière à réaliser une première version de ce projet, une fois l'affichage mis en place, j'ai pu commencer à rajouter des données (livreur (nom/prenom) et commande (adresse de livraison/nom du produit/etc..)) avec des bases de données de test au format Json directement mis dans notre projet.

  Cela nous a permis d'avoir une première version du projet pas vraiment fonctionnel ( à cause d'une mauvaise version de fullcalendar) mais cela nous à donner une idée de la forme et des fonctionnalités que devrait avoir le projet. Le calendrier étant de base en anglais je me suis ensuite penché sur comment traduire en français le calendrier pour qu'il soit en rapport avec le reste, ce qui m'a fait perdre pas mal de temps alors que la commande était toute simple.

## Activités de Valentin



## Document issus de la phase de conception pré-développement

![image1](https://github.com/Oydrey/TP-M4103C/blob/master/image/IMG_20200207_150032.jpg)
![image2](https://github.com/Oydrey/TP-M4103C/blob/master/image/IMG_20200207_150051.jpg)

À travers ces deux maquettes, nous avons décidé que la gestion des plannings se fera en glissant les livreurs situés en haut et les commandes situés à gauche sur une date commune.

![image3](https://github.com/Oydrey/TP-M4103C/blob/master/image/JPEG_20200331_162401.jpg)

 Ici, nous avons noté les données que devait contenir chaque liaison créé en format json.
