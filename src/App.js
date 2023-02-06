import Button from "./Button";
function App() {
    return <div>
        <div>
            <Button success primary rounded outline>Hi There!!</Button>
            {
            /* Below statement is equivelent to the above one*/ 
            /*<Button success={true} primary={true} rounded={true} outline={true}>Hi There!!</Button> */
            }
        </div>
        <div>
            <Button>Buy Now!</Button>
        </div>
        <div>
            <Button>See Deal!</Button>
        </div>
        <div>
            <Button>Hide Ads!</Button>
        </div>
        <div>
            <Button>Something!</Button>
        </div>
    </div>;
}

export default App;