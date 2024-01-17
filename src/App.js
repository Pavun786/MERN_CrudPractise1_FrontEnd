import logo from './logo.svg';
import './App.css';
import Form from './Form';
import GetData from './GetData';
import { Route, Routes } from 'react-router-dom';
import EditData from './EditData';
import GetSingleData from './GetSingleData';
import Register from './Register';
import Container from './Container';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import ProtectedRoute from './ProtectedRoute';



function App() {
  return (
    <div className="App">
      <div className='container'>
      
   <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        <Route path='/:id/:token' element={<ResetPassword/>}/>
        <Route path='/container' element={
        <ProtectedRoute>
        <Container/>
        </ProtectedRoute>
        }>
          <Route path='create' element={<Form/>}/>
         <Route path='edit/:id' element={<EditData/>}/>
         <Route path='get/:id' element={<GetSingleData/>}/>
        </Route>
      </Routes>

</div>
     
    </div>
  );
}

export default App;
