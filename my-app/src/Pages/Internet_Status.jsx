import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Internet_Status = () => {
    const [networkData, setNetworkData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch network scan data
    const fetchNetworkData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/scan-network');
            setNetworkData(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch network data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNetworkData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Network Scan Results</h1>
            {networkData && (
                <div>
                    <p><strong>SSID:</strong> {networkData.ssid}</p>
                    <p><strong>Connection Status:</strong> {networkData.connectionStatus}</p>
                    <p><strong>Latency:</strong> {networkData.latency} ms</p>
                    <p><strong>Connection Strength:</strong> {networkData.connectionStrength}</p>
                    <p><strong>Devices Connected:</strong> {networkData.devicesCount}</p>
                </div>
            )}
        </div>
    );
};

export default Internet_Status;
