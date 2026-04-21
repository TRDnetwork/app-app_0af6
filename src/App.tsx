import { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-4 tracking-tight">
            Dawn Brew
          </h1>
          <p className="text-xl md:text-2xl text-text_dim mb-8">
            Hand-roasted coffee, crafted with care. Coming to Karnal in Summer 2026.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus('idle');
                }}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-text_dim focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg bg-accent text-white font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  status === 'success'
                    ? 'bg-success hover:scale-100 cursor-default'
                    : 'hover:shadow-lg hover:shadow-accent/20'
                }`}
              >
                {status === 'success' ? '✓ Joined!' : 'Notify Me'}
              </button>
            </div>
          </form>
        </div>
      </header>

      {/* Content Sections */}
      <main className="flex-1 px-6 py-24 max-w-4xl mx-auto w-full space-y-24">
        {/* Origin */}
        <section className="text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-text">Our Origin</h2>
          <p className="text-lg text-text_dim leading-relaxed">
            Sourced from small farms with sustainable practices, every bean tells a story of soil, sun, and dedication. 
            We believe in honoring the journey from farm to cup.
          </p>
        </section>

        {/* Brewing */}
        <section className="text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-text">The Craft of Brewing</h2>
          <p className="text-lg text-text_dim leading-relaxed">
            Roasted in small batches using traditional methods, our coffee is balanced, aromatic, and deeply flavorful. 
            Each roast is a ritual — precise, patient, and passionate.
          </p>
        </section>

        {/* Location */}
        <section className="text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-text">Find Us in Karnal</h2>
          <p className="text-lg text-text_dim leading-relaxed">
            Nestled in the heart of Karnal, our space blends rustic warmth with modern simplicity. 
            A sanctuary for slow mornings and meaningful conversations.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text_dim text-sm">
            &copy; {new Date().getFullYear()} Dawn Brew. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/dawnbrew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_dim hover:text-accent transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/dawnbrew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_dim hover:text-accent transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;