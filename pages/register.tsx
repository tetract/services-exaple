import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterModel } from '../models/login';
import { AccountService } from '../services/loginService';

const Register:React.FC = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterModel>();

    // man nevisai patinka šitas SubmitHandler, nes nepatikrina ar tikrai passini visus value,
    // kuriuos sakai, kad jam passini
    const onSubmit:SubmitHandler<RegisterModel> = data => AccountService.register(data).then( res => {
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
         
         <input type="text" placeholder="First name" {...register("firstname", { required: true, maxLength: 80})} />
        {errors.firstname && <span>this field is required</span>}
        <input type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100})} />
        {errors.lastname && <span>this field is required</span>}
        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i})} />
        {errors.email && <span>this field is required</span>}
        <input type="text" placeholder="Password" {...register("password", { required: true, min: 8})} />
        {errors.password && <span>this field is required</span>}<input type="submit" />
      </form>
    );
}

export default Register
