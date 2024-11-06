import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Users, Upload, Book, Hash, FileQuestion, Plus, Minus, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const GameEvaluationSystem = () => {
  const [currentPage, setCurrentPage] = useState('mode-selection');
  const [selectedMode, setSelectedMode] = useState(null);
  const [teamSetup, setTeamSetup] = useState({
    numberOfPlayers: 2,
    playerIds: ['', '']
  });

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    if (mode === 'team') {
      setCurrentPage('team-setup');
    } else {
      setCurrentPage('game-setup');
    }
  };

  const handleTeamSetup = () => {
    setCurrentPage('game-setup');
  };

  const startGame = () => {
    setCurrentPage('game');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'mode-selection':
        return <ModeSelectionPage onModeSelect={handleModeSelect} />;
      case 'team-setup':
        return <TeamSetupPage 
          teamSetup={teamSetup} 
          setTeamSetup={setTeamSetup} 
          onContinue={handleTeamSetup}
          onBack={() => setCurrentPage('mode-selection')} 
        />;
      case 'game-setup':
        return <GameSetupPage 
          mode={selectedMode}
          teamSetup={teamSetup}
          onStartGame={startGame}
          onBack={() => setCurrentPage(selectedMode === 'team' ? 'team-setup' : 'mode-selection')}
        />;
      case 'game':
        return <AlgebraGameLevel mode={selectedMode} teamSetup={teamSetup} />;
      default:
        return <ModeSelectionPage onModeSelect={handleModeSelect} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {renderPage()}
    </div>
  );
};

// Team Setup Page Component
const TeamSetupPage = ({ teamSetup, setTeamSetup, onContinue, onBack }) => {
  const handleAddPlayer = () => {
    if (teamSetup.numberOfPlayers < 4) {
      setTeamSetup({
        numberOfPlayers: teamSetup.numberOfPlayers + 1,
        playerIds: [...teamSetup.playerIds, '']
      });
    }
  };

  const handleRemovePlayer = () => {
    if (teamSetup.numberOfPlayers > 2) {
      setTeamSetup({
        numberOfPlayers: teamSetup.numberOfPlayers - 1,
        playerIds: teamSetup.playerIds.slice(0, -1)
      });
    }
  };

  const handlePlayerIdChange = (index, value) => {
    const newPlayerIds = [...teamSetup.playerIds];
    newPlayerIds[index] = value;
    setTeamSetup({
      ...teamSetup,
      playerIds: newPlayerIds
    });
  };

  const isValid = teamSetup.playerIds.every(id => id.trim().length > 0);

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-white">
          ← Back
        </Button>

        <Card className="bg-white/90 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold flex items-center gap-2">
              <Trophy className="h-8 w-8" />
              Team Competition Setup
            </CardTitle>
            <CardDescription>
              Enter unique IDs for each player to start the competition
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <Label>Number of Players: {teamSetup.numberOfPlayers}</Label>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRemovePlayer}
                  disabled={teamSetup.numberOfPlayers <= 2}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleAddPlayer}
                  disabled={teamSetup.numberOfPlayers >= 4}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {teamSetup.playerIds.map((id, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`player-${index + 1}`}>Player {index + 1} ID</Label>
                  <Input
                    id={`player-${index + 1}`}
                    value={id}
                    onChange={(e) => handlePlayerIdChange(index, e.target.value)}
                    placeholder={`Enter Player ${index + 1} ID`}
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500"
                onClick={onContinue}
                disabled={!isValid}
              >
                Continue to Game Setup
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-white/80 text-center text-sm">
          <p>Each player needs a unique ID to track their progress and scores</p>
        </div>
      </div>
    </div>
  );
};

// Include previous ModeSelectionPage component here
const ModeSelectionPage = ({ onModeSelect }) => {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Choose Your Learning Adventure
          </h1>
          <p className="text-xl text-white opacity-90">
            Learn through gaming - every correct answer advances your progress!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual Mode Card */}
          <Card className="bg-white/80 backdrop-blur-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => onModeSelect('individual')}>
            <CardHeader className="text-center">
              <div className="w-full h-64 relative mb-4">
                <img
                  src="/api/placeholder/600/400"
                  alt="Individual gaming journey"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Solo Adventure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-lg">
                <div className="space-y-4">
                  <p>Embark on a personal learning quest where every correct answer advances your game character!</p>
                  <ul className="space-y-2">
                    <li>🎮 Progress through levels with correct answers</li>
                    <li>🎯 Personalized AI-generated questions</li>
                    <li>🏆 Unlock achievements and track progress</li>
                    <li>🌟 Complete the game by mastering your subject</li>
                  </ul>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Team Mode Card */}
          <Card className="bg-white/80 backdrop-blur-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => onModeSelect('team')}>
            <CardHeader className="text-center">
              <div className="w-full h-64 relative mb-4">
                <img
                  src="/api/placeholder/600/400"
                  alt="Competitive team learning"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Competitive Team Quest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-lg">
                <div className="space-y-4">
                  <p>Challenge your peers in an exciting competitive learning environment!</p>
                  <ul className="space-y-2">
                    <li>🏃‍♂️ Race to answer questions correctly</li>
                    <li>🏅 Compete for top positions on the leaderboard</li>
                    <li>👥 Team-based challenges and competitions</li>
                    <li>🎉 Real-time progress tracking against opponents</li>
                  </ul>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Include previous GameSetupPage component (modified to handle team mode)
const GameSetupPage = ({ mode, teamSetup, onStartGame, onBack }) => {
  const [file, setFile] = useState(null);

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-white">
          ← Back
        </Button>

        <Card className="bg-white/90 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {mode === 'individual' ? 'Configure Your Learning Journey' : 'Setup Team Challenge'}
            </CardTitle>
            <CardDescription>
              {mode === 'team' ? 
                `Setting up game for ${teamSetup.numberOfPlayers} players` : 
                'Customize your evaluation experience'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Subject Selection */}
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="literature">Literature</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rest of the setup form... */}
            {/* (Previous form fields remain the same) */}

            <Button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              onClick={onStartGame}
            >
              Start {mode === 'individual' ? 'Journey' : 'Challenge'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameEvaluationSystem;
