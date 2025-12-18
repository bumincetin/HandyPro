
import React from 'react';
import { MousePointer2, Bell, MessageSquare, CreditCard, Star, CheckCircle } from 'lucide-react';

const UserFlow: React.FC = () => {
  const steps = [
    { title: 'Job Scoping', icon: <MousePointer2 />, actor: 'Client', desc: 'Client describes problem via text/photo/AI.' },
    { title: 'Matching', icon: <Bell />, actor: 'System', desc: 'Local pros get high-priority push notifications.' },
    { title: 'Bid & Chat', icon: <MessageSquare />, actor: 'Worker', desc: 'Pro offers a quote or requests a walkthrough.' },
    { title: 'Booking', icon: <CheckCircle />, actor: 'Both', desc: 'Appointment locked in the shared calendar.' },
    { title: 'Execution', icon: <CreditCard />, actor: 'Worker', desc: 'Job performed; photo evidence uploaded.' },
    { title: 'Payout & Review', icon: <Star />, actor: 'Both', desc: 'Escrow released and reputations updated.' },
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-right-4 duration-500">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Job Lifecycle</h2>
        <p className="text-slate-600">A frictionless circle from chaos to resolution, designed to minimize "back-and-forth" friction.</p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-indigo-100">
                {step.icon}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-1">{step.actor}</div>
              <h4 className="font-bold text-slate-800 text-sm mb-2">{step.title}</h4>
              <p className="text-xs text-slate-500 leading-tight">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Worker Acceptance Flow</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Visual Ping:</span> Large "Incoming Job" alert shows distance, category, and estimated payout.</p>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Quick Decision:</span> "Yes / No / Chat" buttons. No typing required at this stage.</p>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <p className="text-sm text-slate-600"><span className="font-bold text-slate-800">Contextual Prep:</span> AI summary provides worker with "What to Bring" list based on job scoping.</p>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-900 p-8 rounded-3xl text-white">
          <h3 className="text-lg font-bold mb-4">The "Non-Digital" Edge Case</h3>
          <p className="text-indigo-200 text-sm leading-relaxed mb-6">
            If a worker struggles with the interface, the app triggers an IVR (Automated Voice) call. 
            "Hello Marco, you have a plumbing job 2 miles away. Press 1 to accept."
          </p>
          <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10">
            <div className="p-3 bg-white/10 rounded-full"><Bell className="text-amber-400" /></div>
            <div>
              <div className="text-xs font-bold text-indigo-300">FALLBACK MODE</div>
              <div className="text-sm font-medium">Automatic Voice-to-UI Bridge</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFlow;
