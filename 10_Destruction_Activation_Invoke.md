## Activer et désactiver les GameObjects par script

Lorsqu'on désactive un GameObject, tous ses composants et ceux de ses enfants sont également désactivés. Cela signifie qu'ils ne seront plus mis à jour ni rendus dans la scène. Pour désactiver un GameObject, vous pouvez utiliser la méthode `SetActive(false)`. Pour le réactiver, utilisez `SetActive(true)`.

Souvent, il sera réactivé à partir d'un autre script ou d'un événement dans le jeu. Nous verrons comment faire plus tard.

```csharp
// Désactiver le GameObject
gameObject.SetActive(false);

// Réactiver le GameObject
gameObject.SetActive(true);
```

## Désactivation des composants

Il est également possible de désactiver individuellement des composants spécifiques d'un GameObject sans désactiver le GameObject lui-même. Cela peut être utile si vous souhaitez temporairement désactiver certaines fonctionnalités tout en gardant le GameObject actif dans la scène.
Pour désactiver un composant, vous pouvez simplement définir sa propriété `enabled` sur `false`. Par exemple, pour désactiver un `SpriteRenderer`, vous pouvez faire comme suit :

```csharp
SpriteRenderer sr;

void Start()
{
    sr = GetComponent<SpriteRenderer>();
}

void DisableSpriteRenderer()
{
    sr.enabled = false;
}
```

De cette façon, le GameObject restera actif, mais le sprite ne sera plus rendu à l'écran. Vous pouvez réactiver le composant en définissant `enabled` sur `true` :

```csharp
void EnableSpriteRenderer()
{
    sr.enabled = true;
}
```

[Documentation officielle de Unity sur SetActive](https://docs.unity3d.com/ScriptReference/GameObject.SetActive.html)
