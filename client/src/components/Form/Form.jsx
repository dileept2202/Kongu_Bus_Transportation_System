import React, { useState } from 'react';

const Form = () => {
    
    return (
        <div className="formcont">
            <div className="formhead">
                <h2>Bus Transporation Form</h2>
            </div>
            <div className="forminputs">
                <div className="forminput">
                <h4>Driver ID :</h4>
                <input type="text" placeholder='Enter your Driver ID' />
            </div>
            <div className="forminput">
                <h4>Full Name :</h4>
                <input type="text" placeholder='Enter your Name' />
            </div>
            <div className="forminput">
                <h4>Mobile number :</h4>
                <input type="text" placeholder='Enter your Mobile Number' />
            </div>
            <div className="forminput">
                <h4>Bus Number :</h4>
                <input type="number" placeholder='Enter the Bus Number' />
            </div>
            <div className="forminput">
                <h4>Date of Applying :</h4>
                <input type="date" />
            </div>
            <div className="forminput">
                <h4>Problem of the Bus :</h4>
                <input type="checkbox" id='oil leakage' />
                <label for="oil leakage">Oil Leakage</label>
                <input type="checkbox" id='engine failure' />
                <label for="engine failure">Engine Failure</label>
                <input type="checkbox" id='brake issue' />
                <label for="brake issue">Brake Issue</label>
                <input type="checkbox" id='oil leakage' />
                <label for="oil leakage">Oil Leakage</label>
                <input type="checkbox" id='engine failure' />
                <label for="engine failure">Engine Failure</label>
                <input type="checkbox" id='brake issue' />
                <label for="brake issue">Brake Issue</label>
                <label for="others">Others :</label>
                <input type='text'></input>
            </div>
            <div className="forminput">
                <h4>Description(reason for the damage) :</h4>
                <input type="text" placeholder='Description' />
            </div>
            </div>
            <div className="formsub">
                <button className='formsubbut'>Submit</button>
            </div>
        </div>
    )
}

export default Form;
