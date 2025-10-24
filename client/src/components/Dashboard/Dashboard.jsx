import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/forms');
      setForms(res.data);
    } catch (err) {
      console.error('Error fetching data', err);
    }
  };

  const handleFinish = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/forms/${id}/complete`);
      fetchForms(); // Refresh data after update
    } catch (err) {
      console.error('Error updating form', err);
    }
  };

  const pendingForms = forms.filter(f => f.status.toLowerCase() !== 'completed');
  const completedForms = forms.filter(f => f.status.toLowerCase() === 'completed');

  // Helper to format date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className='Dashboardcont'>
      <div className="cards">
        <div className="card">
          <h3>Pending Task</h3>
          <p>{pendingForms.length}</p>
        </div>
        <div className="card">
          <h3>Completed Task</h3>
          <p>{completedForms.length}</p>
        </div>
        <div className="card">
          <h3>Total</h3>
          <p>{forms.length}</p>
        </div>
      </div>

      <div className="pendingtable">
        <h3>Pending Approvals</h3>
        <table>
          <thead>
            <tr>
              <th>Driver ID</th>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Bus No</th>
              <th>Applied Date</th>
              <th>Problems</th>
              <th>Other Problem</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingForms.length === 0 ? (
              <tr><td colSpan="10">No pending approvals</td></tr>
            ) : (
              pendingForms.map((form) => (
                <tr key={form._id}>
                  <td>{form.driverId}</td>
                  <td>{form.fullName}</td>
                  <td>{form.mobileNumber}</td>
                  <td>{form.busNumber}</td>
                  <td>{formatDate(form.dateOfApplying)}</td>
                  <td>{form.problems.join(', ')}</td>
                  <td>{form.otherProblem}</td>
                  <td>{form.description}</td>
                  <td>{form.status}</td>
                  <td>
                    <button onClick={() => handleFinish(form._id)}>Finished</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="historytable">
        <h3>Completed Tasks</h3>
        <table>
          <thead>
            <tr>
              <th>Driver ID</th>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Bus No</th>
              <th>Applied Date</th>
              <th>Problems</th>
              <th>Other Problem</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {completedForms.length === 0 ? (
              <tr><td colSpan="9">No completed tasks</td></tr>
            ) : (
              completedForms.map((form) => (
                <tr key={form._id}>
                  <td>{form.driverId}</td>
                  <td>{form.fullName}</td>
                  <td>{form.mobileNumber}</td>
                  <td>{form.busNumber}</td>
                  <td>{formatDate(form.dateOfApplying)}</td>
                  <td>{form.problems.join(', ')}</td>
                  <td>{form.otherProblem}</td>
                  <td>{form.description}</td>
                  <td>{form.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
