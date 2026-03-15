# Dashboard Kossmo

## Description
Vitrine principale de l'écosystème Kossmo. Affiche tous les sites concepts en sous-domaines via des iframes interactives. C'est la porte d'entrée vers l'univers créatif kossmo.tech.

## URL
- Production : https://kossmo.tech
- Coolify : https://coolify.kossmo.tech (projet : dashboard)

## Commandes
- `npm start` → http://localhost:4200
- `npm run build` → dist/dashboard/browser
- `npm test` → tests unitaires
- `npm run lint` → vérification du code

## Concept
Le dashboard est lui-même un site vitrine avec sa propre identité visuelle. Il présente chaque site concept sous forme de carte avec :
- Un iframe en preview (ou screenshot si l'iframe pose des problèmes de perf)
- Le nom du concept
- Une courte description
- Un lien vers le sous-domaine

Le dashboard doit être facilement extensible : ajouter un nouveau site = ajouter une entrée dans une config/données, pas modifier du HTML partout.

## Structure
- src/app/core/ → Services, modèles, config des sites
- src/app/shared/ → Composants réutilisables (carte de site, header, footer)
- src/app/features/home/ → Page d'accueil avec la grille de sites
- src/app/features/about/ → Page à propos de Kossmo
- src/assets/ → Images, screenshots des sites

## Données des sites
Les sites sont définis dans un fichier de config (pas d'API backend). Chaque site a :
- name : nom du concept
- slug : identifiant URL
- url : URL complète du sous-domaine
- description : description courte en anglais
- tags : mots-clés (ex: typography, interaction, generative)
- color : couleur d'accent du site (pour la carte)
- status : "live" | "coming-soon"

## Règles spécifiques
- Les iframes doivent être lazy-loaded (IntersectionObserver) pour ne pas charger tous les sites en même temps
- Prévoir un fallback si un site en iframe ne répond pas (screenshot statique ou placeholder)
- Le dashboard doit rester léger et rapide malgré les iframes
- Responsive : grille adaptative (1 colonne mobile, 2 tablette, 3+ desktop)
