import React from 'react';
import {useHistory} from 'react-router-dom';

function Login() {
const history = useHistory();
    function handelClick() {
       history.push("/overzicht");
    }
    return (
        <div>
            <button onClick={handelClick}
                    type="button">
                Inloggen
            </button>
        </div>
    );
};


export default Login;