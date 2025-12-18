
import React from 'react';
import { Home, Shield, ArrowUpRight } from 'lucide-react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizes[size]} flex items-center justify-center`}>
      {/* The "Shield" base */}
      <div className="absolute inset-0 bg-indigo-50 rounded-2xl rotate-3 opacity-50"></div>
      
      {/* Shield Outline */}
      <Shield className="text-indigo-400 absolute left-0 bottom-0 w-3/4 h-3/4 opacity-40" strokeWidth={1.5} />
      
      {/* House Icon - Centered and Bold */}
      <div className="relative z-10 p-2 bg-white rounded-xl shadow-sm border border-slate-100">
        <Home className="text-indigo-900 w-full h-full" strokeWidth={2.5} />
      </div>

      {/* Growth Arrow - Slicing through */}
      <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 z-20">
        <div className="bg-emerald-500 p-1.5 rounded-full shadow-lg shadow-emerald-200">
          <ArrowUpRight className="text-white w-4 h-4 md:w-6 md:h-6" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
