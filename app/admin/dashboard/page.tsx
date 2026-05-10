"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, FileText, Settings, LogOut, TrendingUp, Briefcase, MessageSquare } from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Leads", value: "128", icon: <Users className="h-5 w-5" />, color: "from-blue-500 to-cyan-500" },
    { label: "Active Projects", value: "14", icon: <Briefcase className="h-5 w-5" />, color: "from-purple-500 to-pink-500" },
    { label: "Inquiries", value: "42", icon: <MessageSquare className="h-5 w-5" />, color: "from-orange-500 to-red-500" },
    { label: "Conversion Rate", value: "18.4%", icon: <TrendingUp className="h-5 w-5" />, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-surface/5 border-r border-border/50 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-gradient-from to-gradient-to"></div>
          <span className="font-black text-xl tracking-tighter">Control Center</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, active: true },
            { label: "Content", icon: <FileText className="h-5 w-5" />, active: false },
            { label: "Users", icon: <Users className="h-5 w-5" />, active: false },
            { label: "Settings", icon: <Settings className="h-5 w-5" />, active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                item.active 
                  ? "bg-gradient-to-r from-gradient-from to-gradient-to text-white shadow-lg shadow-gradient-from/20" 
                  : "text-foreground/60 hover:bg-surface/10"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-500/10 transition-all mt-auto"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2 tracking-tight">Dashboard Overview</h1>
            <p className="text-foreground/60">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 rounded-full bg-surface/5 border border-border/50 text-xs font-bold uppercase tracking-widest text-foreground/70">
                System Status: Online
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-surface/5 border border-border/50 backdrop-blur-sm group hover:border-gradient-from/30 transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                 <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                    <div className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent font-bold`}>
                       {stat.icon}
                    </div>
                 </div>
              </div>
              <p className="text-sm font-bold text-foreground/50 mb-1 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-black">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-surface/5 border border-border/50">
              <h3 className="text-xl font-bold mb-6">Recent Project Inquiries</h3>
              <div className="space-y-4">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border/30">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center font-bold text-xs">JD</div>
                          <div>
                             <p className="font-bold text-sm">John Doe - TechCorp</p>
                             <p className="text-xs text-foreground/50">Custom ERP Development</p>
                          </div>
                       </div>
                       <span className="text-xs font-bold text-gradient-from">New</span>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="p-8 rounded-[2.5rem] bg-surface/5 border border-border/50">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                 <button className="p-4 rounded-2xl bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 border border-gradient-from/20 text-sm font-bold text-gradient-from hover:bg-gradient-from/20 transition-all">
                    Post New Blog
                 </button>
                 <button className="p-4 rounded-2xl bg-surface/10 border border-border/50 text-sm font-bold text-foreground/70 hover:bg-surface/20 transition-all">
                    Add Service
                 </button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
