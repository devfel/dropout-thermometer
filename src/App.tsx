import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './StudentList';
import Thermometer from './Thermometer';
import data from './data.json';

function App() {
  const sortedData = [...data].sort((a, b) => b.dropoutProbability - a.dropoutProbability);
  const [selectedStudent, setSelectedStudent] = React.useState(data[0]);
  const [inputId, setInputId] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const student = data.find(student => student.id === parseInt(inputId));
    if (student) {
      setSelectedStudent(student);
    }
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Student List</Link>
            </li>
            <li>
              <Link to="/thermometer">Thermometer</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>
            <h1>Student Dropout Probability</h1>
            <StudentList data={sortedData} onSelect={setSelectedStudent} />
          </div>} />
          <Route path="/thermometer" element={<div>
            <h2>Thermometer</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Enter Student ID:
                <input type="number" value={inputId} onChange={handleInputChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
            <Thermometer probability={selectedStudent.dropoutProbability} />
            <p>Student ID: {selectedStudent.id}</p>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;