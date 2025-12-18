
import React from 'react';
import { Target, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const Overview: React.FC = () => {
  const stats = [
    { label: 'Market Opportunity', value: '$600B+', icon: <TrendingUp className="text-emerald-500" />, sub: 'Home maintenance sector' },
    { label: 'Reliability Issue', value: '72%', icon: <ShieldCheck className="text-blue-500" />, sub: 'Clients reporting delays' },
    { label: 'Digital Gap', value: '65%', icon: <Users className="text-indigo-500" />, sub: 'Unconnected small providers' },
    { label: 'Growth Target', value: '4.5x', icon: <Target className="text-rose-500" />, sub: 'Estimated LTV/CAC' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <section>
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          HandyPro: The Next-Gen Service Ecosystem
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
          A two-sided marketplace bridge for the "last mile" of home maintenance, designed for the sophistication of 
          modern homeowners and the accessibility needs of blue-collar experts.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{s.icon}</div>
            <div className="text-2xl font-bold text-slate-900">{s.value}</div>
            <div className="text-sm font-semibold text-slate-500">{s.label}</div>
            <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <section className="bg-indigo-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-bold mb-6">The Core Philosophy</h3>
          <p className="text-indigo-100 text-lg leading-relaxed mb-8">
            Inspired by managed living platforms like DoveVivo, HandyPro doesn't just list workers—it curates an experience. 
            We standardize the quality, digitalize the manual labor, and foster trust through transparency.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">Trust as a Service</div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">Standardized Pricing</div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">Managed Workflow</div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-indigo-600 pl-4">The Homeowner Problem</h4>
          <p className="text-slate-600 leading-relaxed">
            Finding a reliable plumber shouldn't feel like a gamble. Fragmented reviews, inconsistent pricing, and poor communication 
            make home maintenance a high-anxiety task for modern tenants and owners.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-4">The Worker Challenge</h4>
          <p className="text-slate-600 leading-relaxed">
            The best handymen are busy with their hands, not their screens. Digitalizing invoicing, scheduling, and taxes is a major 
            friction point that leads to "off-platform" leakage and lost business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Overview;
