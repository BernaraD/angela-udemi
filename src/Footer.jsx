import React from 'react';
import './styles.css';


function App() {

    const currentYear = new Date().getFullYear()

    return (
        <div className="footer">

            <p className="footer p">
                Copyright © {currentYear}
            </p>

        </div>
    );
}

export default App;
