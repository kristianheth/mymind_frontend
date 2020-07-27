import React, { useState } from 'react';
import LoginFormContainer from './LoginFormContainer';

const AuthenticatedContainer = ({ children }) => {
    const token = true; // undefined;

    const [ user, updateUser ] = useState({ token });

    return (
        <div className="authenticated-container">
            {/* <UserContext.Provider value={{ user: {}, logOff }}> */}

            {!user.token && <LoginFormContainer />}

            {user.token && children}

            {/* </UserContext.Provider> */}
        </div>
    );
};

export default AuthenticatedContainer;
