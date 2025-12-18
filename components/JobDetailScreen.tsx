
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  DollarSign, 
  User, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Mic, 
  Loader2, 
  ChevronLeft,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Job } from '../types';
import { transcribeWorkerVoice } from '../services/geminiService';

// Reusing mock data for demo purposes
const MOCK_MARKET_JOBS: Job[] = [
  { id: '101', title: 'Full Bathroom Repaint', description: 'Need professional finish for master bathroom. Walls and ceiling need two coats. Minimal prep required as surfaces are already sanded.', isEmergency: false, status: 'open', clientName: 'Luca M.', distance: '2.1 mi', payout: '$350', location: 'Rome, Center', category: 'Painting', materialRequests: [] },
  { id: '102', title: 'Broken Main Fuse', description: 'Whole house has no power. Urgent. Possible short circuit in the basement panel after the heavy rain yesterday.', isEmergency: true, status: 'open', clientName: 'Anna S.', distance: '0.5 mi', payout: '$200/hr', location: 'Rome, Trastevere', category: 'Electrical', materialRequests: [] },
  { id: '103', title: 'Garden Fence Repair', description: 'Storm knocked down two panels. Need them reinforced with new posts. Materials can be purchased on my behalf and reimbursed.', isEmergency: false, status: 'open', clientName: 'Roberto B.', distance: '5.4 mi', payout: '$150', location: 'Rome, Prati', category: 'Carpentry', materialRequests: [] },
  { id: '104', title: 'Kitchen Sink Leak', description: 'Steady drip from under the basin. P-trap looks fine, might be the faucet connection. Need someone with own tools.', isEmergency: false, status: 'open', clientName: 'Maria G.', distance: '1.2 mi', payout: '$90', location: 'Rome, Monti', category: 'Plumbing', materialRequests: [] },
];

const JobDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = MOCK_MARKET_JOBS.find(j => j.id === id);

  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [bidDescription, setBidDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock Voice Recording Logic
  const handleVoiceBid = async () => {
    if (isRecording) {
      setIsRecording(false);
      setIsTranscribing(true);
      // Simulate voice transcription via Gemini
      setTimeout(() => {
        setBidDescription("I am a certified electrician with 10 years of experience. I can be there in 20 minutes to fix your fuse box. I have all the necessary parts in my van.");
        setIsTranscribing(false);
      }, 2000);
    } else {
      setIsRecording(true);
    }
  };

  const submitBid = () => {
    setShowSuccess(true);
    setTimeout(() => navigate('/marketplace'), 2000);
  };

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-slate-500">
        <p>Job not found</p>
        <button onClick={() => navigate('/marketplace')} className="mt-4 text-indigo-600 font-bold">Back to Marketplace</button>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-[3rem] p-12 text-center shadow-xl animate-in zoom-in-95">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-4">Bid Submitted!</h2>
        <p className="text-slate-500 mb-8">The client has been notified. You'll hear back if they accept your offer.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <button 
        onClick={() => navigate('/marketplace')}
        className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors"
      >
        <ChevronLeft size={20} /> Back to Jobs
      </button>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              {job.isEmergency && (
                <span className="px-3 py-1 bg-rose-100 text-rose-600 text-xs font-black uppercase rounded-full">Emergency</span>
              )}
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-black uppercase rounded-full">{job.autoDetectedCategory || job.category || 'Service'}</span>
            </div>
            
            <h1 className="text-3xl font-black text-slate-900 mb-4">{job.title}</h1>
            
            <div className="flex flex-wrap gap-6 mb-8 py-4 border-y border-slate-50">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} className="text-indigo-500" />
                <span className="text-sm font-bold">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock size={18} className="text-indigo-500" />
                <span className="text-sm font-bold">Started 2 hours ago</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <DollarSign size={18} className="text-emerald-500" />
                <span className="text-sm font-black text-emerald-600">{job.payout}</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Job Description</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {job.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <User size={20} className="text-indigo-500" /> Client Information
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl">
                {job.clientName.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-slate-900">{job.clientName}</div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 text-sm">★★★★★</span>
                  <span className="text-xs text-slate-400 font-bold">(24 reviews)</span>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-wider">
                <ShieldCheck size={12} /> Verified Homeowner
              </div>
            </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-indigo-900 p-8 rounded-[3rem] text-white shadow-xl shadow-indigo-100">
            <h3 className="text-xl font-bold mb-6">Place Your Bid</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <textarea 
                  value={bidDescription}
                  onChange={(e) => setBidDescription(e.target.value)}
                  placeholder="Tell the client why you're the best fit..."
                  className="w-full h-40 p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 outline-none resize-none text-sm"
                />
                
                {isTranscribing && (
                  <div className="absolute inset-0 bg-indigo-950/80 rounded-2xl flex flex-col items-center justify-center gap-2">
                    <Loader2 className="animate-spin text-white" />
                    <span className="text-xs font-bold uppercase tracking-widest">AI Transcribing...</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={handleVoiceBid}
                  className={`
                    flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all
                    ${isRecording ? 'bg-rose-500 animate-pulse' : 'bg-white/10 hover:bg-white/20'}
                  `}
                >
                  <Mic size={20} />
                  {isRecording ? 'Stop & Transcribe' : 'Voice Bid'}
                </button>
                <button 
                  onClick={() => navigate('/chat')}
                  className="px-4 py-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"
                  title="Message Client"
                >
                  <MessageSquare size={20} />
                </button>
              </div>

              <button 
                onClick={submitBid}
                disabled={!bidDescription}
                className={`
                  w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all
                  ${bidDescription ? 'bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-900/20' : 'bg-white/5 text-white/20 cursor-not-allowed'}
                `}
              >
                SUBMIT OFFER
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-indigo-300 font-medium italic">
              <Sparkles size={14} /> AI will polish your voice notes for the client.
            </div>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem]">
            <h4 className="font-bold text-slate-800 text-sm mb-3">Service Fees</h4>
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Platform Service Fee</span>
              <span>5%</span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Managed Insurance</span>
              <span>Included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailScreen;