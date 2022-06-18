import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
    
        e.preventDefault();
    
        const newUser = { 
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            password: password,
            confirmPassword: confirmPassword,
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p> First Name: { firstName } </p>
                <p> Last Name: { lastName } </p>
                <p> Email: { email } </p>
                <p> Password: { password } </p>
                <p> Confirm Password: { confirmPassword } </p>
            </div>
        </div>
    );
};
    
export default UserForm;
