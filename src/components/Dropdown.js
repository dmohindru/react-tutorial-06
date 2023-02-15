import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';
function Dropdown({ options, value, onChange }) {

    // declare state to be used by this component
    const [isOpen, setIsOpen] = useState(false);
    
    // useRef is used to get reference to a particular instance of dropdown which is used in
    // useEffect function to determine if click was made outside of dropdown
    const divEl = useRef();

    //Logic to for using useEffect is to facilate closing of dropdown if we click 
    //any were on page outside of dropdown.
    useEffect(() => {

        // HTML dom will provide with event object whenever a click is made a page
        const handler = (event) => {

            // Do nothing if this instance of component not visible on screen
            if (!divEl.current) {
                return;
            }
            
            // Set isOpen state to false if click was made outside of dropdown 
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // install handler function for click event
        document.addEventListener('click', handler, true);

        // uninstall handler function whenever this instance of dropdown component
        // is distroyed
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        // Close Dropdown
        setIsOpen(false);
        // What option did the user click on
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)}
        key={option.value}>
            {option.label}
        </div>
    })
    
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;