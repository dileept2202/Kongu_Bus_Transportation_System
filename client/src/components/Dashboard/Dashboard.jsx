import React from 'react'

const Dashboard = () => {
  return (
    <div className='Dashboardcont'>
        <div className="cards">
            <div className="card">
                <h3>Pending Task</h3>
                <p>3</p>
            </div>
            <div className="card">
                <h3>Completed Task</h3>
                <p>2</p>
            </div>
            <div className="card">
                <h3>Total</h3>
                <p>2</p>
            </div>
        </div>
        <div className="pendingtable">
            <h3>Pending Approvals</h3>
            <table>
                <thead>
                    <th>Sign No:</th>
                    <th>Applied Date:</th>
                    <th>Bus No:</th>
                    <th>Driver ID:</th>
                    <th>Problem Of the Bus:</th>
                    <th>Status:</th>
                    <th>Action:</th>
                </thead>
                <tbody>
                    <td></td>
                </tbody>
            </table>
        </div>
        <div className="historytable">
            <h3>Completed Tasks</h3>
            <table>
                <thead>
                    <th>Sign No:</th>
                    <th>Applied Date:</th>
                    <th>Bus No:</th>
                    <th>Driver ID:</th>
                    <th>Problem Of the Bus:</th>
                    <th>Status:</th>
                </thead>
                <tbody>
                    <td></td>
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default Dashboard
