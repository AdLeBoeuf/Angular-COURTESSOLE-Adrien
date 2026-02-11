## Séquence 3 — Lazy Loading & Composants dynamiques

### 1. Le Lazy Loading
Le Lazy Loading c'est une technique qui permet de ne pas charger toute l'application dès le début. Au lieu de ça, on charge les parties de l'app seulement quand on en a besoin. Résultat : l'application démarre beaucoup plus vite.

Dans mon projet, j'ai appliqué ça sur les routes `/tasks` et `/about` avec la fonction `loadChildren()`. Quand l'utilisateur clique sur une de ces pages, Angular va chercher les fichiers nécessaires à ce moment-là, pas avant.

### 2. Structure avec features/
J'ai organisé mon projet avec un dossier `features/` où chaque fonctionnalité a son propre espace. Par exemple, tout ce qui concerne les tâches est dans `features/tasks/`, et tout ce qui concerne la page About est dans `features/about/`.

Cette organisation rend le code plus clair et plus facile à maintenir. Chaque feature regroupe ses composants, ses services et ses routes au même endroit. Et ça se combine parfaitement avec le Lazy Loading parce que chaque feature peut être chargée indépendamment.

### 3. Les composants dynamiques
Un composant dynamique, c'est un composant qui n'existe pas tout le temps dans la page. Il est créé au moment où on en a besoin, puis il peut être détruit après utilisation. C'est très pratique pour afficher des choses temporaires.

J'ai utilisé cette technique pour les composants `TaskHighlight` et `TaskEdit`. Quand on clique sur "Mettre en avant" ou "Éditer", le composant apparaît dynamiquement dans la page, puis il disparaît quand on le ferme.

### 4. ViewContainerRef et createComponent()
`ViewContainerRef` représente un conteneur dans le DOM où on peut injecter des composants de façon dynamique. On le récupère avec le décorateur `@ViewChild`.

La méthode `createComponent()` permet de créer un composant et de l'insérer dans ce conteneur. Une fois créé, on peut :
- Lui passer des valeurs via les propriétés `@Input()`
- Écouter ses événements via les `@Output()`
- Le supprimer du DOM avec `container.clear()`
