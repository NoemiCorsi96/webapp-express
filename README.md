Web App 

Prima parte: Backend 

Primo esercizio: 
Utilizzando il file in allegato, creiamo un database con MySQL Workbench
Creiamo una nuova applicazione Express
Colleghiamo l’app al db e verifichiamo che tutto funzioni
Prepariamo una rotta index per ottenere la lista dei film
Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni

Bonus
Inserire le immagini nel progetto express
Inserire i dati di connessione al database come variabili d’ambiente
Inserire le vostre API in controller
Inserire le vostre rotte in un router
Inserire un middleware per le rotte inesistenti
Inserire un middleware per la gestione errori

Flusso logico: 
1. Scaricare il file in allegato ed inserirlo all'interno della cartella [X]
2. Importare il file in Workbench, visualizzare le tabelle per capire le entità e le relazioni che ci sono [X]
    Le due entità sono movies e reviews, la relazione è 1:N e la foreign key è movie_id
3. Fare il diagramma ER con la tecnica reverse, esportare il diagramma ed inserirlo all'interno della cartella [X]

4. Creare una nuova applicazione express 
    4.1 Dipendenze: 
    -express
    -mysql2 [X]
    4.2 Creare un server express basic con l'endpoint ('/') [X]
    4.3 Creare un file Env e Env.example per le credenziali [X]
    4.4 Modificare il fil package.json con ---watch --env-file [X]
5. Importare il db e fare il file connection.js, verificare che tutto funzioni con il consol.log nel terminale, verificandolo con Postman [X]
6. Prepare la rotta index per vedere tutta la lista dei film [X]
7. Prepare la rotta show per ottenere i dettagli di un singolo film e le sue recensioni [X]
8. Inserire le immagini nel progetto 
9. Inserire le API nel controller[X]
10. Fare routing [X]
11. Inserire un middleware per le rotte inesistenti[X]
12. Inserire un middleware per la gestione errori
