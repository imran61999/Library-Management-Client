import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth()
const AuthProviders = ({children}) => {
    const [user, setUser] = useState();

    const authInfo ={ user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;