
export const josuke = {
    name : 'Josuke Higashikata',
    profession : 'Kreji Diamondo',
    location : 'Morioh',
    line : 'What did you just say about my hair?!',
    source : 'JoJo'
}

export const dio = {
    name : 'Dio Brando',
    profession : 'Za Warudo',
    location : 'Egypt',
    line : 'WRYYYYYYYYYYYYYY!',
    source : 'JoJo'
}

export const giorno = {
    name : 'Giorno Giovanna',
    profession : 'Gold Experience',
    location : 'Italy',
    line : 'I, Giorno Giovanna, have a dream.',
    source : 'JoJo'
}

export const walter = {
    name : 'Walter White',
    profession : 'Meth Cook',
    location : 'Albuquerque, New Mexico',
    line : "I'm not in danger Skyler. I am the danger!",
    source : 'Breaking Bad'
}

export const saul = {
    name : 'Saul Goodman',
    profession : 'Lawyer',
    location : 'Albuquerque, New Mexico',
    line : 'Did you know you have rights?',
    source : 'Breaking Bad'    
}

export const ned = {
    name : 'Eddard Stark',
    profession : 'Lord of Winterfell',
    location : 'Winterfell',
    line : 'Winter is coming.',
    source : 'Game of Thrones'
}

export const allPeople = [josuke, dio, giorno, walter, saul, ned];

export const uniqueSources = Array.from(
  new Set(allPeople.map(person => person.source))
);
