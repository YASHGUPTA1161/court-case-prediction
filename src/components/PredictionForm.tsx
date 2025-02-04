import React, { useState } from 'react';
import { Send } from 'lucide-react';

const PredictionForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    caseType: '',
    facts: '',
    jurisdiction: '',
    precedents: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      onPredict(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Case Type</label>
        <select
          value={formData.caseType}
          onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select case type...</option>
          <option value="civil">Civil</option>
          <option value="criminal">Criminal</option>
          <option value="family">Family</option>
          <option value="corporate">Corporate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Case Facts</label>
        <textarea
          value={formData.facts}
          onChange={(e) => setFormData({ ...formData, facts: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter the case facts..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Jurisdiction</label>
        <input
          type="text"
          value={formData.jurisdiction}
          onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter jurisdiction..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Relevant Precedents</label>
        <textarea
          value={formData.precedents}
          onChange={(e) => setFormData({ ...formData, precedents: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter relevant case precedents..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Send className="h-4 w-4 mr-2" />
        Get Prediction
      </button>
    </form>
  );
};

export default PredictionForm;