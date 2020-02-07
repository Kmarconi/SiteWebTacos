# SiteWebTacos
Site Web Tacos EI5


### Groupe
- Anthony Gougeon
- Adrien Mortreau
- Thibaut Harel
- Kévin Marconi


### Pages
- Construire son tacos avec des ingrédients (avec les contraintes associées) (POST)

- Score par rapport à la compo (si compo parfaite : 10/10)

- Classement des meilleurs tacos (GET)

- Choisir taille => tacos random (POST)

- Ajouter le tacos à la db que si sa compo n’existe pas sinon incrémenter un compteur


### Technologies
Base de données : MongoDB
 
Back : 
 - Langage : Nodejs
 - Communication avec BDD : mongoose
 - Communication avec front (API REST) : express
 
Front :
 - Langage : Nodejs
 - Communication avec back : javascript http library
 - Affichage des pages : express + ejs
 - Modification des éléments html : jquery
 
### Installations
- Installez [Nodejs](https://nodejs.org)
- Installez [Mongodb](https://www.mongodb.com/download-center/community)
- Executez les commandes suivantes à la racine de votre projet :
```
npm install
npm install express
npm install mongoose
npm install ejs
npm install jsdom
npm install jquery
```
- Lancez le serveur :
```
npm run start
```
- Lier Visual Studio Code à Github :
```
Créer un dossier 
Avec git cmd, aller dans le dossier et faire les commandes :
git config --global user.email mail
git clone lien
Dans visual studio, File/Add folder to workspace et choisir le dossier cloné situé dans le dossier que vous avez créé
```
