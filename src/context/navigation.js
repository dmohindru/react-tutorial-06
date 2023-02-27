import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {

    // Set current path to application page visited by user
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // All this logic is to manuplate current path on the basis of navigation done by user
    // NOTE: This logic in not applicable for any hard reload done by the user
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);

        };
        window.addEventListener('popstate', handler);

        // Uninstall popstate handler
        return () => {
            window.removeEventListener('popstate', handler);
        }
    }
    , []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
}


export { NavigationProvider };
export default NavigationContext;