import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordianPage from './pages/AccordianPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
    return( 
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
        <Sidebar />
        <div className='col-span-5'>
            <Route path="/accordion">
                <AccordianPage />
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>
        </div>
    </div>);
    
}

export default App;