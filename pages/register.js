import Head from "next/head"
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import Image from "next/image"
import { HiAtSymbol,HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react"
import { useFormik } from "formik";
import {registerValidate} from '../lib/validate'



export default function Register (){

    const[show,setShow] = useState({password:false, cpassword:false});


    const formik=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:"",
            cpassword:""
            
        },
        validate:registerValidate,
        onSubmit
        
    })

    async function onSubmit(values){
        console.log(values)
    }


    return(
        <Layout>
            <Head><title>Register</title></Head>
            
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
                    <p className="w-3/4 mx-auto text-gray-400">If you don't play Game,then your life is meaningless.</p>
                </div>

                {/* Form */}

                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input {...formik.getFieldProps('username')} className={styles.input_text} type="text" name="username" placeholder="Username"/>
                        <span className="icon flex items-center px-4"><HiOutlineUser size={25}/></span>
                    </div>
                    {formik.errors.username && formik.touched.password?<span className="text-rose-500">{formik.errors.username}</span>:<></>}
                    
                    <div className={styles.input_group}>
                        <input {...formik.getFieldProps('email')} className={styles.input_text} type="email" name="email" placeholder="Email"/>
                        <span className="icon flex items-center px-4"><HiAtSymbol size={25}/></span>
                    </div>
                    {formik.errors.email && formik.touched.password?<span className="text-rose-500">{formik.errors.email}</span>:<></>}

                    <div className={styles.input_group}>

                        <input {...formik.getFieldProps('password')} className={styles.input_text} type={`${show.password?"text":"password"}`} name="password" placeholder="Password"/>
                        <span className="icon flex items-center px-4" onClick={() => setShow({...show,password: !show.password})}><HiFingerPrint size={25}/></span>
                    </div>
                    {formik.errors.password && formik.touched.password?<span className="text-rose-500">{formik.errors.password}</span>:<></>}

                    <div className={styles.input_group}>

                        <input {...formik.getFieldProps('cpassword')} className={styles.input_text} type={`${show.cpassword?"text":"password"}`} name="cpassword" placeholder=" Confirm Password"/>
                        <span className="icon flex items-center px-4" onClick={() => setShow({...show,cpassword: !show.cpassword})}><HiFingerPrint size={25}/></span>
                    </div>
                    {formik.errors.cpassword && formik.touched.password?<span className="text-rose-500">{formik.errors.cpassword}</span>:<></>}


                    {/* Login Button */}
                    <div className="input-button">
                        <button className={styles.button} type="submit">Login</button>
                    </div>
                   
                </form>
                    {/* bottom */}
                    <p className="text-center text-gray-400">
                        Have an account? <Link href={'/login'} legacyBehavior><a className="text-blue-700">Sign In</a></Link>
                    </p>
            </section>
        
        </Layout>
    )
}