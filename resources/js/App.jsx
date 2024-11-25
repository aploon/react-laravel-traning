import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div>
            <h1 className='text-red-500'>Hello World from React!</h1>
            <Router>
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
