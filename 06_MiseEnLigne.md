# Archiver et mettre en ligne un projet Unity avec GitHub Pages

## Étape 1 : Compiler le projet

1. Créez un dossier `docs` à la racine de votre dépôt GitHub si ce n'est pas déjà fait. Ce dossier sera utilisé pour héberger les fichiers compilés.
2. Allez dans le menu **File** > **Build Profiles** > **Build**
3. Cliquez sur **Build** dans la fenêtre de build.
4. Choisissez un dossier de destination pour les fichiers compilés.
5. Attendez que Unity termine le processus de compilation. Cela peut prendre quelques minutes en fonction de la taille de votre projet.

## Étape 2 : Préparer les fichiers pour GitHub Pages

1. Une fois la compilation terminée, accédez au dossier de destination que vous avez choisi.
2. Vous verrez plusieurs fichiers et dossiers, y compris un dossier `Build`, un dossier `TemplateData`, et un fichier `index.html`.
3. Poussez les changements dans le dossier `docs` sur votre dépôt GitHub.

## Étape 3 : Mettre en ligne sur GitHub Pages

1. Ouvrez votre dépôt GitHub dans votre navigateur.
2. Allez dans les **Settings** (Paramètres) de votre dépôt.
3. Dans le menu de gauche, cliquez sur **Pages**.
4. Sous **Source**, sélectionnez la branche `main` (ou la branche que vous utilisez) et le dossier `/docs`.
5. Cliquez sur **Save**.
6. Attendez quelques minutes que GitHub génère votre site. Vous verrez une URL où votre projet est hébergé, généralement sous la forme `https://votre-nom-utilisateur.github.io/votre-repo/`.

## Étape 4 : Accéder à votre projet en ligne

1. Ouvrez un navigateur web et accédez à l'URL fournie par GitHub Pages.
2. Votre projet Unity compilé devrait se charger et être prêt à être utilisé en ligne.
