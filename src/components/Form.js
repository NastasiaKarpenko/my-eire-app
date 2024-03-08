 import React, { useState } from 'react';

function Form() {
 
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      selectedOption: '',
      message: 'Please fill the form down bellow'
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
        message = 'Thank you for your request! We will contact you during next 24 hours';
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Name
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Enter your Last Name
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Your mobile number
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Enter your email
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        
        <label>
        What adventure you prefear to be first
          <select name="selectedOption" value={formData.selectedOption} onChange={handleChange}>
            <option value="">What</option>
            <option value="option1">Опція 1</option>
            <option value="option2">Опція 2</option>
            <option value="option3">Опція 3</option>
          </select>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    );
  
  }
  
  export default Form;