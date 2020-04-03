# Recherche 19h30
Pour retourner les épisodes les plus vus on a :

ndjson-sort "a.views > b.views ? -1 : 1" < episodes.ndjson \
| head -20 \
| ndjson-map "{ firstTitle: d.segments[0].title, date: d.date, vues: d.views}" \
| ndjson-reduce

- Ndjson-sort trie les entrées par nombre de vues
- head définit le nombre d'entrée prise en compte
- ndjson-map définit les champs retournés
- ndjson-reduce rends le tout sous forme de tableau.
