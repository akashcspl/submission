import React from 'react';

function DisplayStand({ data }) {
  return (
    <div className="stand-display">
      <h2>Stand Information</h2>
      <p><strong>Name:</strong> {data.standname}</p>
      <p><strong>Power:</strong> {data.standpower}</p>
      <p><strong>Catch Phrase:</strong> {data.catchphrase}</p>
    </div>
  );
}

export default DisplayStand;
