# Conventions de nomenclature en C# dans Unity

Dans le scripting C# ou la manipulation de GameObjects dans la scène, on utilise des conventions de nomenclature selon la catégorie d’identifiant et d'objet. Quelques règles générales sont importantes:

1. Ne jamais utiliser des **espaces** (❌ `Vaisseau 01`).
2. Ne jamais utiliser des **accents** (❌ `DéplacerJoueur()`).
3. Ne jamais utiliser des **symboles**, avec l'exception du `_` (❌ `Score!`,  ❌ `#Points`).

## Conventions par catégorie

<div style="width:960px;">

| Catégorie                                   | Convention                                 | Exemple                                             | Règle / Justification                                                                                                                                                        |
| ------------------------------------------- | ------------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Classe**                                  | **PascalCase (première lettre majuscule)** | `ControleurJoueur`, `SpawnerEnemis`, `GestionSante` | Hérite de `MonoBehaviour` (plus commun). Nom reflète le rôle du script.                                                                                                      |
| **Méthode**                                 | **PascalCase**                             | `DeplacerJoueur()`, `Start()`                       | Méthodes d'événement (ex: `Start()`, `Update()`) sont standard et ne doivent pas être modifiés. Les autres doivent être claires et descriptives avec un verbe à l'infinitif. |
| **Variable (champ)**                        | **camelCase (première lettre minuscule)**  | `vitesseJoueur`, `sante`, `pointage`                | Utilisé pour les champs associés à la classe, soient `private` ou `public`.                                                                                                  |
| **Variable locale**                         | **camelCase**                              | `positionTemporaire`, `deltaTime`                   | Variables utilisées dans les méthodes.                                                                                                                                       |
| **Constante**                               | **UPPER_CASE**                             | `SANTE_MAX`, `GRAVITE`, `VITESSE_JEU`               | Valeurs fixes, souvent utilisées comme paramètres ou facteurs de calcul, pour faciliter la compréhension et modification.                                                    |
| **Paramètre de méthode**                    | **camelCase**                              | `message`, `valeurDegat`, `estSaut`                 | Paramètres d'entrée dans les méthodes.                                                                                                                                       |
| **Nom d'objet (dans le panneau Hierarchy)** | **PascalCase**                             | `Joueur1`, `Joueur2`,`Ennemi`, `MenuInventaire`     | Utilisé dans les noms d'objets ou de scripts dans la scène.                                                                                                                  |

</div>


## Ressources complémentaires

- [E-book (gratuit, EN) : Use a C# style guide for clean and scalable game code (Unity 6 edition)](https://unity.com/resources/c-sharp-style-guide-unity-6)
- [C# Identifier Naming Conventions – Microsoft [EN]](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/identifier-names)