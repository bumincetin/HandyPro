
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Camera, Mic, DollarSign, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

const JobExecutionScreen: React.FC = () => {
  const [phase, setPhase] = useState<'arrival' | 'working' | 'material' | 'completion'>('arrival');
  const [timer, setTimer] = useState('01:24:45');
  const navigate = useNavigate();

  if (phase === 'completion') {
    return (
      <div className="max-w-md mx-auto h-[800px] bg-white rounded-[3rem] p-12 text-center shadow-2xl flex flex-col justify-center animate-in zoom-in-95">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={64} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Job Finished!</h2>
        <p className="text-slate-500 font-medium mb-12">Your payment of <strong>$180.00</strong> has been processed to your wallet.</p>
        <button 
          onClick={() => navigate('/worker-simple')}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl"
        >
          BACK TO DASHBOARD
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto min-h-[800px] bg-slate-900 rounded-[3rem] flex flex-col overflow-hidden border-[8px] border-slate-800 shadow-2xl relative">
      {/* Dynamic Background Indicator */}
      <div className={`absolute inset-0 opacity-10 ${phase === 'working' ? 'bg-emerald-500 animate-pulse' : 'bg-indigo-500'}`}></div>

      {/* Header Info */}
      <div className="relative z-10 p-8 pt-12 space-y-2">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-[10px] font-black uppercase tracking-widest">Active Task</span>
          <div className="flex items-center gap-2 text-rose-400 font-black text-sm">
            <Clock size={16} /> {timer}
          </div>
        </div>
        <h2 className="text-4xl font-black text-white leading-tight">Fix Leaking Pipe</h2>
        <p className="text-indigo-200 font-bold">Client: Sarah Jenkins • Rome, Trastevere</p>
      </div>

      {/* Main Action Area */}
      <div className="relative z-10 flex-1 bg-white rounded-t-[3rem] mt-4 p-8 flex flex-col gap-6">
        {phase === 'arrival' && (
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-slate-100 rounded-[2rem] p-6 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <Navigation size={40} />
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-slate-800">1.2 miles away</div>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Via del Moro, 44</p>
              </div>
            </div>
            <button 
              onClick={() => setPhase('working')}
              className="w-full py-10 bg-emerald-500 text-white rounded-[2.5rem] font-black text-3xl shadow-2xl shadow-emerald-200 hover:scale-105 active:scale-95 transition-all"
            >
              I HAVE ARRIVED
            </button>
          </div>
        )}

        {phase === 'working' && (
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setPhase('material')}
                className="p-8 bg-amber-50 border-2 border-amber-100 rounded-[2.5rem] flex flex-col items-center gap-3 text-amber-600 group hover:bg-amber-100 transition-all"
              >
                <DollarSign size={32} />
                <span className="font-black uppercase text-xs tracking-widest">Buy Parts</span>
              </button>
              <button className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] flex flex-col items-center gap-3 text-slate-600">
                <AlertTriangle size={32} />
                <span className="font-black uppercase text-xs tracking-widest">Support</span>
              </button>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-[2rem] border border-indigo-100">
              <h4 className="font-black text-indigo-900 uppercase text-[10px] tracking-widest mb-4">Job Instructions</h4>
              <p className="text-slate-600 font-medium leading-relaxed">The main valve is located behind the wooden panel in the kitchen hallway. Do not use chemical sealant on the ceramic tiles.</p>
            </div>

            <button 
              onClick={() => setPhase('completion')}
              className="mt-auto w-full py-8 bg-indigo-600 text-white rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-4"
            >
              <Camera size={28} /> FINISH JOB
            </button>
          </div>
        )}

        {phase === 'material' && (
          <div className="flex-1 flex flex-col gap-6 animate-in slide-in-from-right-10">
            <div className="text-center">
              <h3 className="text-2xl font-black text-slate-800">New Part Request</h3>
              <p className="text-slate-500 font-medium">Photograph the receipt or the part.</p>
            </div>
            <div className="aspect-video bg-slate-100 rounded-[2rem] border-4 border-dashed border-slate-300 flex items-center justify-center">
              <Camera size={48} className="text-slate-300" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Estimated Cost</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="number" placeholder="45.00" className="w-full pl-12 p-4 bg-slate-100 border-none rounded-xl font-bold" />
              </div>
            </div>
            <button 
              onClick={() => setPhase('working')}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl"
            >
              SEND FOR APPROVAL
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-2 opacity-50">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">HandyPro Managed Protocol v4.2</span>
        </div>
      </div>
    </div>
  );
};

export default JobExecutionScreen;
