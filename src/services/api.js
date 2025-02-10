const API_URL = 'http://localhost:5000/api'; // Cambia el puerto según tu configuración

export const calculateResistance = async (data) => {
    const response = await fetch(`${API_URL}/resistance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const calculateFilter = async (data) => {
    const response = await fetch(`${API_URL}/filter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};