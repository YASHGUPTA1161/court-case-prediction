import React from 'react';
import { CheckCircle, Target, Crosshair, Activity } from 'lucide-react';

const AccuracyMetrics = ({ data }) => {
  const metrics = [
    { name: 'Accuracy', value: data.accuracy, icon: CheckCircle },
    { name: 'Precision', value: data.precision, icon: Target },
    { name: 'Recall', value: data.recall, icon: Crosshair },
    { name: 'F1 Score', value: data.f1Score, icon: Activity },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Metrics</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <metric.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {metric.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {(metric.value * 100).toFixed(1)}%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccuracyMetrics;