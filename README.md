# court-case-prediction
websitelink - https://67a1ebf5d5111b2aba5b6061--resilient-bienenstitch-b8e666.netlify.app/

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/YASHGUPTA1161/court-case-prediction)

# LegalPredict AI

A modern web application for predicting legal case outcomes using machine learning and data analytics.

## Overview

LegalPredict AI is a sophisticated legal case prediction platform that combines machine learning with historical case analysis to provide accurate outcome predictions. The application features a user-friendly interface for case input, data visualization, and dataset management.

## Features

- Case outcome prediction with confidence scoring
- Interactive data visualization and analytics
- Support for multiple case types (Civil, Criminal, Family, Corporate)
- CSV dataset upload functionality
- Real-time performance metrics
- Responsive design for all devices

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Chart.js
- Lucide React Icons

### Backend
- Python
- Flask
- NLTK
- Pandas
- Machine Learning Libraries

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd legal-predict-ai
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd server
pip install -r requirements.txt
```

### Development

1. Start the frontend development server
```bash
npm run dev
```

2. Start the backend server
```bash
cd server
python app.py
```

The application will be available at `http://localhost:5000`

## Project Structure

```
legal-predict-ai/
├── src/
│   ├── components/
│   │   ├── AccuracyMetrics.tsx
│   │   ├── FileUpload.tsx
│   │   ├── InsightsChart.tsx
│   │   └── PredictionForm.tsx
│   ├── App.tsx
│   └── main.tsx
├── server/
│   └── app.py
└── public/
```

## Deployment

### Frontend Deployment

1. Build the production bundle:
```bash
npm run build
```

2. Deploy to your preferred hosting platform (e.g., Netlify, Vercel)
   - The build output will be in the `dist` directory
   - Configure the build command as `npm run build`
   - Set the publish directory as `dist`

### Backend Deployment

1. Set up a Python-compatible hosting platform
2. Configure environment variables
3. Install dependencies using `requirements.txt`
4. Start the server using a production WSGI server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
