'use client';

import { motion } from 'framer-motion';

const CONTACT_EMAIL = 'sams02092000@gmail.com';

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Have a question, suggestion, or feedback about Theme &amp; Color? Email us and we&apos;ll get back to you as soon as we can.
          </p>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Email</h2>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Theme%20%26%20Color%20inquiry`}
                className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-300 hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Response time</h2>
              <p className="text-gray-700 dark:text-gray-300">We typically reply within 24–48 hours.</p>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Theme%20%26%20Color%20inquiry`}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 dark:bg-white px-5 py-3 text-sm font-semibold text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
            >
              Open email app
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Prefer not to use your mail app? Copy the address above and send a message from Gmail, Outlook, or any email client.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
