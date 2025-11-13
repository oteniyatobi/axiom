import axiomLogo from "@/assets/axiom-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={axiomLogo} alt="Axiom Logo" className="h-12 w-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            Building a Smarter Africa Through Technology
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Axiom E-Lab Think Tank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
