# Utilisation des états de l'Animator pour les Boss

Nous avons vu comment connecter des animations simples à des actions de personnage. Cependant, les boss dans les jeux vidéo ont souvent des comportements plus complexes qui nécessitent une gestion avancée des animations. Dans ce chapitre, nous allons explorer comment utiliser les états de l'Animator pour créer des comportements de boss dynamiques et réactifs.

## États de l'Animator

L'Animator de Unity permet de créer des états d'animation qui peuvent être liés entre eux par des transitions. Chaque état peut représenter une action ou un comportement spécifique du boss, comme attaquer, se défendre, ou se déplacer. En utilisant des paramètres dans l'Animator, nous pouvons contrôler ces transitions en fonction des conditions du jeu.

Pour chaque état, on peut attacher un script qui gère le comportement du boss lorsqu'il entre, reste ou sort de cet état. Cela permet de définir des actions spécifiques à chaque phase de l'animation.

## Ajout des Comportements aux États

Pour ajouter des comportements aux états de l'Animator, suivez ces étapes :

1. Ouvrez la fenêtre Animator en sélectionnant le GameObject du boss et en cliquant sur "Window" > "Animation" > "Animator".
2. Créez des états pour chaque animation du boss (par exemple, "Idle", "Attack", "Defend").
3. Cliquez avec le bouton droit sur un état et sélectionnez "Add Behaviour" pour attacher un script personnalisé à cet état.
4. Dans le script, vous pouvez utiliser les méthodes `OnStateEnter`, `OnStateUpdate`, et `OnStateExit` pour définir le comportement du boss lors de l'entrée, de la mise à jour et de la sortie de l'état.

Voici un exemple de script attaché à un état d'attaque :

```csharp
using UnityEngine;
using UnityEngine.Animations;

public class BossAttackBehaviour : StateMachineBehaviour
{
    // Appelé lorsque l'état est entré
    override public void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        // Activer l'attaque du boss
        BossController boss = animator.GetComponent<BossController>();
        boss.StartAttack();
    }

    // Appelé à chaque frame pendant que l'état est actif
    override public void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        // Vérifier si l'attaque doit continuer ou se terminer
        BossController boss = animator.GetComponent<BossController>();
        if (boss.IsAttackFinished())
        {
            animator.SetTrigger("AttackFinished");
        }
    }

    // Appelé lorsque l'état est quitté
    override public void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        // Désactiver l'attaque du boss
        BossController boss = animator.GetComponent<BossController>();
        boss.EndAttack();
    }
}
```

## Déclencher une action spécifique avec des événements d'animation

Dans la ligne de temps de la fenêtre Animation, vous pouvez ajouter des événements d'animation pour déclencher des changements de phase ou d'autres actions spécifiques. Par exemple, vous pouvez ajouter déclencher une fonction qui vérifie empêche le boss de se déplacer pendant une attaque, qui le rend invulnérable pendant une phase de défense, ou qui choisit une nouvelle attaque aléatoire.
