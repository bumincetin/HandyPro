
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Zap, Droplets, Lightbulb, Thermometer, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import { Job } from '../types';

const MOCK_ACTIVE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Boiler Maintenance',
    description: 'Yearly checkup',
    category: 'HVAC',
    isEmergency: false,
    status: 'en_route',
    clientName: 'Luca M.',
    location: 'Rome, Prati',
    payout: '$120',
    materialRequests: []
  }
];

const ClientDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10 pb-24">
      {/* Header Profile */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Hello, Luca</h2>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <MapPin size={12} className="text-indigo-500" /> Rome, Via delle Alpi
          </div>
        </div>
        <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">LM</div>
      </div>

      {/* Active Job Widget */}
      {MOCK_ACTIVE_JOBS.map(job => (
        <div key={job.id} className="bg-indigo-900 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Worker is en route</span>
            </div>
            <h3 className="text-2xl font-black mb-1">{job.title}</h3>
            <p className="opacity-70 text-sm mb-6">Marco Rossi (Plumber) arrives in 12 min</p>
            <button 
              onClick={() => navigate('/chat')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold text-sm border border-white/10 transition-all"
            >
              Open Tracker
            </button>
          </div>
          <Zap className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5 rotate-12" />
        </div>
      ))}

      {/* Categories */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800">What do you need help with?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Plumbing', icon: <Droplets className="text-blue-500" />, bg: 'bg-blue-50' },
            { label: 'Electric', icon: <Lightbulb className="text-amber-500" />, bg: 'bg-amber-50' },
            { label: 'HVAC', icon: <Thermometer className="text-rose-500" />, bg: 'bg-rose-50' },
            { label: 'More', icon: <ChevronRight className="text-slate-500" />, bg: 'bg-slate-50' },
          ].map(cat => (
            <button 
              key={cat.label} 
              onClick={() => navigate('/create-job')}
              className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:border-indigo-500 hover:-translate-y-1 transition-all flex flex-col items-center gap-4 group"
            >
              <div className={`p-4 rounded-2xl ${cat.bg} group-hover:scale-110 transition-transform`}>{cat.icon}</div>
              <span className="font-bold text-slate-800">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Managed Advantage */}
      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 flex flex-col items-center text-center gap-4">
        <ShieldCheck size={48} className="text-emerald-500" />
        <h3 className="text-2xl font-black text-slate-900">Managed & Insured</h3>
        <p className="text-slate-500 max-w-xs font-medium">Every job is institutionally guaranteed by the HandyPro Quality Shield.</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex -space-x-2">
            {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>)}
          </div>
          <span className="text-xs font-bold text-slate-400">1.2k local pros verified</span>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;