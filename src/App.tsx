import React, { useState } from 'react';
import { Upload, BarChart3, Brain, Target, Scale, FileSpreadsheet } from 'lucide-react';
import PredictionForm from './components/PredictionForm';
import FileUpload from './components/FileUpload';
import AccuracyMetrics from './components/AccuracyMetrics';
import InsightsChart from './components/InsightsChart';

function App() {
  const [activeTab, setActiveTab] = useState('predict');
  const [predictionData, setPredictionData] = useState(null);
  const [accuracyData, setAccuracyData] = useState({
    accuracy: 0.85,
    precision: 0.83,
    recall: 0.87,
    f1Score: 0.85
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">LegalPredict AI</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <FeatureCard
            icon={<Brain className="h-6 w-6" />}
            title="AI Predictions"
            description="Get accurate case outcome predictions powered by machine learning"
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Analytics Dashboard"
            description="View detailed insights and performance metrics"
          />
          <FeatureCard
            icon={<Target className="h-6 w-6" />}
            title="Similar Cases"
            description="Find and analyze similar historical cases"
          />
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <TabButton
              active={activeTab === 'predict'}
              onClick={() => setActiveTab('predict')}
              icon={<Brain className="h-5 w-5" />}
              text="Predict Case"
            />
            <TabButton
              active={activeTab === 'upload'}
              onClick={() => setActiveTab('upload')}
              icon={<Upload className="h-5 w-5" />}
              text="Upload Dataset"
            />
            <TabButton
              active={activeTab === 'metrics'}
              onClick={() => setActiveTab('metrics')}
              icon={<BarChart3 className="h-5 w-5" />}
              text="Metrics"
            />
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'predict' && <PredictionForm onPredict={setPredictionData} />}
          {activeTab === 'upload' && <FileUpload />}
          {activeTab === 'metrics' && (
            <div className="space-y-8">
              <AccuracyMetrics data={accuracyData} />
              <InsightsChart />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TabButton({ active, onClick, icon, text }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center px-3 py-2 border-b-2 text-sm font-medium
        ${active
          ? 'border-indigo-600 text-indigo-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }
      `}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
}

export default App;