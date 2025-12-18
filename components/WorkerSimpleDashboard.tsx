
import React, { useState, useEffect } from 'react';
import { Power, MapPin, Clock, DollarSign, Check, X, ShieldAlert } from 'lucide-react';
import { Job } from '../types';
import { SupabaseRepository } from '../services/supabaseService';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Leaking Pipe Under Sink',
    description: 'The kitchen sink pipe has a major crack. Water everywhere.',
    isEmergency: true,
    status: 'open',
    clientName: 'Sarah J.',
    distance: '1.2 mi',
    payout: '$120 - $180',
    category: 'Plumbing',
    location: 'Rome, Center',
    materialRequests: []
  },
  {
    id: '2',
    title: 'Replace 3 Light Switches',
    description: 'Bedroom switches are flickering.',
    isEmergency: false,
    status: 'open',
    clientName: 'David K.',
    distance: '3.5 mi',
    payout: '$80 fixed',
    category: 'Electrical',
    location: 'Rome, Prati',
    materialRequests: []
  }
];

const WorkerSimpleDashboard: React.FC = () => {
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const currentJob = jobs[currentJobIndex];

  // Requirement 4: Initialize Real-time Subscription
  useEffect(() => {
    if (isOnDuty) {
      const unsubscribe = SupabaseRepository.subscribeToNewJobs('Plumbing', (newJob) => {
        setJobs(prev => [newJob, ...prev]);
        // Trigger a notification or vibration here
      });
      return () => { if(typeof unsubscribe === 'function') unsubscribe(); };
    }
  }, [isOnDuty]);

  const handleDutyToggle = async () => {
    const nextState = !isOnDuty;
    setIsOnDuty(nextState);
    // Requirement 3: Sync status to DB
    await SupabaseRepository.toggleWorkerStatus('worker_123', nextState);
  };

  return (
    <div className="max-w-md mx-auto min-h-[800px] bg-slate-100 rounded-[3rem] p-6 border-[8px] border-slate-900 shadow-2xl flex flex-col gap-6">
      {/* Massive Duty Toggle */}
      <button 
        onClick={handleDutyToggle}
        className={`
          w-full py-12 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-xl
          ${isOnDuty 
            ? 'bg-emerald-500 text-white shadow-emerald-200 ring-8 ring-emerald-100' 
            : 'bg-rose-500 text-white shadow-rose-200 ring-8 ring-rose-100'}
        `}
      >
        <Power size={48} className={isOnDuty ? 'animate-pulse' : ''} />
        <span className="text-3xl font-black tracking-tight">
          {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
        </span>
        <span className="text-sm font-bold opacity-80">
          {isOnDuty ? 'Listening for New Jobs' : 'Tap to Start Working'}
        </span>
      </button>

      {/* Single Job Card - Only shown when On Duty */}
      <div className={`flex-1 transition-all duration-500 ${isOnDuty ? 'opacity-100 scale-100' : 'opacity-30 scale-95 grayscale'}`}>
        {currentJob ? (
          <div className="bg-white h-full rounded-[2.5rem] p-8 shadow-sm border border-slate-200 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-2">
                {currentJob.isEmergency && (
                  <span className="flex items-center gap-1 text-rose-600 font-black text-xs uppercase bg-rose-50 px-3 py-1 rounded-full w-fit">
                    <ShieldAlert size={14} /> Emergency
                  </span>
                )}
                <h3 className="text-2xl font-black text-slate-800 leading-tight">{currentJob.title}</h3>
              </div>
              <span className="bg-indigo-100 text-indigo-700 font-bold px-3 py-1 rounded-lg text-sm">{currentJob.distance}</span>
            </div>

            <p className="text-slate-500 font-medium mb-8 text-lg">{currentJob.description}</p>

            <div className="space-y-4 mb-auto">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="bg-slate-100 p-3 rounded-2xl"><MapPin className="text-indigo-600" /></div>
                <span className="font-bold">{currentJob.location}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="bg-slate-100 p-3 rounded-2xl"><DollarSign className="text-emerald-600" /></div>
                <span className="font-bold text-xl">{currentJob.payout}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <button 
                onClick={() => setCurrentJobIndex((i) => (i + 1) % jobs.length)}
                className="py-6 bg-slate-200 text-slate-600 rounded-3xl font-black text-xl flex items-center justify-center gap-2 hover:bg-slate-300"
              >
                <X size={28} /> NO
              </button>
              <button className="py-6 bg-indigo-600 text-white rounded-3xl font-black text-xl flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-200">
                <Check size={28} /> YES
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-center p-12 text-slate-400 font-bold italic">
            Looking for new tasks in your area...
          </div>
        )}
      </div>

      <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-4">
        Managed Gateway Protocol • Supabase Realtime Active
      </div>
    </div>
  );
};

export default WorkerSimpleDashboard;
