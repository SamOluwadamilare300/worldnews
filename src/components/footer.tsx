import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Get In Touch!</h2>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/SamOluwadamilare300/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sam-o-afolabi-179309241" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="https://youtube.com/@sam_dare?si=YXDMCRWz4uOvjGV0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaYoutube size={30} />
          </a>
        </div>
        <div className="text-gray-400">
          &copy; {new Date().getFullYear()} <a href="https://samfolabi.vercel.app" className="text-white font-medium hover:underline">Sam O. Afolabi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;