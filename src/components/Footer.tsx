import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-xs text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-200">Redefenix Network</span>
          . Não afiliado à Mojang.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:text-primary-300">
            Termos de uso
          </a>
          <a href="#" className="hover:text-primary-300">
            Política de privacidade
          </a>
          <a href="https://discord.gg/f4WbVRtgfn" className="hover:text-primary-300">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


