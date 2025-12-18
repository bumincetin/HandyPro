
import React, { useState } from 'react';
import { generateJobDescription } from '../services/geminiService';
import { Sparkles, Send, Loader2, Wand2 } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    try {
      const output = await generateJobDescription(input);
      setResult(output || 'Could not generate job description.');
    } catch (err) {
      console.error(err);
      setResult('Error connecting to AI. Please ensure API Key is valid.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-amber-400" />
          <h2 className="text-2xl font-bold">AI Job Scoping Demo</h2>
        </div>
        <p className="text-indigo-100 max-w-xl opacity-90">
          Homeowners often don't know the technical details of a repair. 
          Gemini helps bridge the gap by creating a professional brief from simple descriptions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Describe your issue</label>
          <div className="relative">
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., My kitchen sink is leaking from the bottom and the water pressure is really low in the whole house."
              className="w-full h-48 p-6 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none shadow-sm"
            />
            <button 
              onClick={handleGenerate}
              disabled={isLoading || !input}
              className={`
                absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-100 transition-all
                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700 active:scale-95'}
              `}
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Wand2 size={18} />}
              Refine Brief
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-slate-500">Try:</span>
            {['Electrical buzz in wall', 'Fence panel blown down', 'Tile cracked in bathroom'].map((t) => (
              <button 
                key={t}
                onClick={() => setInput(t)}
                className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-full hover:bg-slate-200 transition-colors"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-3xl p-8">
          <div className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6">Marketplace Post Preview</div>
          {result ? (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 overflow-y-auto prose prose-indigo max-w-none prose-sm">
              <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                {result}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                <Send className="text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-500">
                Generated job description will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
