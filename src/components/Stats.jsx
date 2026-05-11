import React from 'react';

const stats = [
  { value: "1,500+", label: "Healthcare Facilities", border: true },
  { value: "10,000+", label: "Daily Scans Reported", border: true },
  { value: "30 min", label: "Average Turnaround", subtext: "vs. 24-48 hrs industry avg", border: true },
  { value: "400+", label: "Expert Radiologists", border: false },
];

const Stats = () => {
  return (
    <section className="py-16 bg-brand-surface border-b border-white/50">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center md:items-start px-6 ${
                stat.border ? 'md:border-r border-brand-border/40' : ''
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-mono text-brand-dark mb-4 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-brand-muted font-light text-lg">{stat.label}</p>
              {stat.subtext && (
                <p className="text-xs font-medium text-brand-muted/70 mt-3 bg-white/50 px-3 py-1 rounded-full border border-brand-border/30">{stat.subtext}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
