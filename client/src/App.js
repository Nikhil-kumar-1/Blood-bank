import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Loginu from './pages/auth/Loginu';
import Register from './pages/auth/Register';
function App() {
  return (
    <>
      <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/login' element={<Loginu/>} />
       <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
