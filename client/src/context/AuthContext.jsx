import { createContext, useState } from "react";

export const AuthContext = createContext({
    isSignUp: false,
    setIsSignUp: () => { },
    showAuthOverlay: false,
    setShowAuthOverlay: () => { },
});

export const AuthContextProvider = ({ children }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showAuthOverlay, setShowAuthOverlay] = useState(false)

    return <AuthContext.Provider value={{ isSignUp, setIsSignUp, showAuthOverlay, setShowAuthOverlay }}>
        {children}
    </AuthContext.Provider>

}