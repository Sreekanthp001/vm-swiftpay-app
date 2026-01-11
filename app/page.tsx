"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ArrowUpRight, ArrowDownLeft, PieChart, Bell, User, Plus } from 'lucide-react';

export default function SwiftPay() {
  return (
    // Background updated to a deep midnight blue gradient
    <main className="min-h-screen bg-radial-gradient from-[#0f172a] to-[#020617] text-slate-200 p-6 md:p-12 font-sans">
      
      {/* Header Section */}
      <header className="max-w-5xl mx-auto flex justify-between items-center mb-12">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-white">SwiftPay</h1>
          <p className="text-amber-500/80 text-[10px] uppercase tracking-[0.3em] font-bold">Venturemond Premium Banking</p>
        </div>
        <div className="flex gap-4">
          <div className="p-2 bg-slate-900/50 rounded-full border border-amber-500/20 text-amber-500"><Bell size={18} /></div>
          <div className="p-2 bg-slate-900/50 rounded-full border border-amber-500/20 text-amber-500"><User size={18} /></div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: The Virtual Luxury Card */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
            className="card-gradient h-64 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-amber-500/30"
          >
            {/* Subtle Gold Glow in Card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full" />
            
            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <p className="text-[10px] text-amber-500/60 uppercase tracking-[0.2em] font-bold">Platinum Member Balance</p>
                <h2 className="text-5xl font-bold text-white tracking-tight">$124,560.00</h2>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-md">
                <CreditCard size={32} className="text-amber-500" />
              </div>
            </div>
            
            <div className="flex justify-between items-end z-10">
              <div className="space-y-2">
                <p className="text-lg font-mono tracking-[0.3em] text-slate-300">**** **** **** 8890</p>
                <p className="text-[11px] text-amber-500/80 uppercase font-bold tracking-widest">Sreekanth P</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-slate-500 uppercase font-bold">Valid Thru</p>
                <p className="text-sm font-bold text-slate-200">12/28</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions with Gold Hover Effects */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Send', icon: <ArrowUpRight /> },
              { label: 'Receive', icon: <ArrowDownLeft /> },
              { label: 'Stats', icon: <PieChart /> },
              { label: 'Add', icon: <Plus /> },
            ].map((action, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: '#d4af37', color: '#000' }}
                  className="w-16 h-16 rounded-3xl bg-slate-900 border border-amber-500/20 flex items-center justify-center text-amber-500 transition-all cursor-pointer shadow-lg"
                >
                  {action.icon}
                </motion.div>
                <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Transactions (Classic Look) */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500/80">Premium Ledger</h3>
             <span className="text-[10px] text-slate-500 font-bold underline cursor-pointer">View All</span>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'Apple Store', date: 'Jan 12', price: '-$1,299', color: 'text-white' },
              { name: 'Freelance Pay', date: 'Jan 11', price: '+$4,500', color: 'text-emerald-400' },
              { name: 'Cloud Server', date: 'Jan 10', price: '-$45.00', color: 'text-white' },
              { name: 'Stripe Payout', date: 'Jan 08', price: '+$2,100', color: 'text-emerald-400' },
            ].map((tx, i) => (
              <motion.div 
                whileHover={{ x: 5 }}
                key={i} 
                className="p-4 rounded-[1.5rem] bg-slate-900/40 border border-white/5 flex justify-between items-center hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-[10px] font-bold text-amber-500">
                    {tx.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold group-hover:text-amber-500 transition-colors">{tx.name}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{tx.date}</p>
                  </div>
                </div>
                <p className={`text-sm font-black ${tx.color}`}>{tx.price}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}