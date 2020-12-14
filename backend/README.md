# Backend

Projet Oscar Marze et Justine Reynaud
Ce dossier contiendra la partie frontend de votre projet.

# Documentation pour lancer le projet

Installer node modules : npm install à partir de l'invite de commande
Importer le fichier Shoes.JSON dans notre base de donnees Juscar sur MongoDBCompass

Pour lancer notre projet : ouvrir l'invite de commande, il faut se placer dans le dossier :
- Puis aller dans backend et le lancer : npm start
- Puis ouvrir une autre fenetre et cette fois-ci aller dans le frontent : npm start puis cliquer "y"

Pour tester les recherches, la suppression et la modification il faut utiliser un ID que l'on peut trouver dans la BDD. Attention, la recherche avec un ID inexistant provoque une erreur.

Pour l'ajout grâce au formulaire, il faut s'assurer de selectionner un items du menu déroulant car notre code détecte les changements et non l'items selectionné de base.Pour un bon fonctionnement de l'ajout, il faut modifier au moins une fois le choix dans le menu déroulant.

# Source utilisée
http://blog.kadri-hamza.com/manipulation-et-recuperation-des-donnees-dun-formulaire-en-react/
https://fr.reactjs.org/docs/handling-events.html
https://www.objectrocket.com/ (pour requete)
https://coursework.vschool.io/mongoose-crud/
https://mongoosejs.com/docs/api/model.html