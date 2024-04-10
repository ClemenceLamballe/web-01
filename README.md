# web-01
TP1 de développement Web
Questions de Cours

Clémence Lamballe
MIN1
27/03/2024

**1.	npm install command also generated a package-lock.json file along with package.json. What is the purpose of this file?**
Le fichier package-lock.json permet d’associer et __d’enregistrer les versions de chaque package__. Il prend aussi en compte leur arbre de dépendances. Il garantit une bonne gestion des dépendances, et que les mêmes versions seront utilisées à chaque fois que le projet est installé. 
**Ex :** ![image](https://github.com/ClemenceLamballe/web-01/assets/160240758/80d87e0b-1084-4d46-a05b-433a5b5e41be)

**2.	By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this?**
On appelle ça le __« Semantic Versioning »(SemVer)__. C'est une convention pour définir le nommage de version des dépendances NPM. On utilise trois chiffres séparés par des points (MAJOR.MINOR.PATCH) . On aura donc par exemple une version 1.2.3. 

Le PATCH, ici 3, correspond à un numéro de version qui est incrémenté lors d’une correction de bug, et que cette correction n’entraine pas de modification dans la compatibilité. On aura par exemple 1.2.4 si un bug de la version 1 .2.3 a été résolu avec la même compatibilité. 

Le MINOR, ici 2, correspond à un numéro de version qui est incrémenté lors de l’implémentation d’une nouvelle fonctionnalité compatible. Ainsi, on aura la version 1.3.0 si elle implémente une nouvelle fonctionnalit  é compatible par rapport à 1.2.3.

Le MAJOR, ici 1, est un numéro de version qui est incrémenté lorsqu’il y a une modification incompatible. On aura alors la version 2.0.0 si tel est le cas.

**3.	What is a devDependency exactly? What are the differences with a dependency?**
Une devDependency (dépendance de développement) est une dépendance NPM __nécessaire uniquement pendant la phase de développement d'un projet__.  Elle n'est pas incluse dans le code final ou nécessaire pour l'environnement de production (l'environnement dans lequel le code est exécuté pour les utilisateurs finaux). Par exemple, une devDependency peut être des fichiers et outils de test. Les dépendances normales, quant à elles, sont __nécessaires à la fois en développement et en production__.

**4.	What is a closure/iife ? What was it used for ? What replaced it?**
Une closure/iife (Immediately Invoked Function Expression) est une fonction utilisée pour créer des variables privées et __encapsuler du code dans une portée locale__. Par exemple, les variables déclarées à l'intérieur de la fonction n’étaient accessibles qu'à l'intérieur de cette fonction et ne pouvaient pas être accédées depuis l'extérieur. Cela permettait d’éviter les conflits de noms de variables dans le code en encapsulant des données. 
**Exemple d’ife :**  
![image](https://github.com/ClemenceLamballe/web-01/assets/160240758/5b245b49-a2c7-402a-8935-d81f0e9aecb6)
ici : seul le Router est rendu publique

Elle a été __remplacée par les modules ES6__, qui permet de diviser le code en petites unités réutilisables appelées modules. Ces modules peuvent être importées et exportées entre différents fichiers JavaScript, avec les mots-clés « import », « export », et « export default ». Aussi, ES6 permet de définir des variables non pas à travers « var » (qui a une portée fonctionnelle) mais avec « let » et « const », qui ont une portée de bloc (qu'elles ne sont accessibles qu'à l'intérieur du bloc dans lequel elles sont déclarées.)
**Exemple ES :** 
![image](https://github.com/ClemenceLamballe/web-01/assets/160240758/e76ad7df-b1a5-4c5c-9bd4-9c7e0dec8c40)

**5.	What is the difference between import * from './utils' and import { parseUrl } from './utils'? What can be the consequences of using one instead of the other?**
« import * from './utils' » __importe tout__ ce qui est exporté par le module './utils' dans un objet du nom de toto.

« import { parseUrl } from './utils' » __importe seulement la fonction { parseUrl }__ du module './utils'. Le deuxième cas est à privilégier car « import * » peut importer des fonctions inutilisées dans le code qui peuvent engendrer divers problèmes.

**6.	Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?**

**Similitudes entre les classes Java et ES6**
  -	**L'héritage :** pouvoir avoir des classes dérivées d’autre classes
  -	**L'encapsulation :** pouvoir protéger les données et les méthodes en ayant des restrictions d’accès.

    
**Différences entre les classes Java et ES6**
  -	**Le polymorphisme :**
    o	En Java, il est possible de créer plusieurs méthodes ayant le même nom mais des paramètres différents dans une même classe. Le polymorphisme est possible en overloading et overriding)
    o	En ES6, le polymorphisme n'est possible qu'avec le polymorphisme par substitution (override). il n'est pas possible de surcharger les méthodes.
  - **Les interfaces :** Les interfaces n’existent pas en ES6
  - **This :** le comportement de this n’est pas le même

**7.	What are the differences between var and let;**
La différence est que var a une portée de fonction ou globale, alors que let a une portée de bloc. Aussi les var peuvent être définit n’importe où dans le code.

**8.	What is the .bind(this) stuff? What happens if you delete it? Is it needed when using an arrow function ? why ?**
  .bind(this) : méthode JavaScript pour créer une nouvelle fonction avec __un contexte d'exécution__ (this) spécifique.

![image](https://github.com/ClemenceLamballe/web-01/assets/160240758/0e3adb3f-b7f9-4aa8-b670-8466b450aa30)

 ici, bind(this) permet de s’assurer que la fonction setTimeout() fait référence à l’instance de la classe GameComponent qui appelle goToScore()

Si on le supprime, la fonction pourrait __avoir un contexte d'exécution différent que souhaité__ (par exemple à un objet global comme window), ce qui peut entraîner des erreurs.
.bind(this) n’est __pas nécéssaire pour une arrow function__, car elle hérite directement du contexte this de la portée parente.
Ex :  
![image](https://github.com/ClemenceLamballe/web-01/assets/160240758/5b4da3a8-1691-4b2c-b427-d969c81b79e3)


**9.	What does the @ symbol mean in @babel/*?****
Le symbole @ dans @babel/* est permet de __regrouper des packages liés sous un même nom__. Par exemple, @babel/core et @babel/cli sont deux packages différents dans le scope @babel. @babel/* fait donc référence à tous les packages dans ce scope. 

**10.	What are the advantages of Promises?**
Avant les promesses, on utilisait des callbacks pour gérer les résultats qui n'arrivaient pas immédiatement. Si trop de callback sont imbriqués, le code devient illisible.
les Promises gèrent les opérations asynchrones. Elles ont deux états possibles : success ou error selon l'achèvement ou l'échec de l’opération. Les Promesses permettent également de chaîner les opérations asynchrones ensemble, en utilisant "then" qui reprend le résultat de la promesse précédente.
Les avantages sont donc :
•	Une code __plus simple et plus facile à lire__ que les callbacks imbriqués. 
•	Une meilleure __gestion des erreurs__ (avec catch)
•	La principe de __chaining__.

**11.	What version of ECMAScript async / await was released in ?**
L'async/await a été publié dans la __version ECMAScript 2017 (ES8)__.

**12.	Component-oriented programming for the web is considered more maintainable. Why?**
La programmation orientée composant est uaussine approche qui permet de __diviser un site ou une application en différentes parties (composants)__. Cela qui facilite la structuration du code, la compréhension et la gestion des erreurs. De plus, cette méthode permet de réduire les risques de conflits et de réutiliser le composant facilement.
![image](https://github.com/ClemenceLamballe/web-01/assets/160240758/ddeccfd0-ed1c-49c7-9ea2-e3506181d892)

  
**13.	What is Functional programming?**
Dans la programmation fonctionnelle, les fonctions peuvent être passées en argument ou être le résultat d'autres fonctions.  

**14.	Explain what the map() function does ?**
map() est une fonction qui prend un tableau en entrée. Elle récupère chaque élément du tableau et __applique une opération__ sur eux. map() renvoie un nouveau tableau avec les résultats des valeurs modifiées.

**15.	Explain what the filter() function does ?**
filter () est une fonction qui prend un tableau en entrée. Elle récupère chaque élément du tableau et effectue __une sélection__ en fonction d’une condition donnée. filter() renvoie un nouveau tableau uniquement composé des valeurs qui ont satisfait la condition.

**16.	Explain what the reduce() function does ?**
reduce () est une fonction qui prend un tableau en entrée. Elle récupère chaque élément du tableau et les __combine en une seule valeur__ en appliquant une opération répétitive. La sortie de reduce() est donc cette nouvelle valeur déterminée.

**17.	What is the difference between .then() and async/await when handling asynchronous functions?**
Lorsqu'on utilise des fonctions asynchrones en JavaScript, on peut gérer les résultats asynchrones avec .then() ou async/await.

.then() est une méthode utilisée avec les Promesses pour gérer les résultats asynchrones __de manière asynchrone__. Le .then s’exécutera lorsque la Promesse sera résolue avec succès. On peut chaîner plusieurs .then(), c’est-à-dire utiliser des then() à la suite des autres pour utiliser les résultats précédants. Le code peut alors devenir illisible dans certains cas.

async/await est une syntaxe qui permet de gérer les résultats asynchrone __de manière synchrone__. Le mot-clé await permet d’attendre la résolution d'une promesse avant de continuer l'exécution du code. Avec cette méthode, le code devient plus lisible. 

**18.	What does the _ prefix mean on a sass file?**
Le préfixe _ sur un fichier Sass indique qu'il s'agit d'un __fichier partiel__, c'est-à-dire qu'il ne doit pas être compilé.

