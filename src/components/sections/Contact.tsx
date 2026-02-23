"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactEmail, type ContactFormState } from "@/lib/actions";
import type { ContentData } from "@/lib/types";

interface ContactProps {
  data: ContentData["contact"];
}

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-neutral-900 text-sm font-medium px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M1 7h12M8 2l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Contact({ data }: ContactProps) {
  const [state, formAction] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const inputClass =
    "w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40 transition-colors";

  return (
    <section id="contact" className="section-padding bg-[#0f0f0f]">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left — headline & info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-normal text-white leading-tight mb-6">
              {data.headline}
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-md">
              {data.subtext}
            </p>
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              {data.email}
            </a>
          </div>

          {/* Right — form */}
          <div>
            {state.status === "success" ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <div className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-300"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-white text-base font-medium">{state.message}</p>
                <button
                  onClick={() =>
                    // reset state by re-submitting a blank action — simplest approach
                    formRef.current?.reset()
                  }
                  className="text-sm text-neutral-500 hover:text-neutral-300 underline underline-offset-4 transition-colors"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form ref={formRef} action={formAction} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Jméno
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Vaše jméno"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="váš@email.cz"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Popište váš projekt nebo myšlenku..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {state.status === "error" && (
                  <p className="text-sm text-red-400">{state.message}</p>
                )}

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <SubmitButton label={data.cta} />
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Odpovídám zpravidla do 24 hodin.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="container-content mt-20 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-600">
          <span>© {new Date().getFullYear()} Daniel Klečka</span>
          <a
            href={`mailto:${data.email}`}
            className="hover:text-neutral-400 transition-colors"
          >
            {data.email}
          </a>
        </div>
      </div>
    </section>
  );
}
