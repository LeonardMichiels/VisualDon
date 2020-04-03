# Scrapping

## Cas de Galaxus
Ici on s'intéresse à un jeu de donnée que l'on obtient est au format JSON. On le récupère en scruttant l'onglet network de la console dev. du navigateur. On cherche parmi les diverses requêtes celle qui nous intéresse. Puis on utilise curl ce qui nous permet de déterminer que www.galaxus.ch/api/graphql est l'API REST qui nous intéresse. Un petit problème: la limite de nombre de produits retournés est de 15 (pour des raisons de rapidité de chargement des pages du site probablement).

Deuxième étape. Maintenant que nous avons les données, il faut faire le tri dans ce fouilli. On prépare donc un scripte qui filtre les informations qui nous concernent.

## Cas RTS