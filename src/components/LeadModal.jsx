import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const LeadModal = () => {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  
  const handleNext = (e) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success state
  };

  const handleClose = () => {
    closeModal();
    // Reset state after animation finishes
    setTimeout(() => {
      setStep(1);
      setEmail('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 pointer-events-none flex items-center justify-center p-4 z-[101]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden pointer-events-auto border border-brand-border/40"
            >
              <div className="flex justify-between items-center p-6 border-b border-brand-border/40">
                <h3 className="font-medium text-brand-dark text-lg">Try 10 cases free</h3>
                <button
                  onClick={handleClose}
                  className="p-2 text-brand-muted hover:text-brand-dark transition-colors rounded-full hover:bg-brand-light"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                {step === 1 && (
                  <motion.form 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleNext} 
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="dr.smith@hospital.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-brand-muted/50"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-dark text-white rounded-xl py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-brand-dark/90 transition-colors"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          placeholder="Smith"
                          className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="hospital" className="block text-sm font-medium text-brand-dark mb-2">Hospital or Group Name</label>
                      <input
                        type="text"
                        id="hospital"
                        required
                        placeholder="Memorial Health"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-dark text-white rounded-xl py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-brand-dark/90 transition-colors mt-2"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-6 gap-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-medium text-brand-dark">You're on the list</h4>
                    <p className="text-brand-muted text-sm max-w-xs leading-relaxed">
                      Our onboarding team will reach out to <strong>{email}</strong> within 24 hours to set up your pilot cases.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-4 px-6 py-2 bg-brand-light text-brand-dark font-medium rounded-full hover:bg-brand-border/50 transition-colors text-sm"
                    >
                      Close window
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;