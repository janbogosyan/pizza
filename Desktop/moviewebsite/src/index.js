import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//стартовата точка на всеки react js app
//тук имаме ReactDOM който се вика само веднъж в целия react app
//той създава корени(createRoot) взима елемента по id и рендерира
//в компонента който сме задали да е главен в случая <App/>
//той рендерира нашия application в реалния DOM или по специфично в div с id='root'
//който div се намира в /public/index.html
// и естествено <App/> е нашия главен компонент който е functional component 
//и връща JSX 



