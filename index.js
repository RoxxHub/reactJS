import ReactDOM from 'react-dom/client';
import { Home } from './home';
import { Navbar } from './navbar';
import { About } from './about';
import { Contact } from './contact';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
</>
);
