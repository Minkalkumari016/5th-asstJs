import './App.css';
import './components/Style.css'; 
import { StudentProvider } from './components/StudentContext';
import Header from './components/Header';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import AddStudents from './components/AddStudents';
import Edit from './components/Edit';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <StudentProvider>
          <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/addStudent" element={<AddStudents/>}/>
                <Route path='/edit/:studentId' element={<Edit/>}/>
              </Routes>
          </Router>
    </StudentProvider>
    </div>
  );
}

export default App;