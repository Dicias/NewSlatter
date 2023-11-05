export const emailValidation = (): boolean | string =>{
    const email = document.getElementById('email') as HTMLInputElement;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(email.value.match(emailRegex)){
        return email.value;
    }else{
        
        return true;
    }
}
