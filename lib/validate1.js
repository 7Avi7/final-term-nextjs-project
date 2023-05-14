
export default function login_validate(values){
    const errors = {};

    // Validation for email
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    // Validation for password
    //   if(!values.password){
    //     errors.password='Required';
    //   }else if(values.password.length < 8 || values.password.length > 20){
    //     errors.password=" Must be greater than eight and less than 20 characters long";
    //   }else if(values.password.includes("")){
    //     errors.password = "Invalid Password";
    //   }

    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length <= 7) {
        errors.password = 'Must be 8 characters or less';
      }

      return errors;

}


export function registerValidate(values){
    const errors = {};

    // validation for Username
    // if(values.username){
    //     errors.username="Required";
    // }else if (values.username.includes("")){
    //     errors.username="Invalid Username...!"
    // }

    if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
      }

    // Validation for email
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    // Validation for password

    //   if(!values.password){
    //     errors.password='Required';
    //   }else if(values.password.length < 8 || values.password.length > 20){
    //     errors.password=" Must be greater than eight and less than 20 characters long";
    //   }else if(values.password.includes("")){
    //     errors.password = "Invalid Password";
    //   }

    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length <= 7) {
        errors.password = 'Must be 8 characters or less';
      }

    // if (!values) {
    //     errors.password = 'Password is required';
    //   } else if (values.password.length < 8 || values.password.length > 20) {
    //     errors.password = 'Password must be at least 8 characters long';
    //   } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(values)) {
    //     errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one digit';
    //   }
    //   else if(values.password.includes("")){
    //         errors.password = "Invalid Password";
    //       }


   




    // Validation for confirm password


    //   if(!values.cpassword){
    //     errors.cpassword='Required';
    //   }else if(values.password !== values.cpassword){
    //     errors.cpassword=" Password not Matched...!";
    //   }else if(values.cpassword.includes("")){
    //     errors.cpassword = "Invalid Confirm Password";
    //   }


      if(!values.cpassword){
        errors.cpassword='Required';
      }else if(values.password !== values.cpassword){
        errors.cpassword=" Password not Matched...!";
      }else if(values.cpassword.includes("")){
        errors.cpassword = "Password Matched";
      }

      return errors;
}