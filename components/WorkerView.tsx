
import React from 'react';
import { Play, Check, Navigation, DollarSign, Calendar, MessageSquare, Menu } from 'lucide-react';

const WorkerView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex items-center justify-between border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Worker Interface Demo</h2>
          <p className="text-slate-500">Optimized for high-contrast, large touch targets, and low cognitive load.</p>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-slate-100 rounded-[3rem] p-4 border-[8px] border-slate-900 shadow-2xl overflow-hidden relative">
        {/* Device Status Bar */}
        <div className="flex justify-between px-6 py-2 mb-4">
          <span className="text-[10px] font-bold text-slate-500">12:45 PM</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-slate-300 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
          </div>
        </div>

        {/* Worker App UI */}
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">M</div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Welcome back,</div>
                <div className="font-bold text-slate-800">Marco Rossi</div>
              </div>
            </div>
            <button className="p-2 text-slate-400"><Menu size={24}/></button>
          </div>

          {/* Daily Goal */}
          <div className="bg-indigo-600 p-6 rounded-[2rem] text-white">
            <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Earnings Today</div>
            <div className="text-4xl font-black mb-4">$340.00</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[10px] opacity-80">Next Goal</div>
                <div className="font-bold">$500.00</div>
              </div>
              <div className="h-1.5 w-24 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Current Job - HIGH PRIORITY CALL TO ACTION */}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-indigo-100">
            <div className="flex items-center justify-between mb-4">
              <div className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase rounded-full">Coming Up In 15m</div>
              <div className="text-indigo-600"><Navigation size={20} /></div>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-1">Fix Broken Boiler</h3>
            <p className="text-sm text-slate-500 font-medium mb-6">Via del Corso, 12, Rome</p>
            
            <button className="w-full py-6 bg-emerald-500 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-emerald-600 active:scale-95 transition-all shadow-lg shadow-emerald-100">
              <Play fill="white" size={24} />
              START JOB
            </button>
          </div>

          {/* Bottom Tabs */}
          <div className="grid grid-cols-4 gap-2 px-2 pb-2">
            {[
              { icon: <Calendar />, label: 'Jobs', active: true },
              { icon: <DollarSign />, label: 'Pay' },
              { icon: <MessageSquare />, label: 'Chat' },
              { icon: <Check />, label: 'Profile' },
            ].map((tab, i) => (
              <button key={i} className={`flex flex-col items-center p-3 rounded-2xl transition-colors ${tab.active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400'}`}>
                {tab.icon}
                <span className="text-[10px] font-black uppercase mt-1">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="w-32 h-1.5 bg-slate-300 rounded-full mx-auto mt-6 mb-2"></div>
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-slate-800">Why this works for non-digital workers:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Color Association</h4>
            <p className="text-xs text-slate-500">Green is always "Action/Go", Indigo is "Platform", Amber is "Alert". Helps intuitive navigation.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Frictionless Check-in</h4>
            <p className="text-xs text-slate-500">Giant "Start" button removes the need to find the job in a list. The most important thing is always front-and-center.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerView;
