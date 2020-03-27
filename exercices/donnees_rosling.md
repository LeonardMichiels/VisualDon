# Data Rosling

## Procédure
 - On télécharge les jeux de données au format xlsx
 - On convertit cela en .csv grâce à la librairie xslx
 - Ensuite on convertit le csv en Json
 - On organise les données selon la façon désirée
 - On rassemble les données dans un objet unique
 - On passe le tout en script
 ## Intérêt des scripts
 - Réutilisation du code pour réitérer l'action
 - Facilité d'entretien/actualisation du process
 ## Comment joindre les 4 jeux de données
 Nous avons utilisé l'identifiant "geo" car ve dernier est commun aux différents pacakge de données.
 Le fichier "region.json" est utilisé comme fichier de départ. On y rassembles les autres fichiers.
 