"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    taxNumber: "",
    phone: "",
    email: "",
    confirmCheck: false,
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      confirmCheck: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMsg("Lütfen zorunlu alanları doldurun. / Please fill in the required fields.");
      return;
    }

    if (!formData.confirmCheck) {
      setErrorMsg("Hesap silme onay kutusunu işaretlemeniz gerekmektedir. / You must accept the account deletion confirmation.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch {
      setErrorMsg("Bir hata oluştu. Lütfen daha sonra tekrar deneyin. / An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100/50 transition-all duration-300">
        
        {/* Header Branding */}
        <div className="bg-emerald-700 px-8 py-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-600 rounded-full opacity-30 blur-lg"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-teal-600 rounded-full opacity-30 blur-lg"></div>
          
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md mb-3 text-emerald-700">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 8C17 10.76 14.76 13 12 13C9.24 13 7 10.76 7 8C7 5.24 9.24 3 12 3C14.76 3 17 5.24 17 8ZM12 15C6.48 15 2 18.52 2 23C2 23.55 2.45 24 3 24H21C21.55 24 22 23.55 22 23C22 18.52 17.52 15 12 15Z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-black text-white tracking-wide">
            BAŞAK SEBZE
          </h1>
          <p className="text-emerald-100 text-sm mt-1 font-medium">
            Hesap Silme Talebi / Account Deletion Request
          </p>
        </div>

        {/* Content Section */}
        <div className="px-8 py-8">
          {isSuccess ? (
            <div className="text-center py-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Talebiniz Alındı!
              </h2>
              <p className="text-emerald-700 font-semibold text-sm mt-1">
                Request Received!
              </p>
              
              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                Hesap silme talebiniz başarıyla kaydedilmiştir. Müşteri destek ekibimiz, talebinizi doğrulamak ve silme işlemini tamamlamak için en kısa sürede sizinle iletişime geçecektir.
              </p>
              <p className="text-slate-500 text-xs italic mt-2 leading-relaxed">
                Your request has been successfully recorded. Our support team will contact you shortly to verify and complete the account deletion.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-emerald-600 text-sm font-semibold rounded-xl text-emerald-700 bg-white hover:bg-emerald-50 transition-all duration-200"
                >
                  Ana Sayfaya Dön / Go Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Dikkat:</strong> Hesabınız silindiğinde tüm geçmiş siparişleriniz, fatura detaylarınız ve uygulamadaki kayıtlarınız kalıcı olarak silinecek veya yasal zorunluluklar gereği anonimleştirilecektir.
                </p>
                <p className="text-[10px] text-amber-700 mt-1 leading-relaxed">
                  <strong>Warning:</strong> Upon account deletion, all your order history, invoices, and app records will be permanently deleted or anonymized according to legal regulations.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-semibold border border-red-100">
                  {errorMsg}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Ad Soyad / Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Örn: Ahmet Yılmaz"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-xl py-3 px-4 text-sm text-slate-800 outline-none transition-all duration-200"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Firma Ünvanı / Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Örn: Başak Restoran Ltd."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-xl py-3 px-4 text-sm text-slate-800 outline-none transition-all duration-200"
                />
              </div>

              {/* Tax Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Vergi Numarası / Tax Number
                </label>
                <input
                  type="text"
                  name="taxNumber"
                  value={formData.taxNumber}
                  onChange={handleChange}
                  placeholder="Uygulama girişinde kullandığınız numara"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-xl py-3 px-4 text-sm text-slate-800 outline-none transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Telefon / Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Örn: +90 5XX XXX XX XX"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-xl py-3 px-4 text-sm text-slate-800 outline-none transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  E-posta / Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Örn: ahmet@email.com"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-xl py-3 px-4 text-sm text-slate-800 outline-none transition-all duration-200"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Silme Nedeni / Reason (Optional)
                </label>
                <textarea
                  name="reason"
                  rows={2}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Hizmet kalitesi, hesap değişikliği vb."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-xl py-3 px-4 text-sm text-slate-800 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="flex items-start mt-2">
                <input
                  type="checkbox"
                  id="confirmCheck"
                  checked={formData.confirmCheck}
                  onChange={handleCheckbox}
                  className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 cursor-pointer"
                />
                <label
                  htmlFor="confirmCheck"
                  className="ml-2 text-xs text-slate-600 select-none cursor-pointer leading-tight"
                >
                  Hesabımın ve ilişkili verilerimin kalıcı olarak silinmesini onaylıyorum. / I approve the permanent deletion of my account and associated data.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl py-4 font-bold text-sm shadow-md shadow-emerald-700/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Gönderiliyor / Sending...
                  </>
                ) : (
                  "Talebi Gönder / Submit Request"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Footer Info */}
      <footer className="text-center text-[11px] text-slate-500 mt-8 space-y-1">
        <p>© 2026 Başak Sebze & Meyve. Tüm hakları saklıdır.</p>
        <div className="flex justify-center gap-3">
          <Link href="/" className="hover:underline text-emerald-800 font-semibold">
            Ana Sayfa
          </Link>
          <span>•</span>
          <a href="https://www.basaksebzemeyve.com.tr/" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-800 font-semibold">
            Web Sitesi
          </a>
        </div>
      </footer>
    </main>
  );
}
