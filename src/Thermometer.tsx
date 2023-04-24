import React from 'react';
import './Thermometer.css';

interface ThermometerProps {
    probability: number;
}

const Thermometer: React.FC<ThermometerProps> = ({ probability }) => {
    return (
        <div className="thermometer-container">
            <div className="thermometer">
                <div className="mercury" style={{ height: `${probability * 100}%`, backgroundColor: probability >= 0.5 ? "red" : "blue" }}></div>
            </div>
            <div>{(probability * 100).toFixed(0)}%</div>
        </div>
    );
};

export default Thermometer;