
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  GitBranch, 
  Database, 
  Zap, 
  MessageSquareText, 
  Smartphone,
  Menu,
  X,
  ChevronRight,
  Info,
  Power,
  PlusSquare,
  Search,
  MessageSquare,
  ShieldCheck,
  Play
} from 'lucide-react';

// Removed unused Section import
import { UserRole } from './types';
import Overview from './components/Overview';
import PRD from './components/PRD';
import UserFlow from './components/UserFlow';
import Architecture from './components/Architecture';
import USP from './components/USP';
import AIAssistant from './components/AIAssistant';
import WorkerView from './components/WorkerView';
import WorkerSimpleDashboard from './components/WorkerSimpleDashboard';
import CreateJobScreen from './components/CreateJobScreen';
import JobMarketplace from './components/JobMarketplace';
import JobDetailScreen from './components/JobDetailScreen';
import JobExecutionScreen from './components/JobExecutionScreen';
import TranslationChat from './components/TranslationChat';
import ClientDashboard from './components/ClientDashboard';
import AdminPanel from './components/AdminPanel';
import OnboardingFlow from './components/OnboardingFlow';
import Logo from './components/Logo';

const MobileNav = ({ role }: { role: UserRole }) => {
  const location = useLocation();
  const navItems = role === 'client' ? [
    { icon: <LayoutDashboard />, label: 'Home', path: '/client-home' },
    { icon: <PlusSquare />, label: 'Post', path: '/create-job' },
    { icon: <MessageSquare />, label: 'Chat', path: '/chat' },
  ] : [
    { icon: <Power />, label: 'Home', path: '/worker-simple' },
    { icon: <Search />, label: 'Market', path: '/marketplace' },
    { icon: <MessageSquare />, label: 'Inbox', path: '/chat' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-4 z-50 lg:hidden shadow-[0_-8px_40px_rgba(0,0,0,0.05)] pb-4">
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          className={`flex flex-col items-center gap-1.5 transition-all ${location.pathname === item.path ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-400'}`}
        >
          {React.cloneElement(item.icon as React.ReactElement<any>, { size: 22, strokeWidth: location.pathname === item.path ? 3 : 2 })}
          <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

const Sidebar = ({ isOpen, setIsOpen, role, setRole }: { isOpen: boolean, setIsOpen: (o: boolean) => void, role: UserRole, setRole: (r: UserRole) => void }) => {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '/overview' : location.pathname;

  const blueprintItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/overview' },
    { icon: <ClipboardList size={20} />, label: 'PRD Summary', path: '/prd' },
    { icon: <GitBranch size={20} />, label: 'User Flow', path: '/userflow' },
    { icon: <Database size={20} />, label: 'Architecture', path: '/architecture' },
    { icon: <Zap size={20} />, label: 'USP Factor', path: '/usp' },
  ];

  const appItems = role === 'client' ? [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/client-home' },
    { icon: <PlusSquare size={20} />, label: 'Post Job', path: '/create-job' },
    { icon: <MessageSquareText size={20} />, label: 'AI Scoping', path: '/ai-assistant' },
    { icon: <MessageSquare size={20} />, label: 'Chat Translations', path: '/chat' },
  ] : role === 'worker' ? [
    { icon: <Power size={20} />, label: 'Simple Dashboard', path: '/worker-simple' },
    { icon: <Search size={20} />, label: 'Marketplace', path: '/marketplace' },
    { icon: <Play size={20} />, label: 'Execution Mode', path: '/execution' },
    { icon: <MessageSquare size={20} />, label: 'Chat Translations', path: '/chat' },
  ] : [
    { icon: <ShieldCheck size={20} />, label: 'Platform Management', path: '/admin' },
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-white border-r border-slate-200 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-slate-100 flex items-center gap-4">
            <Logo size="sm" />
            <div>
              <h1 className="text-xl font-black text-slate-800 tracking-tighter">HandyPro</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">{role} APP</p>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-6 space-y-10">
            <div>
              <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Core Modules</p>
              <div className="space-y-1">
                {appItems.map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${currentPath === item.path ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 2.5 })}
                    <span className="font-bold">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">The Blueprint</p>
              <div className="space-y-1">
                {blueprintItems.map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-4 py-2 text-sm rounded-xl transition-all ${currentPath === item.path ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-500 hover:text-indigo-600'}`}>
                    {item.icon} <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="p-6 border-t border-slate-100 flex flex-col gap-2">
             <button onClick={() => setRole('admin')} className="w-full p-3 bg-slate-900 rounded-xl text-xs font-bold text-white hover:bg-slate-800 transition-colors">
              Access Admin Panel
            </button>
            <button onClick={() => setRole(role === 'client' ? 'worker' : 'client')} className="w-full p-3 bg-slate-100 rounded-xl text-xs font-bold text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              Switch Experience
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') as UserRole;
    if (savedRole) setRole(savedRole);
  }, []);

  const handleRoleSelect = (r: UserRole) => {
    setRole(r);
    localStorage.setItem('userRole', r);
  };

  return (
    <HashRouter>
      {!role && <OnboardingFlow onComplete={handleRoleSelect} />}
      <div className={`min-h-screen flex bg-slate-50 ${!role ? 'blur-xl pointer-events-none grayscale opacity-50' : ''}`}>
        {role && (
          <>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} role={role} setRole={handleRoleSelect} />
            {role !== 'admin' && <MobileNav role={role} />}
          </>
        )}

        <main className="flex-1 lg:ml-72 min-w-0">
          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:hidden">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600"><Menu size={24} /></button>
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="font-black text-slate-800 tracking-tighter">HandyPro</span>
            </div>
            <div className="w-10"></div>
          </header>

          <div className="max-w-6xl mx-auto p-6 lg:p-12 pb-32 lg:pb-12">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/prd" element={<PRD />} />
              <Route path="/userflow" element={<UserFlow />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/usp" element={<USP />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/worker-view" element={<WorkerView />} />
              <Route path="/worker-simple" element={<WorkerSimpleDashboard />} />
              <Route path="/client-home" element={<ClientDashboard />} />
              <Route path="/create-job" element={<CreateJobScreen />} />
              <Route path="/marketplace" element={<JobMarketplace />} />
              <Route path="/job/:id" element={<JobDetailScreen />} />
              <Route path="/chat" element={<TranslationChat />} />
              <Route path="/execution" element={<JobExecutionScreen />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;