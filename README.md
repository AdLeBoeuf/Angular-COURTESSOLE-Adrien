## Séquence 4 — Tests Unitaires Angular

        ### Ce que j'ai appris

        #### 1. Pourquoi tester ?
        - Les tests permettent de détecter les erreurs avant la mise en production et de documenter le comportement attendu du code
        - Sans tests, le risque est d'introduire des régressions lors de modifications et de perdre confiance dans la stabilité de l'application
        - Exemple concret : Lors de la correction du test AppComponent, l'erreur "No provider for ActivatedRoute" a été détectée immédiatement grâce aux tests, ce qui aurait causé un crash en production

        #### 2. Outils utilisés
        - **Jasmine** : Framework de test qui fournit les fonctions describe(), it(), expect() pour écrire et structurer les tests
        - **Karma** : Test runner qui exécute les tests dans des navigateurs réels (Chrome, ChromeHeadless) et génère les rapports de couverture
        - **TestBed** : Utilitaire Angular pour configurer et créer un environnement de test qui simule le module Angular

        #### 3. Concepts clés maîtrisés
        - **AAA Pattern** : Arrange, Act, Assert - Structure pour organiser les tests : préparer les données, exécuter l'action, vérifier le résultat
        - **Mocks** : Objets simulés qui remplacent les dépendances réelles pour isoler le code testé
        - **Spies** : Fonctions Jasmine qui permettent d'observer et de contrôler le comportement des méthodes (espionner les appels, retourner des valeurs fictives)
        - **Fixture & detectChanges()** : La fixture est l'environnement de test du composant. detectChanges() déclenche la détection de changements pour mettre à jour le DOM, essentiel pour tester les liaisons de données

        #### 4. Types de tests pratiqués
        - ✅ Test d'une classe simple (sans Angular)
        - ✅ Test d'un service
        - ✅ Test d'un composant avec TestBed
        - ✅ Test des @Input
        - ✅ Test des @Output
        - ✅ Test du DOM

        #### 5. Erreurs courantes rencontrées
        - Oublier `detectChanges()` : Le DOM n'est pas mis à jour et les tests qui vérifient le rendu échouent avec des valeurs undefined
        - `No provider for...` : Ajouter les providers nécessaires dans TestBed.configureTestingModule() (ex: provideRouter([]) pour les composants utilisant le routeur)
        - Tests qui dépendent les uns des autres : Utiliser beforeEach() pour réinitialiser l'état entre chaque test et éviter les effets de bord

        #### 6. Commandes importantes
        ```bash
        ng test                    # Lancer les tests
        ng test --code-coverage    # Avec rapport de couverture
        ```

        #### 7. Code Coverage atteint
        - Objectif : 70-80%
        - Mon résultat : **75%** sur TaskBoard Pro

        #### 8. Difficultés rencontrées et solutions
        | Difficulté | Solution trouvée |
        |------------|------------------|
        | Erreur NullInjectorError avec ActivatedRoute | Ajout de provideRouter([]) dans les providers du TestBed |
        | Test du DOM échouant | Modification du test pour vérifier le contenu réel du template (navigation) au lieu d'un h1 inexistant |
        | Génération du rapport de couverture | Configuration de karma.conf.js avec le reporter 'coverage' et ChromeHeadlessCI |

        #### 9. Points à approfondir
        - [ ] Tests d'intégration
        - [ ] Tests E2E avec Cypress
        - [ ] Mocking avancé pour HttpClient
        - [ ] Tests de services asynchrones

        ### 🎯 Projet : Tests TaskBoard Pro

        #### Tests implémentés
        - [x] TaskService
        - ✅ `addTask()`
        - ✅ `deleteTask()`
        - ✅ `getTasks()`
        - [x] TaskHighlight Component
        - ✅ Affichage du titre
        - ✅ @Input title
        - ✅ Rendu dans le DOM

        #### Résultats
        - **Tests réussis** : 12 / 12
        - **Code coverage** : 75%
        - **Temps d'exécution** : 0.29 secondes

        ### 💡 Réflexion personnelle 
        Le plus utile a été d'apprendre à configurer correctement le TestBed avec les providers nécessaires et 
        à comprendre le cycle de vie des tests (beforeEach, fixture, detectChanges). Les tests permettent non seulement 
        de détecter les bugs rapidement, mais aussi de documenter le comportement attendu du code. Dans mes futurs projets, 
        je compte écrire les tests en parallèle du développement plutôt qu'après du coup et viser systématiquement 
        une couverture de code d'au moins 70% pour garantir la qualitédu code.