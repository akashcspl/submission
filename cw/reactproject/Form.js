import React, { useState, useRef } from 'react';
import DisplayStand from './DisplayStand';
import './App.css';

function Form() {
  // Form fields state
  const [formData, setFormData] = useState({
    standname: '',
    standpower: '',
    catchphrase: ''
  });

  // For displaying submitted data in child
  const [submittedData, setSubmittedData] = useState(null);

  // Ref to the first textarea (to reset focus)
  const firstFieldRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Pass data to child
    setSubmittedData(formData);

    // 2️⃣ Show an alert with the submitted data
    alert(
      `Stand Submitted!\n\n` +
      `Name: ${formData.standname}\n` +
      `Power: ${formData.standpower}\n` +
      `Catch Phrase: ${formData.catchphrase}`
    );

    // 3️⃣ Clear the form
    setFormData({
      standname: '',
      standpower: '',
      catchphrase: ''
    });

    // 4️⃣ Refocus first input
    firstFieldRef.current.focus();
  };

  return (
    <div>
      <form className="myform" onSubmit={handleSubmit}>
        <h3>Stand Name:</h3>
        <textarea
          name="standname"
          placeholder="Za Warudo"
          value={formData.standname}
          onChange={handleChange}
          ref={firstFieldRef}
        />

        <h3>Stand Power:</h3>
        <textarea
          name="standpower"
          placeholder="Stops Time"
          value={formData.standpower}
          onChange={handleChange}
        />

        <h3>Catch Phrase:</h3>
        <textarea
          name="catchphrase"
          placeholder="MUDA MUDA MUDA MUDA"
          value={formData.catchphrase}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Submit Stand</button>
      </form>

      {/* Show DisplayStand only if there’s submitted data */}
      {submittedData && <DisplayStand data={submittedData} />}
    </div>
  );
}

export default Form;
