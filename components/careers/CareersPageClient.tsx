"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function CareersPageClient() {
  const jobs = [
    {
      title: "Senior Full-Stack Engineer",
      type: "Full-time",
      location: "Remote / Dhaka",
      salary: "Competitive",
      category: "Engineering",
    },
    {
      title: "UI/UX Product Designer",
      type: "Full-time",
      location: "Remote",
      salary: "Competitive",
      category: "Design",
    },
    {
      title: "Technical Project Manager",
      type: "Full-time",
      location: "Dhaka",
      salary: "Competitive",
      category: "Management",
    },
  ];

  return (
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent"
          >
            Join the Space
          </motion.h1>
          <p className="text-lg md:text-xl text-foreground/70">
            We're looking for passionate individuals who want to build software that makes an impact. 
            Come help us shape the future of technology.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-surface/5 border border-border/50 hover:bg-surface/10 hover:border-gradient-from/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-gradient-from/10 text-gradient-from text-xs font-bold uppercase tracking-widest">
                  {job.category}
                </span>
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                  <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.salary}</span>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to text-white font-bold hover:shadow-lg transition-all whitespace-nowrap">
                Apply Now <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center p-12 rounded-3xl bg-surface/5 border border-border/50">
          <h2 className="text-2xl font-bold mb-4">Don't see a role for you?</h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            We're always looking for talented people. Send your CV and a brief introduction to 
            <span className="text-gradient-from font-bold mx-1">careers@tennissine.space</span>
          </p>
        </div>
      </div>
    </div>
  );
}
