import React, { useState } from 'react';
import { portfolioMeta } from '../../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, Terminal } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultStatus, setResultStatus] = useState('');

  const handleCopyEmail = () => {
    soundEffects.click?.();
    navigator.clipboard.writeText(portfolioMeta.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundEffects.click?.();
    setIsLoading(true);

    try {
      const dataToSend = new FormData(e.target);
      dataToSend.append("access_key", import.meta.env.VITE_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        soundEffects.success?.();
      } else {
        setResultStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResultStatus("Network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col p-3 sm:p-5 text-gray-100 font-sans-clean">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-5 bg-[#181d24] p-3 border-2 retro-shadow-sm">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-[#f43f5e]" />
          <h3 className="font-bubble text-lg sm:text-xl font-bold text-white">
            Direct Contact
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-5 space-y-4">
          <div className="bg-[#1f242d] border-2 border-black p-4 retro-shadow space-y-3">
            <h4 className="font-pixel text-xs text-yellow-400 uppercase">
              Direct Frequency
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Whether you have an exciting full-time opportunity, creative freelance project, or just want to chat about web technologies — my inbox is always open!
            </p>

            <div className="bg-[#13171e] p-2.5 border border-black flex items-center justify-between gap-2 font-mono text-xs">
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-gray-200 truncate">{portfolioMeta.email}</span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2 py-1 bg-[#2563eb] hover:bg-[#1d4ed8] text-white border border-black font-pixel text-[10px] flex items-center gap-1 cursor-pointer shrink-0 transition-colors"
                title="Copy email address"
              >
                {isCopied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                <span>{isCopied ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>
          </div>

          <div className="bg-[#1f242d] border-2 border-black p-4 retro-shadow space-y-3">
            <h4 className="font-pixel text-xs text-cyan-400 uppercase">
              Network Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={portfolioMeta.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.click?.()}
                className="flex items-center gap-2 p-2 bg-[#161a22] hover:bg-[#28313e] text-gray-200 border border-black text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioMeta.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.click?.()}
                className="flex items-center gap-2 p-2 bg-[#161a22] hover:bg-[#28313e] text-gray-200 border border-black text-xs font-mono transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="bg-[#1f242d] border-2 border-black p-4 sm:p-5 rounded-none retro-shadow">
            {isSent ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="font-bubble text-xl font-bold text-white">
                  Transmission Dispatched Successfully!
                </h4>
                <p className="font-mono text-xs text-gray-300 max-w-sm">
                  Thank you for reaching out, {formData.name}. Your packet was logged and I will respond to {formData.email} shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSent(false);
                    setResultStatus('');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 px-3.5 py-1.5 bg-[#2563eb] text-white font-pixel text-xs border border-black cursor-pointer"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-pixel text-[11px] text-gray-300 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jono Doel"
                      className="w-full bg-[#13171e] border-2 border-black px-3 py-1.5 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block font-pixel text-[11px] text-gray-300 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jono@example.com"
                      className="w-full bg-[#13171e] border-2 border-black px-3 py-1.5 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-pixel text-[11px] text-gray-300 mb-1">
                    SUBJECT / PURPOSE
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-[#13171e] border-2 border-black px-3 py-1.5 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8]"
                  />
                </div>

                <div>
                  <label className="block font-pixel text-[11px] text-gray-300 mb-1">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, or message..."
                    className="w-full bg-[#13171e] border-2 border-black p-3 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8] resize-none"
                  />
                </div>

                {resultStatus && (
                  <p className="text-xs font-mono text-red-400">{resultStatus}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-[#e5a84b] hover:bg-[#d49638] disabled:opacity-50 text-black font-pixel text-xs font-bold border-2 border-black retro-shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
                >
                  {isLoading ? (
                    <span>ENCRYPTING & TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};