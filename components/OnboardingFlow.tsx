
import React, { useState } from 'react';
import { Smartphone, Camera, ShieldCheck, MapPin, HardHat, Home, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { UserRole, VerifiedStatus } from '../types';

interface Props {
  onComplete: (role: UserRole) => void;
}

const OnboardingFlow: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState<'splash' | 'role' | 'auth' | 'profile' | 'verify' | 'success'>('splash');
  const [role, setRole] = useState<UserRole>('client');

  if (step === 'splash') {
    return (
      <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
        <Logo size="xl" />
        <h1 className="text-5xl font-black text-white mt-8 mb-4 tracking-tighter">HandyPro</h1>
        <p className="text-indigo-200 text-lg font-medium opacity-80 max-w-sm">Premium Managed Home Services. Guaranteed Quality. AI Simplified.</p>
        <button 
          onClick={() => setStep('role')}
          className="mt-12 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all"
        >
          GET STARTED
        </button>
      </div>
    );
  }

  if (step === 'role') {
    return (
      <div className="fixed inset-0 bg-white flex flex-col p-8 animate-in slide-in-from-bottom-10">
        <div className="flex justify-center my-12"><Logo size="md" /></div>
        <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">Choose your role</h2>
        <div className="space-y-4">
          <button 
            onClick={() => { setRole('client'); setStep('auth'); }}
            className="w-full p-8 border-4 border-slate-100 rounded-[2.5rem] flex items-center gap-6 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Home size={32} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-800">I need help</div>
              <p className="text-slate-500 font-medium">Homeowners & Tenants</p>
            </div>
          </button>
          <button 
            onClick={() => { setRole('worker'); setStep('auth'); }}
            className="w-full p-8 border-4 border-slate-100 rounded-[2.5rem] flex items-center gap-6 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left group"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <HardHat size={32} />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-800">I want to work</div>
              <p className="text-slate-500 font-medium">Service Professionals</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'auth') {
    return (
      <div className="fixed inset-0 bg-white flex flex-col p-8 items-center justify-center">
        <h2 className="text-3xl font-black mb-8">Secure Login</h2>
        <div className="w-full max-w-sm space-y-4">
          <button className="w-full p-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3">
            <Smartphone size={20} /> Phone Number & OTP
          </button>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-400 font-bold uppercase">or</span></div>
          </div>
          <button className="w-full p-5 border border-slate-200 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50">
            <img src="https://www.google.com/favicon.ico" className="w-5" alt="Google" /> Continue with Google
          </button>
        </div>
        <button onClick={() => setStep('profile')} className="mt-8 text-indigo-600 font-bold">Skip for Demo</button>
      </div>
    );
  }

  if (step === 'verify' && role === 'worker') {
    return (
      <div className="fixed inset-0 bg-white flex flex-col p-8 overflow-y-auto">
        <h2 className="text-3xl font-black mb-2">Professional Vetting</h2>
        <p className="text-slate-500 mb-8 font-medium">Platform trust requires valid documents.</p>
        
        <div className="space-y-6">
          <div className="p-8 border-4 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center gap-4 text-center">
            <Camera size={40} className="text-slate-400" />
            <div>
              <div className="font-bold text-slate-800">Scan Identity Document</div>
              <p className="text-xs text-slate-400 mt-1">Driver's License or ID Card</p>
            </div>
            <button className="px-6 py-2 bg-slate-100 rounded-lg text-sm font-bold">Open Camera</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
              <ShieldCheck className="text-emerald-500" />
              <span className="text-xs font-bold text-center">Insurance Proof</span>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
              <HardHat className="text-amber-500" />
              <span className="text-xs font-bold text-center">Trade License</span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setStep('success')}
          className="mt-12 w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl"
        >
          COMPLETE VERIFICATION
        </button>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in zoom-in-95">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 size={64} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4">You're All Set!</h2>
        <p className="text-slate-500 font-medium mb-12">Welcome to the HandyPro ecosystem. Your profile is being reviewed by our managers.</p>
        <button 
          onClick={() => onComplete(role)}
          className="w-full max-w-sm py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl"
        >
          ENTER DASHBOARD
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col p-8">
      <h2 className="text-3xl font-black mb-8">Profile Details</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border-none rounded-xl font-bold" />
        </div>
        {role === 'client' ? (
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Home Address</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="123 Milan St, Rome" className="w-full pl-12 p-4 bg-slate-50 border-none rounded-xl font-bold" />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Primary Trade</label>
            <select className="w-full p-4 bg-slate-50 border-none rounded-xl font-bold appearance-none">
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>HVAC</option>
              <option>Painting</option>
            </select>
          </div>
        )}
      </div>
      <button 
        onClick={() => role === 'worker' ? setStep('verify') : setStep('success')}
        className="mt-12 w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl"
      >
        NEXT
      </button>
    </div>
  );
};

export default OnboardingFlow;
