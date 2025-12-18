
import React, { useState, useRef } from 'react';
import { Camera, Sparkles, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { analyzeJobImage } from '../services/geminiService';

const CreateJobScreen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = (reader.result as string).split(',')[1];
      setImage(reader.result as string);
      setIsAnalyzing(true);
      try {
        const detectedCategory = await analyzeJobImage(base64, file.type);
        if (detectedCategory) setCategory(detectedCategory);
      } catch (err) {
        console.error("Analysis failed", err);
      } finally {
        setIsAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-[3rem] p-12 text-center shadow-xl animate-in zoom-in-95">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-4">Job Posted!</h2>
        <p className="text-slate-500 mb-8">Local experts have been notified. You'll receive bids shortly.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold"
        >
          View My Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col min-h-[700px]">
      <div className="bg-indigo-600 p-8 text-white">
        <h2 className="text-3xl font-black mb-2">Something broken?</h2>
        <p className="opacity-80 font-medium">Snap a photo and we'll handle the rest.</p>
      </div>

      <div className="p-8 flex-1 flex flex-col gap-6">
        {/* Image Scoper */}
        <div 
          onClick={() => fileInputRef.current?.click()}
          className={`
            aspect-square rounded-[2rem] border-4 border-dashed flex flex-col items-center justify-center relative overflow-hidden transition-all
            ${image ? 'border-transparent' : 'border-slate-200 hover:border-indigo-300 bg-slate-50'}
          `}
        >
          {image ? (
            <img src={image} className="absolute inset-0 w-full h-full object-cover" alt="Repair issue" />
          ) : (
            <div className="flex flex-col items-center gap-3 text-slate-400">
              <Camera size={48} />
              <span className="font-bold text-sm">Tap to Take Photo</span>
            </div>
          )}
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
          
          {isAnalyzing && (
            <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-sm flex flex-col items-center justify-center text-white gap-3">
              <Loader2 className="animate-spin" size={32} />
              <span className="font-bold tracking-widest text-xs uppercase">AI Analyzing...</span>
            </div>
          )}
        </div>

        {/* AI Triage Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
            <Sparkles size={14} /> AI Recommendation
          </div>
          <div className="relative">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-5 bg-slate-100 border-none rounded-2xl font-bold text-slate-800 appearance-none focus:ring-4 focus:ring-indigo-100"
            >
              <option value="">Select Category</option>
              {['Plumbing', 'Electrical', 'HVAC', 'Carpentry', 'Painting', 'Cleaning'].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">▼</div>
          </div>
          
          <textarea 
            placeholder="Add a few words (optional)"
            className="w-full p-5 bg-slate-100 border-none rounded-2xl font-medium text-slate-700 resize-none h-24 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <button 
          onClick={() => setIsSuccess(true)}
          disabled={!category || !image}
          className={`
            w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all mt-auto
            ${category && image ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
          `}
        >
          POST JOB <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CreateJobScreen;
