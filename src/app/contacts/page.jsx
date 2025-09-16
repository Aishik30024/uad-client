"use client";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

function MainComponent() {
  const [step, setStep] = useState(1);
  const [recaptcha, setRecaptcha] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const nextStep = async () => {
    const fields = {
      1: ["name", "email", "phone"],
      2: ["service"],
    }[step];
    const isValid = await trigger(fields);
    if (isValid && step < 3) {
      setStep(step + 1);
      window.gtag && window.gtag("event", `contact_form_step_${step + 1}`, { event_category: "Contact Form" });
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = async (data) => {
    if (!recaptcha) {
      toast.error("Please complete the CAPTCHA");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptcha }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setStep(1);
      toast.success("Thank you! We'll get in touch soon.");
      window.gtag && window.gtag("event", "contact_form_submit", { event_category: "Contact Form" });
    } catch (err) {
      toast.error("Submission failed. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
            <div className="w-screen">
              <div className="mt-[2vh] mx-[2vh]">
                <Header />
              </div>
            </div>
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center relative overflow-hidden">
      
      <Head>
        <title>Contact Us | Your Agency Name</title>
        <meta name="description" content="Get in touch with our digital marketing and branding experts." />
      </Head>
      <Toaster position="top-center" />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-[#6366f1] rounded-full blur-3xl opacity-10"
        animate={{ y: [-20, 20], scale: [1, 1.2] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
        style={{ top: "-80px", left: "-80px" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-[#8b5cf6] rounded-full blur-3xl opacity-10"
        animate={{ y: [20, -20], scale: [1.2, 1] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
        style={{ bottom: "-80px", right: "-80px" }}
      />
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1f2937] font-poppins mb-2">
            Let's Connect
          </h1>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-3 h-3 rounded-full ${
                  step >= num ? "bg-[#6366f1]" : "bg-gray-200"
                }`}
                aria-label={`Step ${num} ${step >= num ? "completed" : "pending"}`}
              />
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    autoFocus
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[\d\s-]{10,}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                  )}
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="service" className="block text-sm font-medium">
                    Select a Service
                  </label>
                  <select
                    id="service"
                    {...register("service", { required: "Please select a service" })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  >
                    <option value="">Select a Service</option>
                    <option value="branding">Branding</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="web-design">Web Design</option>
                  </select>
                  {errors.service && (
                    <span className="text-red-500 text-sm">{errors.service.message}</span>
                  )}
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>
                <ReCAPTCHA
                  sitekey="your-recaptcha-site-key"
                  onChange={(value) => setRecaptcha(value)}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 text-[#6366f1] border border-[#6366f1] rounded-lg hover:bg-[#6366f1] hover:text-white transition-colors"
              >
                Back
              </button>
            )}
            <button
              type={step === 3 ? "submit" : "button"}
              onClick={step === 3 ? undefined : nextStep}
              className={`px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors ${
                step === 1 ? "ml-auto" : ""
              }`}
              disabled={step === 3 && isSubmitting}
            >
              {step === 3 ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
            </button>
          </div>
        </form>
      </motion.div>
      
    </div>
    <section className="snap-start">
              <Footer />
            </section>
    </div>
  );
}

export default MainComponent;