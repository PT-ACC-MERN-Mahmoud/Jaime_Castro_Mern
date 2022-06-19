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
                    {firstName.length < 2 && firstName.length > 0 ? <p>Must be at least 2 characters long</p> : null}
                
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                    {lastName.length < 2  && lastName.length > 0 ? <p>Must be at least 2 characters long</p> : null}
                
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                    {email.length < 5  && email.length > 0 ? <p>Email must be at least 5 characters long</p> : null}
                
                <div>
                    <label>Password</label>
                    <input type="text" name="password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                    {password.length < 8  && password.length > 0 ? <p>Password must be at least 8 characters long</p> : null}
                
                <div>
                    <label>Confirm Password</label>
                    <input type="text" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                    {confirmPassword !== password ? <p>Password does not match</p> : null}
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
