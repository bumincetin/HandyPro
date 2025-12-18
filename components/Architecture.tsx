
import React from 'react';
/* Added missing Smartphone and Zap icons to the imports */
import { Layers, Server, Code, Database as DbIcon, Globe, Cpu, Smartphone, Zap, ShieldAlert } from 'lucide-react';

const Architecture: React.FC = () => {
  const stack = [
    { name: 'Unified Frontend', tech: 'React Native / Expo', icon: <Smartphone className="text-blue-500" />, desc: 'Single codebase for iOS, Android, and Web-Lite' },
    { name: 'Core API', tech: 'Node.js (NestJS) + TS', icon: <Cpu className="text-indigo-500" />, desc: 'Type-safe microservices with high concurrency' },
    { name: 'Database', tech: 'PostgreSQL + Supabase', icon: <DbIcon className="text-emerald-500" />, desc: 'Real-time subscriptions for chat and GPS tracking' },
    { name: 'AI Layer', tech: 'Google Gemini SDK', icon: <Zap className="text-amber-500" />, desc: 'Natural language job scoping and worker voice processing' },
    { name: 'Edge CDN', tech: 'Vercel / Cloudflare', icon: <Globe className="text-slate-500" />, desc: 'Fast delivery of static assets and image optimization' },
  ];

  const tables = [
    { name: 'Users', cols: ['id', 'email', 'role (CLIENT|WORKER|ADMIN)', 'verified_at'] },
    { name: 'WorkerProfile', cols: ['id', 'user_id', 'is_online (BOOL)', 'verified_status (ENUM)', 'rating'] },
    { name: 'Jobs', cols: ['id', 'client_id', 'status', 'lat/lng', 'is_emergency (BOOL)', 'auto_category'] },
    { name: 'Bids', cols: ['id', 'job_id', 'worker_id', 'amount', 'audio_description_url'] },
    { name: 'Messages', cols: ['id', 'channel_id', 'sender_id', 'content', 'type (TEXT|IMAGE|VOICE)'] },
    { name: 'Calendar', cols: ['id', 'worker_id', 'start_time', 'end_time', 'job_id'] }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Modern Technical Architecture</h2>
        <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 font-bold text-xs">
          <ShieldAlert size={14} /> REAL-TIME EMERGENCY READY
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stack.map((s, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-slate-50 rounded-xl">{s.icon}</div>
            <h4 className="font-bold text-sm text-slate-800">{s.name}</h4>
            <div className="text-xs font-mono text-indigo-600 mt-1 mb-2">{s.tech}</div>
            <p className="text-[11px] text-slate-500 leading-tight">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Server size={20} className="text-indigo-400" />
            Infrastructure Strategy
          </h3>
          <div className="space-y-6">
            <div className="border-l-2 border-indigo-500 pl-6 space-y-2">
              <h4 className="font-bold text-indigo-300">Multimodal AI Pipeline</h4>
              <p className="text-sm text-slate-400">Gemini 3 Flash handles image analysis for client scoping and audio transcription for worker bids, reducing UI complexity.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-6 space-y-2">
              <h4 className="font-bold text-emerald-300">Event-Driven Workers</h4>
              <p className="text-sm text-slate-400">Supabase Realtime triggers push notifications and "Emergency Mode" state changes across the worker fleet instantly.</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-6 space-y-2">
              <h4 className="font-bold text-amber-300">Geo-Clustering</h4>
              <p className="text-sm text-slate-400">Spatial indexing prioritizes "On Duty" workers within a 15-minute response time for emergency plumbing/electrical.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <DbIcon size={20} className="text-indigo-600" />
            Schema Model
          </h3>
          <div className="space-y-4">
            {tables.map((t, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-1">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {t.name}
                </div>
                <div className="flex flex-wrap gap-1">
                  {t.cols.map((c, cIdx) => (
                    <span key={cIdx} className="px-2 py-0.5 bg-slate-50 text-[10px] font-mono text-slate-500 rounded group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
