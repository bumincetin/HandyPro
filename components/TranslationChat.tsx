
import React, { useState } from 'react';
import { Send, Globe, Languages, Loader2 } from 'lucide-react';
import { translateMessage } from '../services/geminiService';
import { Message, UserRole } from '../types';

const TranslationChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: 'worker', senderRole: 'worker', text: 'Salve, sono arrivato. Dove posso parcheggiare il furgone?', timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isTranslating, setIsTranslating] = useState<string | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'client',
      senderRole: 'client',
      text: input,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const handleTranslate = async (msgId: string, text: string) => {
    setIsTranslating(msgId);
    try {
      const result = await translateMessage(text, "English");
      setMessages(prev => prev.map(m => m.id === msgId ? { ...m, translatedText: result } : m));
    } catch (e) {
      console.error(e);
    } finally {
      setIsTranslating(null);
    }
  };

  return (
    <div className="max-w-md mx-auto h-[600px] bg-white rounded-[3rem] border border-slate-200 shadow-2xl flex flex-col overflow-hidden">
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">M</div>
          <div>
            <div className="font-bold">Marco (Plumber)</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> Online
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-white/10 rounded-lg"><Globe size={20} /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.senderRole === 'client' ? 'items-end' : 'items-start'}`}>
            <div className={`
              max-w-[80%] p-4 rounded-2xl shadow-sm text-sm font-medium
              ${msg.senderRole === 'client' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-200'}
            `}>
              {msg.text}
              {msg.translatedText && (
                <div className="mt-2 pt-2 border-t border-indigo-400/30 text-xs italic opacity-90 flex items-center gap-1">
                  <Languages size={12} /> {msg.translatedText}
                </div>
              )}
            </div>
            {msg.senderRole === 'worker' && !msg.translatedText && (
              <button 
                onClick={() => handleTranslate(msg.id, msg.text)}
                disabled={!!isTranslating}
                className="mt-1 text-[10px] font-black text-indigo-500 uppercase tracking-widest flex items-center gap-1 hover:text-indigo-700 disabled:opacity-50"
              >
                {isTranslating === msg.id ? <Loader2 size={10} className="animate-spin" /> : <Globe size={10} />}
                Translate to English
              </button>
            )}
            <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold">
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
        />
        <button 
          onClick={handleSend}
          className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default TranslationChat;
