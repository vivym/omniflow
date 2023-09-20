import clsx from 'clsx'
import Image from 'next/image'
import backgroundImage from '@/assets/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Omniflow?',
      answer: 'Omniflow is a smarter way to manage your workflow. It is a tool that allows you to create and manage your tasks in a simple and intuitive way.',
    },
    {
      question: 'How do I use Omniflow?',
      answer: 'Omniflow is a web application, so you can use it from any device with an internet connection. You can also install it on your mobile device by adding it to your home screen.',
    },
    {
      question: 'How much does Omniflow cost?',
      answer: 'Omniflow is free to use, but we also offer a premium plan that gives you access to more features.',
    },
  ],
  [
    {
      question: 'How do I get support?',
      answer: 'If you need help with Omniflow, you can contact us at flow@omniai.cc.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time by going to your account settings.',
    },
    {
      question: 'How do I delete my account?',
      answer: 'You can delete your account at any time by going to your account settings.',
    },
  ],
  [
    {
      question: 'How do I change my password?',
      answer: 'You can change your password at any time by going to your account settings.',
    },
    {
      question: 'How do I change my email address?',
      answer: 'You can change your email address at any time by going to your account settings.',
    },
    {
      question: 'How do I change my username?',
      answer: 'You can change your username at any time by going to your account settings.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      {/* Background illustration */}
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt="faqs-background"
        width={1558}
        height={946}
      />
      <div
        className={clsx(
          'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          'relative',
        )}
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-heading"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and someone will get back to you.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
