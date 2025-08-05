import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const trimmedName = name.trim().toLowerCase();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, { name: trimmedName });
      localStorage.setItem('username', trimmedName);
      navigate(`/todos?user=${trimmedName}`);
    } catch (err) {
      console.log(err, 'post error')
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">The Chamber of Attainment</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="border rounded px-4 py-2 text-lg mb-4 w-full max-w-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
        Begin
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default HomePage;