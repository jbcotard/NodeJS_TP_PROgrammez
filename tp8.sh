echo "#    TP 8 : Client HTTP      #"
echo "#----------------------------#"

echo " lancement d'un get HTTP simple "
node app-tp8.1.js


echo " lancement get HTTP avec l'utilisation de l'interface Stream en ecoutant l'evenement data"
node app-tp8.2.js


echo " get HTTP et ecriture du resultat dans le fichier txt programmez-tp8.3.txt"
node app-tp8.3.js


echo " post requete HTTP "
node app-tp8.4.js
