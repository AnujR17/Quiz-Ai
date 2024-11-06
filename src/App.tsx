import React, { useState } from 'react';
import Platform from './platform';
import AlgebraGameLevel from './AlgebraGameLevel';
import GameEvaluationSystem from './GameEvaluationSystem';
import GameEvaluationPages from './GameEvaluationPages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('platform');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="p-4 bg-white shadow-md">
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => setCurrentPage('platform')} className="text-blue-600 hover:underline">
              Platform
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('algebra')} className="text-blue-600 hover:underline">
              Algebra Game
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('evaluation')} className="text-blue-600 hover:underline">
              Game Evaluation
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('pages')} className="text-blue-600 hover:underline">
              Evaluation Pages
            </button>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        {currentPage === 'platform' && <Platform />}
        {currentPage === 'algebra' && <AlgebraGameLevel />}
        {currentPage === 'evaluation' && <GameEvaluationSystem />}
        {currentPage === 'pages' && <GameEvaluationPages />}
      </main>
    </div>
  );
}

export default App;