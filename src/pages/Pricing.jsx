import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import Button from "../components/Button"
import Footer from "../components/Footer"

const Pricing = () => {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "Free",
      price: annual ? 0 : 0,
      description: "Perfect for beginners",
      features: [
        "Basic portfolio template",
        "Limited customization options",
        "Mobile responsive design",
        "Export as PDF",
        "1 portfolio site",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: annual ? 49 : 5,
      description: "For serious professionals",
      features: [
        "All Free features",
        "10+ premium templates",
        "Advanced customization",
        "Custom domain support",
        "Analytics integration",
        "SEO optimization",
        "3 portfolio sites",
      ],
      buttonText: "Get Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: annual ? 99 : 10,
      description: "For teams and agencies",
      features: [
        "All Pro features",
        "Unlimited portfolio sites",
        "Team collaboration",
        "Priority support",
        "White-label option",
        "API access",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-700 to-blue-400">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-white">Choose the perfect plan for your portfolio needs</p>

            <div className="mt-12 flex justify-center">
              <div className="relative bg-white rounded-full p-1 flex">
                <button
                  onClick={() => setAnnual(false)}
                  className={`${
                    !annual ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                  } py-2 px-6 rounded-full transition-all duration-200 focus:outline-none`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={`${
                    annual ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                  } py-2 px-6 rounded-full transition-all duration-200 focus:outline-none`}
                >
                  Annual <span className="text-xs font-bold">(Save 20%)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? "ring-2 ring-indigo-600 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 font-medium">Most Popular</div>
                )}
                <div className="px-6 py-8 bg-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="mt-2 text-gray-500">{plan.description}</p>
                    <div className="mt-4 flex justify-center items-baseline">
                      <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
                      <span className="ml-1 text-xl font-medium text-gray-500">/{annual ? "year" : "month"}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pt-6 pb-8 bg-gray-50">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <FaCheck className="h-5 w-5 text-green-500" />
                        </div>
                        <p className="ml-3 text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button text={plan.buttonText} onClick={() => {}} className="w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-8 max-w-3xl mx-auto grid gap-6">
              {[
                {
                  question: "Can I cancel my subscription anytime?",
                  answer:
                    "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team.",
                },
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer:
                    "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply to your next billing cycle.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-6 text-left">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pricing
