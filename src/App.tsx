import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <p>
                    Hi! My name is [Name] and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p>This page was developed during the course &#39;Intro to React&#39; from Masters Academy in 2024.</p>
                <p>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p>You can contact me via [social network name] and check out my GitHub.</p>
            </div>
        </>
    );
}

export default App;
