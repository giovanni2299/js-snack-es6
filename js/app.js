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