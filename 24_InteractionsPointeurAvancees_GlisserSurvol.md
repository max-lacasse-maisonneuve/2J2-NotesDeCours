## Cliquer et glisser

Dans Unity, gérer les interactions de glisser-déposer peut être parfois délicat, mais cela peut être simplifié en utilisant les EventTriggers de type `BeginDrag`, `Drag` et `EndDrag`. Voici un exemple simple de script pour permettre à un objet UI d'être glissé et déposé.

Les interactions de type drag se déclenchent autant avec la souris qu'avec le toucher sur les écrans tactiles.

Un rappel pour utiliser les EventTriggers :

-   L'élément doit posséder un collider (par exemple, un `BoxCollider2D` pour les objets 2D).
-   L'élément doit posséder un composant `EventTrigger` pour gérer les événements de glisser-déposer.
-   La fonction à déclencher doit être publique.
-   Un objet de type `EventSystem` doit être présent dans la scène (il est généralement ajouté automatiquement avec un Canvas).
-   La caméra doit avoir un composant `Physics2DRaycaster`.
-   Si vous voulez accéder aux informations de l'événement (comme la position du pointeur), ajoutez un paramètre de type `PointerEventData` à votre fonction.

## Utilisations des interactions de glisser-déposer

-   Vous pouvez créer un puzzle où les joueurs doivent glisser des pièces pour les assembler.
-   Vous pouvez implémenter un inventaire où les joueurs peuvent glisser des objets pour les déplacer ou les utiliser.
-   Vous pouvez déplacer des pions sur un plateau de jeu en les glissant avec la souris ou le doigt.

## BeginDrag, Drag et EndDrag

Dans l'exemple suivant, nous allons placer un pion sur un plateau de jeu en le glissant avec la souris ou le doigt. Chaque case possède un script de type `CaseJeu` pour gérer le dépôt du pion et le pion possède un script de type `Pion` pour gérer le déplacement.

```csharp
using UnityEngine;
using UnityEngine.EventSystems;

public class Pion : MonoBehaviour
{
    public CaseJeu caseActuelle;
    public CaseJeu casePrecedente;


    public void OnBeginDrag(PointerEventData eventData)
    {
        // Si le pion était dans une zone, on la libère
        if (caseActuelle != null)
        {
            casePrecedente = caseActuelle;
            caseActuelle.RetirerObjet();
            caseActuelle = null;
        }
    }

    public void OnDrag(PointerEventData eventData)
    {
        transform.position = eventData.pointerCurrentRaycast.worldPosition;
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        // Si on n'a pas été déposé dans une zone
        if (zoneActuelle == null)
        {
            transform.position = parentOriginal.position;
        }
    }
}
```

## Drop

Pour gérer le dépôt d'un objet glissé, vous pouvez utiliser l'événement `Drop` dans un `EventTrigger`. Vous placez ce composant sur l'objet zone qui doit recevoir l'objet glissé. Cet objet doit avoir un collider (par exemple, un `BoxCollider2D` pour les objets 2D) de type trigger.

Voici un exemple de script pour gérer le dépôt d'un objet glissé :

```csharp
using UnityEngine;
using UnityEngine.EventSystems;

public class CaseJeu : MonoBehaviour, IDropHandler
{
    public GameObject objetDepose;
    public int numeroCase;

    public void OnDeposer(PointerEventData eventData)
    {
        objetDepose = eventData.pointerDrag;//PointerDrag correspond à l'objet qui est en train d'être glissé

        if (objetDepose != null)
        {
            objetDepose.GetComponent<Pion>().caseActuelle = this;
            objetDepose.transform.position = transform.position;//On vient centrer l'objet déposé dans la case
        }
    }

    public void RetirerObjet()
    {
        objetDepose = null;
    }
}
```
