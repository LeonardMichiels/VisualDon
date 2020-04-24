# Turf

## Fonctions

### Circle

Cette fonction requiert 3 arguments : centre, rayon et un dernier argument optionel. Ce 3ème argument contient: une string qui représente l'unité (du type "miles" ou encore "degrees"), une valeure entière pour le nombre de steps et d'eventuelles propriérés.

### Bbox

Prends les coordonées x (min et max), y (min et max) d'objet(s) et return une "boîte" qui contient l'integralités des objets donnés en son sein. 

### BboxPolygon

Très semblable à Bbox. Cependant, cette fonction ne retourne pas une "boîte" (comprenez un carré), mais un polygône.    

### Distance

Calcule la distance entre deux points. Cela peut être en fait en degrés, radians, miles ou kilometres.
