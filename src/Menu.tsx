import React from 'react';
import { StudentData } from './types';

type MenuProps = {
    data: StudentData[];
    setSelectedId: (id: number) => void;
};

function Menu({ data, setSelectedId }: MenuProps) {
    const sortedData = [...data].sort((a, b) => b.dropoutProbability - a.dropoutProbability);

    return (
        <div>
            {sortedData.map(student => (
                <div key={student.id} onClick={() => setSelectedId(student.id)}>
                    {student.id} - {student.dropoutProbability}
                </div>
            ))}
        </div>
    );
}

export default Menu;