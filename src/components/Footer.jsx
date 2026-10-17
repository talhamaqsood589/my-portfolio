import { ArrowUp, Heart } from "lucide-react";

export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
      </div>
    </footer>
  );
}