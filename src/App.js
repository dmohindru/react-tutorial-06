import Accordian from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'lkjasdf',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: '32sdfsd',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: '34f9dfglkj',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        }
    ]

    return <Accordian items={items}/>;
    
}

export default App;