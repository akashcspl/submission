import React from 'react';

export default function DisplayPeople({ list }) {
  if (!list) {
    return <h2>Data was shot by Tuco Salamanca.</h2>;
  }

  // Detect if `list` is a single person or an object of people
  // A single person has `name`, `profession`, etc.
  // The full People object has keys like "josuke", "dio", etc.
  const isSinglePerson =
    list.hasOwnProperty('name') &&
    list.hasOwnProperty('profession') &&
    list.hasOwnProperty('location');

  // Normalize to an array so rendering works in both cases
  const peopleArray = isSinglePerson ? [list] : Object.values(list);

  return (
    <div>
      {peopleArray.map(person => (
        <div key={person.name} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{person.name}</h2>
          <p><strong>Profession:</strong> {person.profession}</p>
          <p><strong>Location:</strong> {person.location}</p>
          <p><em>"{person.line}"</em></p>
          <p><strong>Source:</strong> {person.source}</p>
        </div>
      ))}
    </div>
  );
}
