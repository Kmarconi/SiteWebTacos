# SiteWebTacos
Site Web Tacos EI5


### Groupe
- Anthony Gougeon
- Adrien Mortreau
- Thibaut Harel
- Kévin Marconi


### Pages
- Accueil

- Création de compte ET connection

- Création d'un tacos (et enregistrement si connecté)

- Création aléatoire de tacos (et enregistrement si connecté)

- Retrouver tous ses tacos si l'utilisateur est connecté


### Technologies
Base de données : MongoDB
 
Back : 
 - Langage : Nodejs
 - Communication avec la base de données : mongoose
 - Exposition des routes du back : express
 - Sécurisation des mots de passe en base (hashage + salage) : crypto
 
Front :
 - Langage : Javascript pur
 - Affichage des pages : ejs
 - Modification des éléments html : jquery
 - Communication avec back : requête http de jquery
 
### Améliorations possibles

- Mots de passes à hacher et saler dans le front au lieu du back : cela évitera de les passer en clair sur le réseau.

- Code modifiant les éléments HTML à harmoniser : certaines portions utilisent jquery et d'autre utilisent du javascript pur.
 
### Installations
- Installez [Nodejs](https://nodejs.org)
- Installez [Mongodb](https://www.mongodb.com/download-center/community)
- Executez les commandes suivantes à la racine de votre projet :
```
npm install
```
- Lancez le serveur :
```
npm run start
```
- Lancez le serveur en mode débug :
```
npm run dev
```
- Lier Visual Studio Code à Github :
```
Créer un dossier 
Avec git cmd, aller dans le dossier et faire les commandes :
git config --global user.email mail
git clone lien
Dans visual studio, File/Add folder to workspace et choisir le dossier cloné situé dans le dossier que vous avez créé
```
