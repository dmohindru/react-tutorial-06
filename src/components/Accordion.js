import {useState} from 'react';
import { GoChevronDown, GoChevronLeft} from 'react-icons/go';
function Accordian({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    /*
    // Simple version
    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
        
    }*/

    // Function sytle to update state. See video 187
    const handleClick = (nextIndex) => {
        //console.log('STALE version of expandedIndex', expandedIndex);

        setExpandedIndex((currentExpandedIndex) => {
            //console.log('UP TO DATE version', currentExpandedIndex);
            if (currentExpandedIndex === nextIndex) {
                return -1
            } else {
                return nextIndex;
            }
        });
        
    };
    
    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;

        // conditional rendering technique
        const icon = (<span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>);

        
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );
    })
    
    
    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    );
}

export default Accordian;