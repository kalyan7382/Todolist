import React, { useState } from 'react';

function AddEmp() {
    const [ formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        city:'',
    });
    
    const handleChange = (e) => {
        const {name , value} = e.target;        
        setFormData ({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = 'http://localhost:5000/employees/employee/add-emp';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response)=> response.json())
        .then((data)=> {
            console.log('Data posted:',data);

            setFormData({
                name:'',
                email:'',
                phone:'',
                city:'',
            });
        })
        .catch((error)=>{
            console.error('Error posting Data:',error);
        });
    };
    
    return(
        <div>
        <center>
            <h2>Employee Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
               <button type="submit">Submit</button>
            </form>
        </center>
    </div>
    )
    
}

export default AddEmp;