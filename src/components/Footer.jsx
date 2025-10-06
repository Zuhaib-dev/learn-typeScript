import { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!showFooter) return null;
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zuhaib Rashid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
