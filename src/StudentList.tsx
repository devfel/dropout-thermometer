import React from 'react';
import { StudentData } from './types';
import './StudentList.css';

interface StudentListProps {
    data: StudentData[];
    onSelect: (student: StudentData) => void;
}

const StudentList: React.FC<StudentListProps> = ({ data, onSelect }) => {
    const maxProb = data.reduce((max, student) => Math.max(max, student.dropoutProbability), 0);

    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Last GPA</th>
                        <th>SAT Grade</th>
                        <th>Age</th>
                        <th>Dropout Probability</th>
                        <th>Probability Bar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student.id} onClick={() => onSelect(student)}>
                            <td>{student.id}</td>
                            <td>{student.LastGPA}</td>
                            <td>{student.SATgrade}</td>
                            <td>{student.Age}</td>
                            <td>{(student.dropoutProbability * 100).toFixed(0)}%</td>
                            <td>
                                <div className="bars">
                                    <div className="prob-bar-size" style={{ width: `${(1 / maxProb) * 100}%`, backgroundColor: `rgb(177, 177, 177)` }}></div>
                                    <div className={`prob-bar ${student.dropoutProbability >= 0.5 ? 'red' : 'blue'}`} style={{ width: `${student.dropoutProbability * 100}%` }}></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;