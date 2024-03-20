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



//fatto col forMap

const upperNameLetters = classMember.map((elemento) => {
    return{
        id: elemento.id,
        nome: elemento.nome.toUpperCase(),
        grado: elemento.grado,
    } 
        
})

console.log(upperNameLetters)


// function capitalize(string){
//     let newString = string.toUpperCase()

//     return newString;
// }

// const upperName = []
// classMember.forEach((el) =>  {
//     const nameUpper = el.nome.toUpperCase()
//     upperName.push(nameUpper)
// })

// console.log(upperName)


//creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
let sdutentsOver70 = classMember.filter((el) => el.grado > 70)
console.log(sdutentsOver70);
//creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
let studentsNiceId = classMember.filter((el) => el.grado > 70 && el.id > 120)
console.log(studentsNiceId);

/*

SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

*/

//creaiamo un array di bici
const bikes = [
    {
        nome: 'Hiland', 
        peso: 6
    },
    {
        nome:'Galano',
        peso: 8
    },
    {
        nome: 'Mu',
        peso: 7
    },
    {
        nome: 'Hiland Racing',
        peso: 10
    },
    {
        nome: 'Hiland Racing',
        peso: 9
    },
    {
        nome: 'Graziella',
        peso: 8
    }
];


let pesoMin;
let IndexWhitPesoMin;
for(let i = 0; i < bikes.length; i++){
    const bike = bikes[i]
    const { peso } = bike;
    if(i === 0){
        pesoMin = peso;
        IndexWhitPesoMin = 0;
    }else if(peso < pesoMin){
        pesoMin = peso;
        IndexWhitPesoMin = i;
    }
}

console.log(bikes[IndexWhitPesoMin]);


//trovare quella che pesa di meno 
// const copyBikesPeso = bikes.map((element) => {
//     return{
//         peso: element.peso
//     }
// })

// console.log(copyBikesPeso)




/*
SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const soccerTeam = [
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0
    },
    
]

console.log(soccerTeam)


for(let j = 0; j < soccerTeam.length; j++){
    const singleclub = soccerTeam[j]
    //creo un generatore di punti random 
    singleclub.punti = Math.floor(Math.random() * 115);
    //creo un generatore di falli random
    singleclub.falli = Math.floor(Math.random() * 200);
}
// console.log(soccerTeam)


// soccerTeam.forEach((el) =>{
//     const singleTeam = el;
//     singleTeam.points = randomPonits;
//     singleTeam.falli = randomFaul;
//     console.log(el.nome, singleTeam.falli, 'falli')
// })


const newSoccerTeam = soccerTeam.map((club) => {
    const {nome, falli} = club
    return{
        nome,
        falli
    }
})

console.log(newSoccerTeam);
