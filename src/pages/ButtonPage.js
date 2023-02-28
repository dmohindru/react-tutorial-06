import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
function ButtonPage() {
    const handleClick = () => {
        
    }
    return <div>
        <div>
            <Button secondary outline rounded className="mb-5" onClick={handleClick}>
                <GoCloudDownload />
                Hi There!!
            </Button>
            {
            /* Below statement is equivelent to the above one*/ 
            /*<Button success={true} primary={true} rounded={true} outline={true}>Hi There!!</Button> */
            }
        </div>
        <div>
            <Button danger outline onMouseEnter={handleClick}>
                <GoBell />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning onMouseLeave={handleClick}>
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

export default ButtonPage;