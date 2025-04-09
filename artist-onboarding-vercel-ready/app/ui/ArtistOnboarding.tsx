import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Profile Info",
  "Upload ID",
  "Review & Sign Agreement",
  "Expectations",
  "How It Works",
  "Genre Selection",
  "Songwriting Brief",
  "Upload Song"
];

export default function ArtistOnboarding() {
  const [step, setStep] = useState(0);
  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-black text-white p-4">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mt-10 bg-black/70 border border-orange-500 rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Step {step + 1}: {steps[step]}</h2>

        {step === 0 && (
          <div className="grid gap-4">
            <input className="p-2 rounded" placeholder="Artist Name" />
            <input className="p-2 rounded" placeholder="Legal Name" />
            <input className="p-2 rounded" placeholder="Address" />
            <input className="p-2 rounded" placeholder="Payment Email" />
            <input className="p-2 rounded" placeholder="Tax Info (e.g. SSN or EIN)" />
          </div>
        )}

        {step === 1 && (
          <input className="p-2 rounded" type="file" accept="image/*,application/pdf" />
        )}

        {step === 2 && (
          <div className="space-y-2">
            <p className="text-sm">Please review the agreement below:</p>
            <textarea className="h-40 w-full p-2 rounded" placeholder="[Agreement Text Here]" />
            <label><input type="checkbox" /> I agree and sign</label>
          </div>
        )}

        {step === 3 && (
          <p className="text-sm">Here's what we expect from you as an artist in our community... [copy goes here]</p>
        )}

        {step === 4 && (
          <p className="text-sm">Here's how the platform works: [process explanation goes here]</p>
        )}

        {step === 5 && (
          <div className="space-y-2">
            <select className="p-2 rounded w-full">
              <option>Singer-Songwriter</option>
              <option>Acoustic Pop</option>
              <option>Country</option>
              <option>Folk</option>
              <option>Rock</option>
              <option>Spanish</option>
              <option>Christian</option>
              <option>Rap</option>
              <option>R&B</option>
            </select>
            <select className="p-2 rounded w-full">
              <option>Singer-Songwriter</option>
              <option>Acoustic Pop</option>
              <option>Country</option>
              <option>Folk</option>
              <option>Rock</option>
              <option>Spanish</option>
              <option>Christian</option>
              <option>Rap</option>
              <option>R&B</option>
            </select>
          </div>
        )}

        {step === 6 && (
          <div className="grid gap-2">
            <p className="text-sm">Here’s a brief from a customer:</p>
            <p className="text-xs italic">TEST TEST TEST</p>
            <input className="p-2 rounded" placeholder="Song Title" />
            <textarea className="p-2 rounded h-20" placeholder="Verse 1" />
            <textarea className="p-2 rounded h-20" placeholder="Chorus" />
            <textarea className="p-2 rounded h-20" placeholder="Verse 2" />
          </div>
        )}

        {step === 7 && (
          <div className="space-y-2">
            <input className="p-2 rounded" type="file" accept="audio/*" />
            <p className="text-xs text-orange-200">Please upload your complete song file here.</p>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <button onClick={prev} disabled={step === 0} className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50">Back</button>
          <button onClick={next} disabled={step === steps.length - 1} className="bg-orange-500 px-4 py-2 rounded">Next</button>
        </div>
      </motion.div>
    </div>
  );
}
