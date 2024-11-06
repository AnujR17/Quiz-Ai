import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Users, Upload, Book, List, Hash, FileQuestion } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from "./components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const GameEvaluationSystem = () => {
  const [selectedMode, setSelectedMode] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {selectedMode ? (
        <SetupPage mode={selectedMode} onBack={() => setSelectedMode(null)} />
      ) : (
        <ModeSelectionPage onModeSelect={setSelectedMode} />
      )}
    </div>
  );
};

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

const SetupPage = ({ mode, onBack }) => {
  const [file, setFile] = useState(null);

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-8 text-white">
          ← Back to Mode Selection
        </Button>

        <Card className="bg-white/90 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {mode === 'individual' ? 'Configure Your Learning Journey' : 'Setup Team Challenge'}
            </CardTitle>
            <CardDescription>
              Customize your evaluation experience and upload study materials
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

            {/* Topics Input */}
            <div className="space-y-2">
              <Label htmlFor="topics">Topics (comma separated)</Label>
              <Input
                id="topics"
                placeholder="e.g., Algebra, Geometry, Trigonometry"
              />
            </div>

            {/* Question Type Selection */}
            <div className="space-y-2">
              <Label>Question Types</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <input type="checkbox" className="mr-2" /> Multiple Choice
                </Button>
                <Button variant="outline" className="justify-start">
                  <input type="checkbox" className="mr-2" /> True/False
                </Button>
                <Button variant="outline" className="justify-start">
                  <input type="checkbox" className="mr-2" /> Short Answer
                </Button>
                <Button variant="outline" className="justify-start">
                  <input type="checkbox" className="mr-2" /> Problem Solving
                </Button>
              </div>
            </div>

            {/* Number of Questions */}
            <div className="space-y-2">
              <Label htmlFor="questionCount">Number of Questions</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select question count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                  <SelectItem value="30">30 Questions</SelectItem>
                  <SelectItem value="40">40 Questions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* PDF Upload */}
            <div className="space-y-2">
              <Label>Upload Study Material (PDF)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  className="hidden"
                  id="pdf-upload"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label
                  htmlFor="pdf-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {file ? file.name : "Click to upload or drag and drop"}
                  </span>
                </label>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              Start {mode === 'individual' ? 'Journey' : 'Challenge'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameEvaluationSystem;
