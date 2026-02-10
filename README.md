## Séquence 2 – Logique réactive du flux de données

### 1. Comprendre le BehaviorSubject
- **BehaviorSubject** = un "tuyau" qui diffuse des données en continu
- Contrairement à un simple tableau, il **push** automatiquement les changements
- Chaque modification déclenche une notification vers tous les abonnés
- Le service `TaskService` maintient une source de vérité unique

### 2. Le pipe async dans le template
- `| async` s'abonne automatiquement à l'Observable dans le HTML
- Gère le cycle de vie : pas besoin de `subscribe()` / `unsubscribe()` manuel
- Évite les fuites mémoire et simplifie le code du composant
- La vue se met à jour toute seule quand les données changent

### 3. Le circuit complet : Service → Composant → Vue
1. **Service** : `addTask()` ou `removeTask()` modifie le tableau
2. **Service** : Appelle `.next()` pour diffuser la nouvelle version
3. **Composant** : Expose `tasks$` comme Observable public
4. **Template** : Utilise `*ngFor` avec `tasks$ | async`
5. **Résultat** : La vue se rafraîchit instantanément sans rechargement

### 4. Ce que j'ai retenu
- Les données sont **réactives** : elles "poussent" les changements au lieu d'être "tirées"
- Plus besoin de faire des `getTasks()` en boucle
- Le flux unidirectionnel garantit la cohérence des données
- C'est la base de la programmation réactive avec RxJS dans Angular

### 4. problème
- N'étant pas présent au cours, je n'ai pas réelement compris l'attentu de la séquence 2. J'ai bien compris le côté réactif mais je ne sais pas quoi ajouter à mon projet. Je n'ai pas vu de page "🛠️ TP - Démarrage du fil rouge" comme dans la séquence 1 par exemple. 
