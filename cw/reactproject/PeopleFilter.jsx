// PeopleFilter.jsx
import React from 'react';
import DisplayPeople from './DisplayPeople';

export default function PeopleFilter(props) {
  return (
    <div>
      <h1>People Filter</h1>

      <label htmlFor="source-select">Choose a Source:&nbsp;</label>
      <select
        id="source-select"
        value={props.selectedSource}
        onChange={e => props.setSelectedSource(e.target.value)}
      >
        <option value="All">Display All</option>
        {props.uniqueSources.map(src => (
          <option key={src} value={src}>{src}</option>
        ))}
      </select>

      <DisplayPeople list={props.filteredPeople} />
    </div>
  );
}
