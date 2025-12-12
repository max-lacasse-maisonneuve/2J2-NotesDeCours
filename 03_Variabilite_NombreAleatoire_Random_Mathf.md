# Générer un nombre aléatoire

Pour générer un nombre aléatoire avec Unity, vous pouvez utiliser la classe `Random` ou la méthode statique `Random.Range()`. Voici quelques exemples pour vous aider à comprendre comment générer des nombres aléatoires dans différents contextes.

## Générer un nombre entier aléatoire

Pour générer un nombre entier aléatoire entre deux valeurs (inclusif pour la valeur minimale et exclusif pour la valeur maximale), vous pouvez utiliser la méthode `Random.Range(int min, int max)`. En spécifiant le type de la variable comme `int`, vous obtiendrez un entier aléatoire.

```csharp
int randomInt = Random.Range(0, 10); // Génère un entier aléatoire entre 0 et 9
Debug.Log("Nombre entier aléatoire : " + randomInt);
```

## Générer un nombre décimal aléatoire

Pour générer un nombre décimal (float) aléatoire entre deux valeurs, vous pouvez utiliser la méthode `Random.Range(float min, float max)`. En spécifiant le type de la variable comme `float`, vous obtiendrez un nombre décimal aléatoire.

```csharp
float randomFloat = Random.Range(0.0f, 10.0f); // Génère un nombre décimal aléatoire entre 0.0 et 10.0
Debug.Log("Nombre décimal aléatoire : " + randomFloat);
```
