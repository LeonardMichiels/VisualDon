# Scraping

## Cas de Galaxus

Ici on s'intéresse à un jeu de donnée que l'on obtient est au format JSON. On le récupère en scruttant l'onglet network de la console dev. du navigateur. On cherche parmi les diverses requêtes celle qui nous intéresse. Puis on utilise curl ce qui nous permet de déterminer que www.galaxus.ch/api/graphql est l'API REST qui nous intéresse. Un petit problème: la limite de nombre de produits retournés est de 15 (pour des raisons de rapidité de chargement des pages du site probablement).

Deuxième étape. Maintenant que nous avons les données, il faut faire le tri dans ce fouilli. On prépare donc un scripte qui filtre les informations qui nous concernent.

## Cas RTS

Cette fois encore on utilise la console dev. du navigateur pour afficher les requêtes du navigateur. En fouillant un peu on s'aperçoit que l'on peut récupèrer via la requête www.rts.ch/play/tv/show/6454706/latestEpisodes?maxDate=ALL les dix derniers épisodes du show en question (ici le 19h30). La valeur de maxdate permet de modifier à partir de quand on récupère les 10 derniers épisodes. Ensuite on crée un script qui boucle la requête en changeant la date de 10 jours en 10 jours en remontant le fil du temps. Il nous faut ensuite extraire, ou fragmenter épisode par épisode en lisant le fichier ligne par ligne. On doit faire attention à la gestion des dates qui peuvent avoir plusieurs formats. On a donc les informations pour chaque segments (sujet, durée, etc...)
