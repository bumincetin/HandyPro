
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, Filter, ShieldAlert, ChevronRight } from 'lucide-react';
import { Job } from '../types';

const MOCK_MARKET_JOBS: Job[] = [
  { id: '101', title: 'Full Bathroom Repaint', description: 'Need professional finish for master bathroom.', isEmergency: false, status: 'open', clientName: 'Luca M.', distance: '2.1 mi', payout: '$350', location: 'Rome, Center', category: 'Painting', materialRequests: [] },
  { id: '102', title: 'Broken Main Fuse', description: 'Whole house has no power. Urgent.', isEmergency: true, status: 'open', clientName: 'Anna S.', distance: '0.5 mi', payout: '$200/hr', location: 'Rome, Trastevere', category: 'Electrical', materialRequests: [] },
  { id: '103', title: 'Garden Fence Repair', description: 'Storm knocked down two panels.', isEmergency: false, status: 'open', clientName: 'Roberto B.', distance: '5.4 mi', payout: '$150', location: 'Rome, Prati', category: 'Carpentry', materialRequests: [] },
  { id: '104', title: 'Kitchen Sink Leak', description: 'Steady drip from under the basin.', isEmergency: false, status: 'open', clientName: 'Maria G.', distance: '1.2 mi', payout: '$90', location: 'Rome, Monti', category: 'Plumbing', materialRequests: [] },
];

const JobMarketplace: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Nearby Jobs</h2>
          <p className="text-slate-500 font-medium">Available work in Rome today</p>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {MOCK_MARKET_JOBS.map((job) => (
          <div 
            key={job.id} 
            onClick={() => navigate(`/job/${job.id}`)}
            className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  {job.isEmergency && (
                    <span className="px-2 py-0.5 bg-rose-100 text-rose-600 text-[10px] font-black uppercase rounded-md">Emergency</span>
                  )}
                  <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                </div>
                <p className="text-slate-500 text-sm line-clamp-1">{job.description}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                    <MapPin size={14} className="text-indigo-500" />
                    {job.location} ({job.distance})
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Posted 2h ago</div>
                </div>
              </div>
              <div className="flex items-center justify-between md:flex-col md:items-end gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <div className="text-2xl font-black text-emerald-600">{job.payout}</div>
                <button className="flex items-center gap-1 text-indigo-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobMarketplace;