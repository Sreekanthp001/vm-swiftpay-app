"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowUpRight, ArrowDownLeft, PieChart, Bell, User, Plus, Search } from 'lucide-react';

export default function SwiftPay() {
  return (
    // Background updated to a deep midnight blue with better contrast
    <main className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* Container - Max width settings for Web, Full width for Mobile */}
      <div className="max-w-7xl mx-auto pb-24 md:pb-12">
        
        {/* Navigation / Header */}
        <header className="p-6 md:px-12 md:py-8 flex justify-between items-center bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]">S</div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-none">SwiftPay</h1>
              <p className="text-[9px] text-amber-500/80 uppercase tracking-[0.2em] font-bold mt-1">Venturemond Elite</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="hidden md:flex p-2.5 bg-white/5 rounded-full border border-white/10 text-slate-400 hover:text-white transition-colors"><Search size={20} /></button>
            <button className="p-2.5 bg-white/5 rounded-full border border-white/10 text-amber-500"><Bell size={20} /></button>
            <div className="w-10 h-10 rounded-full border-2 border-amber-500/20 overflow-hidden">
               <div className="w-full h-full bg-slate-800 flex items-center justify-center"><User size={20} /></div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="p-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Card & Actions (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Virtual Card - Sized for Mobile & Web */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full aspect-[1.58/1] max-w-[500px] mx-auto lg:mx-0 rounded-[2rem] p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl group border border-white/10 bg-gradient-to-br from-slate-900 via-[#0f172a] to-black"
            >
              {/* Luxury Textures */}
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full group-hover:bg-amber-500/20 transition-all duration-700" />
              
              <div className="flex justify-between items-start z-10">
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs text-amber-500/60 uppercase tracking-[0.2em] font-bold">Current Balance</p>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">$124,560.00</h2>
                </div>
                <CreditCard size={32} className="text-amber-500/50" />
              </div>
              
              <div className="flex justify-between items-end z-10">
                <div className="space-y-2 md:space-y-3">
                  <p className="text-sm md:text-xl font-mono tracking-[0.25em] text-slate-300">**** 8890</p>
                  <p className="text-[10px] md:text-xs text-amber-500/80 uppercase font-black tracking-widest">SREEKANTH P</p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] md:text-[10px] text-slate-500 uppercase font-bold">Platinum</p>
                  <p className="text-xs md:text-sm font-bold text-slate-200">12/28</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions - Responsive Grid */}
            <div className="grid grid-cols-4 gap-3 md:gap-6 pt-4">
              {[
                { label: 'Send', icon: <ArrowUpRight />, bg: 'bg-amber-500', color: 'text-black' },
                { label: 'Receive', icon: <ArrowDownLeft />, bg: 'bg-slate-900', color: 'text-amber-500' },
                { label: 'Stats', icon: <PieChart />, bg: 'bg-slate-900', color: 'text-amber-500' },
                { label: 'Add', icon: <Plus />, bg: 'bg-slate-900', color: 'text-amber-500' },
              ].map((action, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <motion.div 
                    whileTap={{ scale: 0.9 }}
                    className={`w-full aspect-square max-w-[70px] rounded-2xl md:rounded-3xl ${action.bg} flex items-center justify-center ${action.color} shadow-lg cursor-pointer border border-white/5 hover:brightness-110 transition-all`}
                  >
                    {action.icon}
                  </motion.div>
                  <span className="text-[9px] md:text-[11px] uppercase font-bold text-slate-500 tracking-wider">{action.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Transactions (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex justify-between items-center px-1">
               <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white">Recent Activity</h3>
               <button className="text-[10px] text-amber-500 font-bold hover:underline">View Ledger</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: 'Apple Store', date: 'Jan 12', price: '-$1,299', type: 'exp' },
                { name: 'Freelance Pay', date: 'Jan 11', price: '+$4,500', type: 'inc' },
                { name: 'Cloud Server', date: 'Jan 10', price: '-$45.00', type: 'exp' },
                { name: 'Stripe Payout', date: 'Jan 08', price: '+$2,100', type: 'inc' },
              ].map((tx, i) => (
                <motion.div 
                  key={i} 
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center hover:bg-white/[0.08] transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-500 font-bold">
                      {tx.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold group-hover:text-amber-400 transition-colors">{tx.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">{tx.date} • 10:24 AM</p>
                    </div>
                  </div>
                  <p className={`text-sm font-bold ${tx.type === 'inc' ? 'text-emerald-400' : 'text-white'}`}>{tx.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Bottom Navigation (Visible only on Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-[#020617]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center z-[100]">
         <div className="text-amber-500"><CreditCard size={24} /></div>
         <div className="text-slate-500"><PieChart size={24} /></div>
         <div className="p-3 bg-amber-500 rounded-full text-black -translate-y-6 shadow-xl shadow-amber-500/20"><Plus size={24} /></div>
         <div className="text-slate-500"><Search size={24} /></div>
         <div className="text-slate-500"><User size={24} /></div>
      </div>
    </main>
  );
}