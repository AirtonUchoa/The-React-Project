import Header from './Components/1_Header/Header'
import Forms from './Components/2_Forms/Forms'
// import BlocksComponent from './Components/3_Blocks/Blocks'
import Http from './Components/4_Http/Http'

import './App.css'

function App() {

  return (
    <>
      <body>
          <Header/>
            
          <main>

            <Http/>
            
            <Forms/>

            {/* <BlocksComponent/> */}
            
            
          </main>
        
      </body>
    </>   
  );
};

export default App
