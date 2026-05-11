# Portfolio · Data Scientist - https://portfolio-three-coral-9hs250s3c8.vercel.app/

Mon portfolio personnel — et, accessoirement, une démonstration de ce que je sais faire.

Ce site n'a pas été codé à la main : il a été **conçu avec Claude Design** et **implémenté avec Claude Code**, sous ma direction, à travers une série d'itérations. Les choix d'architecture, d'UX, de design system et de déploiement viennent de moi. L'IA exécute, je décide.

C'est un choix assumé, et c'est aussi le message du portfolio.

## Pourquoi ce portfolio existe

Je suis data scientist. 
À l'heure où l'IA s'invite dans tous les métiers de la donnée, **savoir l'orchestrer** — la cadrer, itérer, corriger, reprendre la main quand elle hallucine — est aussi important que de savoir entraîner un modèle.

Ce site est donc à la fois ma carte de visite **et** ma preuve par l'exemple :

Dans le monde de la Data, le design n'est pas primordial néanmoins j'aime les choses bien faites.
- **Design & prototypage** — itéré sur [Claude Design](https://claude.ai/design), de la maquette HTML/CSS jusqu'aux variantes (hero split, chatbot interactif, modale projet).
- **Code & déploiement** — écrit par [Claude Code](https://claude.ai/code) à partir de mes specs, avec mes revues à chaque étape (architecture, perfs, accessibilité, build).
- **Contenu** — projets, métriques, retours d'expérience : tout vient de moi. L'IA n'invente pas mes accomplissements. Elle peut parfois me corriger sur l'orthographe si je le lui demande ou bien de faire une traduction.

Parler 4 langues est également un plus dans la review des traductions que je lui demande.

C'est cette posture — pilote et non pas passager — que je veux montrer à mes futurs employeurs.

## Aperçu

- Hero **split** avec un chatbot intégré qui répond à des questions prédéfinies sur mon profil
- Bandeau de confiance en marquee infini
- Grille de projets filtrable, avec **modale plein écran** pour chaque étude de cas (contexte, méthodo, résultats chiffrés, démo)
- Section "À propos" + fiche d'identité technique
- Mode **clair / sombre** avec persistance localStorage
- Reveal-on-scroll, micro-animations IBM Plex Sans / Mono / Serif

## Stack

- **Bun** — runtime, bundler, dev server (zéro config Vite/Webpack)
- **React 19** — UI
- **CSS variables** — design system clair/sombre
- **IBM Plex** — Sans / Mono / Serif pour la font

- Tout en Vibe-coding

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
| **Netlify**          | `bun run build`     | `dist` |
| **Cloudflare Pages** | `bun run build`     | `dist` |
| **GitHub Pages**     | via Action → `gh-pages` | — |

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

- **Direction, contenu, itérations** : moi.
- **Prototypage visuel** : [Claude Design](https://claude.ai/design).
- **Implémentation, bundling, déploiement** : [Claude Code](https://claude.ai/code).

Aucune ligne de code n'a été écrite à la main. C'est le but.
Ce fichier de documentation est un travail en commun.
