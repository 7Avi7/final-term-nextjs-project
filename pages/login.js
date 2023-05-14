import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';


export default function Login(){

    const [show, setShow] = useState(false)
    const router = useRouter()
    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate : login_validate,
        onSubmit
    })

    /**
     * haleykennedy@gmail.com
     * admin123
     */

    async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })

        if(status.ok) router.push(status.url)
        
    }

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : "http://localhost:3000"})
    }

    // Github Login 
    async function handleGithubSignin(){
        signIn('github', { callbackUrl : "http://localhost:3000"})
    }

    return (
        <Layout>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Game Distribution</h1>
                <p className='w-3/4 mx-auto text-gray-400'>If you don't play Game,then your life is meaningless.</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                   
                </div>
                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                   
                </div>

                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}
                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGithubSignin} className={styles.button_custom}>
                        Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link href={'/register'} legacyBehavior><a className='text-blue-700'>Sign Up</a></Link>
            </p>
        </section>

        </Layout>
    )
}

// import Head from "next/head"
// import Layout from '../layout/layout'
// import Link from 'next/link'
// import styles from '../styles/Form.module.css'
// import Image from "next/image"
// import { HiAtSymbol,HiFingerPrint } from "react-icons/hi";
// import { useState } from "react"
// import {signIn, signOut } from "next-auth/react"
// import React from 'react'
// import { useFormik } from 'formik';
// import login_validate from '../lib/validate'
// // import { values } from '../utils/values';


// export default function Login (){

//     const[show,setShow] = useState(false);
    
//     // Formik Hook
//     const formik = useFormik({
//         initialValues:{
//             email:'',
//             password:''
//         },
//         validate:login_validate,
//         onSubmit
        
//     })

//     console.log(formik.errors)

//     async function onSubmit(values){
//         console.log(values)
//     }

//     // Google Handler Function
//     async function handleGoogleSignin(){
//         signIn('google',{callbackUrl:"http://localhost:3000"})
//     }
//     // Github Login
//     async function handleGithubSignin(){
//         signIn('github',{callbackUrl:"http://localhost:3000"})
//     }

//     return(
//         <Layout>
//             <Head>
//                 <title>Login</title>
//             </Head>

//             <section className="w-3/4 mx-auto flex flex-col gap-10">
//                 <div className="title">
//                     <h1 className="text-gray-800 text-4xl font-bold py-4">Game Distribution</h1>
//                     <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur</p>
//                 </div>

//                 {/* Form */}
                
//                 {/* onChange={formik.handleChange} value={formik.values.email} */}
//                 <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
//                     <div className={styles.input_group}>
//                         <input {...formik.getFieldProps('email')} className={styles.input_text} type="email" name="email" placeholder="Email"/>
//                         <span className="icon flex items-center px-4"><HiAtSymbol size={25}/></span>
                        
//                     </div>
//                     {formik.errors.email && formik.touched.password?<span className="text-rose-500">{formik.errors.email}</span>:<></>}
//                     <div className={styles.input_group}>

//                         <input {...formik.getFieldProps('password')} className={styles.input_text} type={`${show?"text":"password"}`} name="password" placeholder="Password"/>
//                         <span className="icon flex items-center px-4" onClick={() => setShow(!show)}><HiFingerPrint size={25}/></span>
                        
//                     </div>
//                     {formik.errors.password && formik.touched.password?<span className="text-rose-500">{formik.errors.password}</span>:<></>}


//                     {/* Login Button */}
//                     <div className="input-button">
//                         <button className={styles.button} type="submit">Login</button>
//                     </div>
//                     {/* <div></div>
//                     <div></div>
//                     <div></div> */}
//                     <div className="input-button">
//                         <button onClick={handleGoogleSignin} className={styles.button_custom} type="button"> Sign in with Google <Image src={'/assets/google.svg'} width={20} height={20}></Image> </button>
//                     </div>
//                     <div className="input-button">
//                         <button onClick={handleGithubSignin} className={styles.button_custom} type="button"> Sign in with GitHub <Image src={'/assets/github.svg'} width={30} height={30}></Image> </button>
//                     </div>
//                 </form>
//                     {/* bottom */}
//                     <p className="text-center text-gray-400">
//                         Don't have an account? <Link href={'/register'} legacyBehavior><a className="text-blue-700">Sign Up</a></Link>
//                     </p>
//             </section>
            
        
//         </Layout>
//     )
// }