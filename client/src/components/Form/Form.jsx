import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    driverId: '',
    fullName: '',
    mobileNumber: '',
    busNumber: '',
    dateOfApplying: '',
    problems: [],
    otherProblem: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedProblems = [...formData.problems];

    if (checked) updatedProblems.push(value);
    else updatedProblems = updatedProblems.filter(item => item !== value);

    setFormData({ ...formData, problems: updatedProblems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/form/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.success) {
      alert('Form Submitted Successfully');
      setFormData({
        driverId: '',
        fullName: '',
        mobileNumber: '',
        busNumber: '',
        dateOfApplying: '',
        problems: [],
        otherProblem: '',
        description: ''
      });
    } else {
      alert('Error submitting form');
    }
  };

  return (
    <form className="formcont" onSubmit={handleSubmit}>
      <div className="formhead">
        <h2>Bus Transportation Form</h2>
      </div>

      <div className="forminputs">
        <div className="forminput">
          <h4>Driver ID :</h4>
          <input type="text" name="driverId" value={formData.driverId} onChange={handleChange} placeholder="Enter your Driver ID" required />
        </div>

        <div className="forminput">
          <h4>Full Name :</h4>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your Name" required />
        </div>

        <div className="forminput">
          <h4>Mobile number :</h4>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your Mobile Number" required />
        </div>

        <div className="forminput">
          <h4>Bus Number :</h4>
          <input type="number" name="busNumber" value={formData.busNumber} onChange={handleChange} placeholder="Enter the Bus Number" required />
        </div>

        <div className="forminput">
          <h4>Date of Applying :</h4>
          <input type="date" name="dateOfApplying" value={formData.dateOfApplying} onChange={handleChange} required />
        </div>

        <div className="forminput">
          <h4>Problem of the Bus :</h4>
          <label>
            <input type="checkbox" value="Oil Leakage" onChange={handleCheckboxChange} checked={formData.problems.includes('Oil Leakage')} /> Oil Leakage
          </label>
          <label>
            <input type="checkbox" value="Engine Failure" onChange={handleCheckboxChange} checked={formData.problems.includes('Engine Failure')} /> Engine Failure
          </label>
          <label>
            <input type="checkbox" value="Brake Issue" onChange={handleCheckboxChange} checked={formData.problems.includes('Brake Issue')} /> Brake Issue
          </label>
          <label>
            Others:
            <input type="text" name="otherProblem" value={formData.otherProblem} onChange={handleChange} />
          </label>
        </div>

        <div className="forminput">
          <h4>Description (reason for the damage):</h4>
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        </div>
      </div>

      <div className="formsub">
        <button type="submit" className="formsubbut">Submit</button>
      </div>
    </form>
  );
};

export default Form;
