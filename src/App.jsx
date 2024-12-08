import Header from './Components/1_Header/Header'
import BlocksComponent from './Components/2_Blocks/Blocks'
import Forms from './Components/3_Forms/Forms'

import './App.css'

function App() {
  return (
    <>
      <Header/>

      <body>
        <BlocksComponent/>
        <Forms/>
      </body>
    </>
  );
};

export default App
