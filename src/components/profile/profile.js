import React from "react";
import { useContext } from "react";
import { userContexts } from "../../contexts/userContexts";

function Profile(){

    const {login} = useContext(userContexts);

    return (
    <div>
        {login? 'dados do usuário' : 'Faça o seu login para ter acesso as informações'}
        
    </div>
    )
}

export default Profile