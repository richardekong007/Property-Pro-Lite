import jwt from 'jsonwebtoken';


class Authenticator{

    static isExpired(){
        const token = !(localStorage.getItem("token"))? "" : localStorage.getItem("token");
        if (token === "") return;
        try{
            const {exp} = jwt.decode(token);
            return (Date.now() >= exp * 1000);
        }catch(err){
            console.log(err);
            return;
        }
    }
}

export default Authenticator;