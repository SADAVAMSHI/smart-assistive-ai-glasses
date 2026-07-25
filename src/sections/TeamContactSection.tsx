import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Building2, Mail, User, Heart, Award, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/projectData';
import { useScrollAnimation } from '../utils/gsapHelper';

export const TeamContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: 'Hospital / Healthcare Center',
    message: '',
  });

  const sectionRef = useScrollAnimation(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="team-contact" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-3">
            06 • ENGINEERING TEAM & CLOSING VISION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Meet the Team & Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
             • Smart Assistive Wearable Division
          </p>
        </div>

        {/* Vision Quote Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-200 block mb-4 font-bold">
              PROJECT CLOSING VISION
            </span>
            <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-6">
              "We envision a future where every visually impaired individual travels, explores, and lives independently — without fear or dependence."
            </blockquote>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-cyan-100">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Complete Indoor Mapping Prototype</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Field Pilots in 2 Regional Hospitals</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Currency Recognition Beta</span>
            </div>
          </div>
        </div>

        {/* Contact & Inquiry Form */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              PROJECT INQUIRY & PILOTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Get in Touch or Request Presentation Deck
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              We welcome collaboration with healthcare institutions, transit authorities, accessibility grants, and evaluators to deploy early pilot units.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">Institutional Partnerships</span>
                  <span className="text-slate-400">Hospitals, Transit Hubs & NGOs</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">Academic Engineering Presentation</span>
                  <span className="text-slate-400">Project Showcase</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Box */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-inner">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Thank you for reaching out. Our engineering presentation deck and pilot details have been queued.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Your Name / Representative
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Alex Rivera"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.rivera@hospital.org"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Organization / Evaluator Type
                  </label>
                  <select
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option>Hospital / Healthcare Center</option>
                    <option>Transit Hub / Government Program</option>
                    <option>NGO / Accessibility Foundation</option>
                    <option>Academic Evaluator / Capstone Review</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Message or Pilot Request Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We are interested in scheduling an indoor navigation pilot..."
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
