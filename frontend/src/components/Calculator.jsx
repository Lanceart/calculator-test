import { useState } from 'react';
import axios from 'axios';

export default function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = async () => {
        try {
            const response = await axios.post('http://localhost:3123/api/calculator/welcome', 
                { expression: expression }, // 请求体在这里
                {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            
            setResult(response.data);
            setError(null);
        } catch (err) {
            setResult(null);
            setError('error, please recheck the expression');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
            <h1>Calculator</h1>
            <input 
                value={expression} 
                onChange={(e) => setExpression(e.target.value)} 
                placeholder="Please input expression，eg: 12 + 32"
                style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
            />
            <button onClick={handleCalculate} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                Get
            </button>
            {result !== null && <div style={{ color: 'green', fontWeight: 'bold' }}>Result: {result}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}
