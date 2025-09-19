import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inquiryType: 'general',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Email Us",
      description: "General inquiries and information",
      contact: "contact@cybersecurityclub.com",
      link: "mailto:contact@cybersecurityclub.com"
    },
    {
      icon: (
        <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M7.5 2C4.47 2 2 4.47 2 7.5v9C2 19.53 4.47 22 7.5 22h9c3.03 0 5.5-2.47 5.5-5.5v-9C22 4.47 19.53 2 16.5 2h-9zM4 7.5C4 5.57 5.57 4 7.5 4h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9z" />
        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>

      ),
      title: "Instagram",
      description: "",
      contact: "",
      link: "https://www.instagram.com/csc.nu?igsh=b2YyaWtobG82NHN4"
    },
    {
      icon: (
        <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.599 0 4.262 2.368 4.262 5.455v6.288zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 01.001 4.124zM6.994 20.452H3.676V9h3.318v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>

      ),
      title: "Linkedin",
      // description: "",
      // contact: "",
      link: "https://www.linkedin.com/company/cyber-security-club-itnu/posts/?feedView=all"
    }
    // {
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    //     </svg>
    //   ),
    //   title: "Follow Us",
    //   description: "Stay connected on social media",
    //   contact: "@CSC_CyberSecurity",
    //   link: "https://twitter.com/csc_cybersecurity"
    // }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const faqData = [
    {
      question: "How can I learn more about CSC (Cyber Security Club)?",
      answer: "You can contact us directly through email or visit us during office hours. We provide information about our activities and how students can participate in cybersecurity events."
    },
    {
      question: "Are there any prerequisites to participate?",
      answer: "No specific prerequisites required! We welcome beginners and provide training from basics to advanced levels. Enthusiasm to learn cybersecurity is all you need."
    },
    {
      question: "What activities does the club organize?",
      answer: "We organize workshops, CTF competitions, guest lectures, hands-on training sessions, industry visits, and certification preparation programs throughout the academic year."
    }
    // {
    //   question: "Is there a membership fee?",
    //   answer: "We have a nominal annual membership fee that covers workshop materials, certificates, and club activities. Contact us for current fee structure and payment options."
    // }
  ];

  return (
    <section id="contact" className="py-10 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about cybersecurity or want to learn more about our community? 
            We're here to help and guide you on your cybersecurity journey.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="px-20 ml-40 grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {/* <div className="px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 place-items-center">  */}
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              {/* <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3> */}
              {/* <p className="text-gray-400 text-sm mb-3">{method.description}</p> */}
              {/* <p className="text-green-400 font-medium text-sm">{method.contact}</p> */}
            </a>
          ))}
        </div>

        {/* <div className="grid lg:grid-cols-3 gap-12"> */}
          
          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
               */}
              {/* Success Message */}
              {/* {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="membership">Club Membership</option>
                      <option value="workshop">Workshop Registration</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div> */}

          {/* Sidebar Information */}
          {/* <div className="space-y-8"> */}
            
            {/* Office Hours */}
            {/* <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{schedule.day}</span>
                    <span className="text-green-400 text-sm font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Location */}
            {/* <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Location</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-white font-medium">CSC Headquarters</p>
                    <p className="text-gray-400 text-sm">Cyber Security Club</p>
                    <p className="text-gray-400 text-sm">Protecting Tomorrow's Digital World</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=CSC+Cyber+Security+Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  View on Maps
                </a>
              </div>
            </div> */}

            {/* Quick Links */}
            {/* <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">About the Club</a>
                <a href="#events" className="block text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Upcoming Events</a>
                <a href="#team" className="block text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Meet Our Team</a>
                <a href="mailto:contact@cybersecurityclub.com" className="block text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">Join Newsletter</a>
              </div>
            </div>
          </div>
        </div> */}

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-xl p-8 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Take the first step towards exploring cybersecurity opportunities. 
            Connect with CSC (Cyber Security Club) and learn more about our activities!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('mailto:contact@cybersecurityclub.com', '_blank')}
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Send Email
            </button>
            <button 
              onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              View Events
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;