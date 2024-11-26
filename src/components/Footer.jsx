import React from 'react';
import { Mail, Phone, Twitter, Linkedin, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Twitter, 
      link: "https://twitter.com/makegram",
      name: "Twitter"
    },
    { 
      icon: Linkedin, 
      link: "https://linkedin.com/company/makegram",
      name: "LinkedIn"
    },
    { 
      icon: Facebook, 
      link: "https://facebook.com/makegram",
      name: "Facebook"
    },
    { 
      icon: Globe, 
      link: "https://makegram.com",
      name: "Website"
    }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      text: "contact@tinymllhackathon.com",
      link: "mailto:contact@tinymllhackathon.com"
    },
    { 
      icon: Phone, 
      text: "+12-8883456789",
      link: "tel:+12-8883456789"
    }
  ];

  return (
    <footer className="bg-black py-7">
      <div className="container mx-auto px-4">
        <div className="bg-black bg-opacity-10 rounded-xl p-7 md:px-16">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Div */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl tracking-[9px] text-white mb-4">
                TINYML HACKATHON
              </h3>
              <p className="text-gray-300 mb-6 text-md">
                Join us for an exhilarating 24-hour offline TinyML Hackathon. 
                Dive into the world of Tiny Machine Learning and innovate with us!
              </p>
              
              <div className="space-y-2">
                <h4 className="text-l tracking-wider text-white mb-2">Quick Links</h4>
                <div className="text-gray-300 space-y-1 text-xs">
                  <a href="/privacy" className="block hover:text-white">Privacy Policy</a>
                  <a href="/terms" className="block hover:text-white">Terms and Conditions</a>
                  <a href="/code-of-conduct" className="block hover:text-white">Code of Conduct</a>
                </div>
              </div>
            </div>

            {/* Right Div */}
            <div className="w-full md:w-1/2">
              {/* Contact Info */}
              <div className="mb-6">
                <h3 className="text-xl tracking-[9px] text-white mb-4">
                  CONTACT US
                </h3>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a 
                      key={index} 
                      href={contact.link} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <contact.icon className="mr-3 w-5 h-5" />
                      <span className="text-xs">{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl tracking-[9px] text-white mb-4">
                  FOLLOW US
                </h3>
                <div className="flex justify-start space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
            Copyright © 2024 MakeGram in association with Tinkerspace and SeeedStudio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;