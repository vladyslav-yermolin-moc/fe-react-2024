import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <div className="left">
                    <h1>About me</h1>
                    <p>
                        Hi! My name is [Name] and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                        React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p>This page was developed during the course &#39;Intro to React&#39; from Masters Academy in 2024.</p>
                    <p>This is a small project for the portfolio.</p>
                    <p>You can contact me via [social network name] and check out my GitHub.</p>
                </div>
                <div className="right">
                    <img src="./octocat.png" alt="Octocat" className="about-img" />
                </div>
            </div>
        </>
    );
}

export default App;
