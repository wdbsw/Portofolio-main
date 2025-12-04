
# Configuration docker
```bash
docker exec -it portofolio-main-angular-dev-1 sh

# Lance docker
docker-compose exec angular-dev sh
```

# ODC - Angular - Portofolio-main

**Étape 1 :** Préparation de l’environnement  
**Étape 2 :** Edition du projet Portfolio-main

**Étape 3 :** Création des composants
- chaque composant contient : 4 fichiers 
  ```
  nameComponant.html, 
  nameComponant.scss, 
  nameComponant.spec.ts,
  nameComponant.ts
  ```
- component **"A propos"**
    ```bash
    # Commande : 
    ng generate component apropos  
    # Chaque composant possède 
    HTML, TS, CSS et un décorateur.
    ```
**Étape 4 :** definir dans **app-routing.module.ts**
on defnir le patch :
  ```bash
    { path: 'apropos', component: ContactComponent },
  ```

**Étape 4 :** Ajout des informations du profil  
**Étape 5 :** Personnalisation du design  
**Étape 6 :** Interaction simple
**Étape 7 :** Présentation  
***************
**Étape 1 :** Préparation de l’environnement  
Vérifier les installations :  
```bash
# Node.js : 
node \-v  
# Angular CLI :  
ng version
```

**Étape 2 :** Démarrage du projet  
```bash
# Créer un projet : 
ng new profil-étudiant  
# Lancer le serveur : ng serve  
Observer la structure (src, app, assets...).
```

**Étape 3 :** Création du composant “Profil”  
```bash
# Commande : 
ng generate component profil  
# Chaque composant possède 
HTML, TS, CSS et un décorateur.
```

**Étape 4 :** Ajout des informations du profil  
```bash
# Créer des propriétés : 
    nom, formation, email.  
# Afficher avec {{ variable }}.

```
**Étape 5 :** Personnalisation du design  
```bash
Modifier profil.component.css : couleurs, tailles, alignement.
```

**Étape 6 :** Interaction simple  
Ajouter un bouton et une fonction dans TS.  
```bash
Utiliser (click).
```

**Étape 7 :** Présentation  
Présentation rapide du travail final.  
Résultats attendus

* Mini-site Angular fonctionnel.  
* Page profil dynamique.

# Portofolio-main
