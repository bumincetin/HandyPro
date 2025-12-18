
import React from 'react';
import { ShieldCheck, Users, AlertCircle, TrendingUp, Map, FileText, Check, X } from 'lucide-react';

const AdminPanel: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Managed Oversight</h2>
          <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-1">Admin Command Center • v0.9</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-slate-700">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Jobs', value: '422', icon: <Map className="text-indigo-500" /> },
          { label: 'Pending Pros', value: '18', icon: <Users className="text-amber-500" /> },
          { label: 'Disputes', value: '3', icon: <AlertCircle className="text-rose-500" /> },
          { label: 'Daily GMV', value: '$24.2k', icon: <TrendingUp className="text-emerald-500" /> },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between group hover:border-indigo-500 transition-all">
            <div>
              <div className="text-2xl font-black text-slate-900">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Verification Queue */}
        <section className="bg-white border border-slate-200 rounded-[3rem] p-10 space-y-8">
          <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
            <ShieldCheck className="text-indigo-600" /> Verification Queue
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Mario Rossi', trade: 'Electrician', doc: 'Milan-ID-02.jpg', time: '12m ago' },
              { name: 'Elena Bianchi', trade: 'Painter', doc: 'TradeLicense-99.pdf', time: '44m ago' },
            ].map((pro, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-[2rem] flex items-center justify-between border border-transparent hover:border-indigo-100 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-400 border border-slate-100">{pro.name.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-slate-800">{pro.name}</div>
                    <div className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">{pro.trade}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 bg-white text-rose-500 rounded-xl shadow-sm hover:bg-rose-50"><X size={18} /></button>
                  <button className="p-3 bg-white text-emerald-500 rounded-xl shadow-sm hover:bg-emerald-50"><Check size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* God View Status */}
        <section className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <Map className="text-indigo-400" /> Platform Pulse
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold">Rome Hub (Central)</div>
                  <div className="text-2xl font-black mt-1">High Demand</div>
                </div>
                <div className="px-4 py-1 bg-amber-500/20 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/30">Surge Active</div>
              </div>
              <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-4">Latest Dispute Log</h4>
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-rose-400 mt-1 shrink-0" size={18} />
                  <div>
                    <div className="text-sm font-bold">Job #9921 - Material Overcharge</div>
                    <p className="text-xs text-white/50 mt-1">Worker requested $150 for a valve that retails for $30. Client flagged.</p>
                    <button className="mt-4 text-indigo-400 font-bold text-xs uppercase underline tracking-widest">Investigate Chat Log</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
