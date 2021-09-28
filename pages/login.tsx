import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginModel } from '../models/login';
import { AccountService } from '../services/loginService';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginModel>();
  
    const onSubmit: SubmitHandler<LoginModel> = data => AccountService.login(data).then( res => {
      if (res.status === 200){
        // handle success maybe show a toast
        console.log('success')
      }else{
        // handle failure maybe show a toast
        console.log('failure')
      }
    })
    .catch( () => {
      // handle failure maybe show a toast
      console.log('failure')
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
          {errors.email && <span>this field is required</span>}      
        <input type="text" placeholder="Password" {...register("password", {required: true, min: 8})} />
          {errors.email && <span>this field is required</span>}      
        <input type="submit" />
      </form>
    );
}

export default Login
