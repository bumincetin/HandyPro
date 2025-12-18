
import React from 'react';
import { Home, HardHat, ShieldCheck, CheckCircle2 } from 'lucide-react';

const PRD: React.FC = () => {
  const sections = [
    {
      title: 'For the Homeowner (Client)',
      icon: <Home className="text-blue-600" />,
      features: [
        'AI Job Scoping: Describe a problem, and Gemini generates a detailed task list.',
        'Real-time Tracking: See when the worker is on their way (Uber-style).',
        'Standardized Packages: Buy fixed-price bundles for common repairs (e.g., Boiler Check).',
        'Direct Chat: Integrated messenger with image/video attachment support.',
        'Payment Escrow: Money is only released upon digital job sign-off.'
      ]
    },
    {
      title: 'For the Worker (Pro)',
      icon: <HardHat className="text-amber-600" />,
      highlight: 'Accessibility First',
      features: [
        'Voice-to-Task: Log materials used and hours worked via voice commands.',
        'Visual Schedule: Oversized grid calendar with color-coded "Go" buttons.',
        'One-Tap Invoicing: Auto-generate professional PDF invoices from job data.',
        'Dynamic Pricing: Support for both fixed bids and flexible hourly tracking.',
        'Localized Payouts: Support for direct bank transfers or local e-wallets.'
      ]
    },
    {
      title: 'For Admin / Platform',
      icon: <ShieldCheck className="text-emerald-600" />,
      features: [
        'Automated Vetting: Background check and license verification pipeline.',
        'Dispute Center: Managed meditation room for payment disagreements.',
        'Analytics Dashboard: Monitor high-demand zones and worker churn.',
        'Insurance Manager: Auto-apply liability insurance to every booking.',
        'Review Moderation: AI-assisted sentiment analysis for feedback.'
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Product Requirements Document</h2>
        <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono">STATUS: DRAFT 0.1</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-colors">
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                {section.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{section.title}</h3>
                {section.highlight && (
                  <span className="text-[10px] uppercase font-bold text-amber-600 tracking-widest">{section.highlight}</span>
                )}
              </div>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {section.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
        <h3 className="text-lg font-bold text-indigo-900 mb-2">Technical Note on Worker Accessibility</h3>
        <p className="text-indigo-800/80 leading-relaxed text-sm">
          The Worker App is designed with a "Single Path" navigation model. 
          Workers are never more than two taps away from their current job or their earnings. 
          Input is minimized by utilizing GPS for arrival tracking and LLMs for summarizing verbal work notes.
        </p>
      </div>
    </div>
  );
};

export default PRD;
