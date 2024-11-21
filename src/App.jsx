import BlocksComponent from './Components/Blocks'
import './App.css'

function App() {
  const block01 = document.querySelector('#block-01');
  const block02 = document.querySelector('#block-02');



  block01.addEventListener('mouseover', function(){
    block01.style.backgroundColor = "blue";
    block02.style.backgroundColor = "white";
  });

  block02.addEventListener('mouseover', function(){
    block02.style.backgroundColor = "red";
    block01.style.backgroundColor = "white";
  });


  return (
    <>
      <header>
        <h2>The React Project</h2>
        <img src='.\src\assets\react.webp' class='logo-style'/>
      </header>

      <body id='body-styles-id'>
        <BlocksComponent/>
      </body>
    </>
  );
};

export default App
