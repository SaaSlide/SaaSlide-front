export const checkEmail = (email) => {

    //RegEx Email
    //^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

}



export const validatePassword = () => {

    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    //"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

    

}
export const checkPassword = (password1, password2) => {

    function passwordEqual() {
        if (password1 === password2) {
            return true;
        }
        else {
            return false;
        }
    }

    

    function validatePassword() {

        // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
        //"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"



    }




    if(validatePassword(password1) && passwordEqual()) {
        return true;
    }
    else {
        return false;
    }
}

export const checkUsername = (userName) => {

    // example  = Bastian
    //^[a-zA-Z]{3,16}$

    //or
    
    // example = Bastian PEIRE
    //^[a-zA-Z]{3,16}$



}


export const checkLogin = () => {

    checkEmail
    checkPassword

}

export const checkRegister = () => {

    checkEmail
    checkPassword
    checkPassword

}