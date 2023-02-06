import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
function App() {
    return <div>
        <div>
            <Button secondary outline rounded>
                <GoCloudDownload />
                Hi There!!
            </Button>
            {
            /* Below statement is equivelent to the above one*/ 
            /*<Button success={true} primary={true} rounded={true} outline={true}>Hi There!!</Button> */
            }
        </div>
        <div>
            <Button danger outline>
                <GoBell />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary outline>
                Hide Ads!
            </Button>
        </div>
        <div>
            <Button primary rounded>
                Something!
            </Button>
        </div>
    </div>;
}

export default App;