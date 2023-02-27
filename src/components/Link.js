import classNames from 'classnames';
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({to, children}) {
    const {navigate} = useContext(NavigationContext);

    const classess = classNames('text-blue-500');

    const handleClick = (event) => {
        if (event.metaKey || event.crtlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };
    
    return <a className={classess} href={to} onClick={handleClick}>{children}</a>
}

export default Link;