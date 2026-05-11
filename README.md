# Portfolio · Data Scientist  

🚧 **En construction** 🚧
https://portfolio-three-coral-9hs250s3c8.vercel.app/

<img width="1201" height="719" alt="image" src="https://github.com/user-attachments/assets/2e64a095-7989-4c0a-94c0-42f76a00a36f" />

---
## Mon portfolio professionnel 
Accessoirement ce portfolio est une démonstration de ce que je sais faire.

Ce site n'a pas été codé à la main : il a été conçu sous ma direction, à travers une série d'itérations avec des outils IA.
Les choix d'architecture, d'UX, de design system ont été effectué à l'aide de l'outil *Claude Design*.
Le développement a été produit avec le harnais *Claude-Code* d'Anthropic. 
Le déploiement a été fait sur la plateforme vercel.  

L'utilisation des outils IA est un choix assumé, et c'est aussi le message du portfolio.  
L'IA exécute ce que je décide.

## Pourquoi ce portfolio existe

Je suis Data Scientist. 
À l'heure où l'IA s'invite dans tous les métiers de la donnée, ***savoir l'orchestrer***  est aussi important que de savoir entraîner un modèle.
les compétences en ingénierie IA sont primordiale pour cadrer un modèle, itérer si besoin, corriger en mettant en place des stratégies afin de ne pas répéter les mêmes erreurs, reprendre la main quand elle hallucine.
Toutes ces compétences sont nécessaire à tout métier de la tech afin d'augmenter sa propre production.  
Néanmoins l'IA doit rester un outil avec laquel il faut travailler et non pas s'y reposer.

Ce site est donc à la fois ma carte de visite **et** ma preuve par l'exemple :

Dans le monde de la Data, le design n'est pas primordial cependant j'aime les choses bien faites.
Voici la méthodologie :  
- **Design** — itéré sur [Claude Design](https://claude.ai/design), de la maquette HTML/CSS jusqu'aux variantes (hero split, chatbot interactif, modale projet).
- **Code** — écrit par [Claude Code](https://claude.ai/code) à partir de mes specs, avec mes revues à chaque étape (architecture, perfs, accessibilité, build).
- **Déploiement** — Versionné localement avec git puis sur GitHub et déployé sur Vercel. Vercel permet le déploiement automatique à chaque changement du repo.
- **Contenu** — 🚧**En construction**🚧 projets, métriques, retours d'expérience : tout vient de moi. L'IA n'invente pas mes accomplissements. Elle peut parfois me corriger sur l'orthographe si je le lui demande ou bien de faire une traduction.

**C'est cette posture — pilote et non pas passager — que je veux montrer à mes futurs employeurs.**

## Aperçu 🚧En construction🚧

- Hero **split** avec un chatbot intégré qui répond à des questions prédéfinies sur mon profil
- Bandeau de confiance en caroussel
- Grille de projets filtrable, avec **modale plein écran** pour chaque étude de cas (contexte, méthodo, résultats chiffrés, démo)
- Section "À propos" + fiche d'identité technique
- Mode **clair / sombre** avec persistance localStorage
- Reveal-on-scroll, micro-animations IBM Plex Sans / Mono / Serif

## Stack

- **Bun** — runtime, bundler, dev server (zéro config Vite/Webpack)
- **React 19** — UI
- **CSS variables** — design system clair/sombre
- **IBM Plex** — Sans / Mono / Serif pour la font

Tout a été effectué en Vibe-coding

## Développement

```bash
bun install
bun run dev          # http://localhost:3000 avec HMR
```

## Build

```bash
bun run build        # → dist/ (HTML + JS minifié + CSS + assets, tout hashé)
```

## Déploiement

`dist/` est un bundle statique, déployable partout (c'est pas moi qui le dit c'est Claude. Pour du développement Web je lui fait confiance mais pour autre chose c'est rarement le cas):

| Plateforme           | Build command       | Output |
| -------------------- | ------------------- | ------ |
| **Vercel**           | `bun run build`     | `dist` |
| **GitHub Pages**     | via git             | —      |

Connecte simplement le repo. Bun est détecté automatiquement via `package.json` + `bun.lock`.

## Structure

```
.
├── index.html      # entrée Bun (bundle root)
├── app.jsx         # composants React (Nav, Hero, Projects, Modal, About, CTA, Footer)
├── styles.css      # tokens + composants
├── assets/         # statiques bundlés au build
└── dist/           # output de build (gitignoré)
```

## Crédits

- **Direction, contenu, itérations** : Fabrice - One-Up-Dev.
- **Prototypage visuel** : [Claude Design](https://claude.ai/design) + Fabrice - One-Up-Dev.
- **Implémentation** : [Claude Code](https://claude.ai/code). Modèle Opus 4.7.
- **déploiement** : Fabrice - One-Up-Dev.

Aucune ligne de code n'a été écrite à la main. C'est le but.  
Ce fichier de documentation est un travail en commun avec les outils IA.
