
import React from 'react';
import { ShieldCheck, BadgeCheck, FileText, HeartHandshake } from 'lucide-react';

const USP: React.FC = () => {
  const factors = [
    {
      title: 'The Certified Pro Badge',
      icon: <BadgeCheck className="w-10 h-10 text-indigo-600" />,
      desc: 'Not everyone gets in. We verify identity, local licenses, and criminal records to ensure a premium talent pool.'
    },
    {
      title: 'Standardized Quote Guarantee',
      icon: <FileText className="w-10 h-10 text-indigo-600" />,
      desc: 'No "cowboy" pricing. Using regional data, we provide price ranges for common tasks to prevent homeowner exploitation.'
    },
    {
      title: 'Managed Liability Shield',
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
      desc: 'Every booking through the platform is automatically insured up to $1M. Both parties are protected from day one.'
    }
  ];

  return (
    <div className="space-y-12 animate-in zoom-in-95 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">The "DoveVivo" Factor</h2>
        <p className="text-slate-600 text-lg">
          We move from a "Wild West" marketplace to a curated ecosystem. 
          Professionalizing the blue-collar sector through institutional trust.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {factors.map((f, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center flex flex-col items-center hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="mb-6 bg-indigo-50 p-5 rounded-3xl">{f.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-12 text-center">
        <HeartHandshake className="mx-auto text-rose-500 mb-6" size={48} />
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Platform Commitment</h3>
        <p className="max-w-xl mx-auto text-slate-500">
          "If the repair fails within 30 days, we send another pro for free." 
          This managed guarantee is what separates us from classified ads.
        </p>
        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
          Become a Certified Partner
        </button>
      </div>
    </div>
  );
};

export default USP;
