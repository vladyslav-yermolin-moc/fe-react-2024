import { HeaderComponent } from './components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <div className="home">
                Hi! My name is [Name] and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like React,
                HTML, CSS, JavaScript and Git version control system. This page was developed during the course &apos;Intro to React&apos;
                from Masters Academy in 2024. This is a social project from MOCG company where I got an opportunity to work with Frontend
                mentors and to create my own small project for the portfolio. You can contact me via [social network name] and check out my
                GitHub.
            </div>
        </>
    );
}

export default App;
