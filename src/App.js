import React from 'react';
import './App.css';
import { useFormik } from 'formik';
 const validate = values => {
     const errors = {};
    if (!values.firstname)
    {
        errors.firstname = `*Required`;
    }
     if (!values.lastname)
    {
         errors.lastname = `*Required`;
     }
    if (!values.email)
    {
        errors.email = `*Required`;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))
    {
        errors.email='*Invalid Email'
    }
    if (!values.pwd)
    {
        errors.pwd = '*Required';
    }
    else if (values.pwd.length < 5)
    {
        errors.pwd = `*Must be greater than 5 character`;
    }
     else if (values.pwd.length > 10)
    {
        errors.pwd = `*Must be less than 10 character`;
    }
    if (!values.confirmpwd)
    {
        errors.confirmpwd = '*Required';
    }
    else if (values.confirmpwd!==values.pwd)
    {
        errors.confirmpwd = `*Mismatch the pasword`;
    }
    return errors;
    
    
 }

const App=()=> {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            pwd: '',
            confirmpwd:'',
            
        },//separate with comma
        validate,
        onSubmit:values => {
            alert(`Hey ${formik.values.firstname} your registration is successfull!!!`)
            console.log(formik.values);
            
        }
    })
   
    console.log(formik.values)
    return (
        <div className='main'>
            <div className='signup'>
                <h1>Sign Up</h1>
                <form onSubmit={formik.handleSubmit}>
                    <input type='text' placeholder='Enter Firstname..' name='firstname' autoComplete='off' onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur}></input>
                    {
                        formik.touched.firstname && formik.errors.firstname ?<span>{formik.errors.firstname}</span>:null
                    
                    }
                  
                    {
                        console.log("mdhsjdfh")
                    }
                    <input type='text' placeholder='Enter Lastname..' name='lastname' autoComplete='off' onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}></input>

                    {
                       formik.touched.lastname && formik.errors.lastname ?<span>{formik.errors.lastname}</span>:null
                    
                    }
                  
                    
                    <input type='text' placeholder='Enter email..' name='email' autoComplete='off' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
                
                    {
                       formik.touched.email && formik.errors.email ?<span>{formik.errors.email}</span>:null
                    
                    }

                    <input type='password' placeholder='Enter password..' name='pwd' autoComplete='off' onChange={formik.handleChange} value={formik.values.pwd} onBlur={formik.handleBlur}></input>

                 {
                        formik.touched.pwd && formik.errors.pwd ?<span>{formik.errors.pwd}</span>:null
                    
                    }

                    <input type='password' placeholder='Re-enter password..' name='confirmpwd' autoComplete='off' onChange={formik.handleChange} value={formik.values.confirmpwd} onBlur={formik.handleBlur}></input>

                  {
                        formik.touched.confirmpwd && formik.errors.confirmpwd ?<span>{formik.errors.confirmpwd}</span>:null
                    
                    }
                    
                    <input type='submit'></input>
                </form>
            </div>
        </div>
  );
}
export default App;
