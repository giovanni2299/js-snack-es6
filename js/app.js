// console.log('ciao mamma')


/*

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

*/

// const MembersName = [ 
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite:'Brad Pitt',
//         posto: ''

//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite:'Johnny Depp',
//         posto: ''

//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite:'Lady Gaga', 
//         posto: ''
//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite:'Cristiano Ronaldo', 
//         posto: ''
//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite:'Georgina Rodriguez', 
//         posto: ''
//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite:'Chiara Ferragni', 
//         posto: ''

//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite: 'Fedez', 
//         posto: ''
//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite: 'George Clooney',
//         posto: '' 
//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite: 'Amal Clooney',
//         posto: '' 
//     },
//     {
//         nomeTavolo: 'Tavolo Vip',
//         nomeOspite: 'Maneskin',
//         posto: '' 
//     },
     
// ];

const MembersName = [ 
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
];

//fatto col for
// const nomeTavolo = 'Tavolo Vip'
// let nomePartecipante;
// let postoTavolo = 1;

// for(let i = 0; i < MembersName.length; i++){
//     nomePartecipante = MembersName[i];
//     postoTavolo++;

//     const object ={
//         nomeTavolo: nomeTavolo,
//         nomeOspite: nomePartecipante,
//         posto: postoTavolo
//     }
//     console.log(object)
// }


//Fatto col map
const copyMembersName = MembersName.map((el, i) => {
    return {
        nameVip: el,
        tableName: 'Tavolo Vip',
        sitTable: i+1
    }
})


console.log(copyMembersName)







//ESERCIZIO 2
/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

const classMember = [
    {
        id: 213,
        nome:'Marco della Rovere',
        grado: 78
    },
    {
        id: 110,
        nome:'Paola Cortellessa',
        grado: 96
    },
    {
        id: 250 ,
        nome:'Andrea Mantegna',
        grado: 48 
    },
    {
        id: 145 ,
        nome:'Gaia Borromini',
        grado: 74   
    },
    {
        id: 196  ,
        nome:'Luigi Grimaldello ',
        grado: 68
    },
    {
        id: 102 ,
        nome:'Luigi Grimaldello ',
        grado: 50
    },
    {
        id: 120,
        nome:'Francesca da Polenta',
        grado: 84
    }
]