
import React, { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="space-y-6 hidden">
      <p className="text-gray-400 text-sm font-light tracking-wide">
        Enter your email to receive Launching day discounts:
      </p>
      <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm tracking-widest uppercase focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600"
            required
          />
          <div className="absolute inset-0 rounded-xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
        </div>
        <button
          type="submit"
          className="relative overflow-hidden group px-8 py-4 rounded-xl font-bold text-sm tracking-[0.2em] uppercase text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#5825E3] to-[#7B42FF] group-hover:from-[#6A3AEF] group-hover:to-[#8C5AFF] transition-all" />
          <span className="relative z-10">
            {isSubscribed ? 'THANK YOU!' : 'SUBSCRIBE'}
          </span>
        </button>
      </form>
    </div>
  );
};
