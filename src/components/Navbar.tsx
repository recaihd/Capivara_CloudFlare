import type React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <a href="">
          <img
            src="/images/icone_zytrona.png"
            alt="Logotipo Redefenix"
            className="h-9 w-9 rounded-md shadow-neon-red object-cover"
          />
          </a>
          <div className="leading-tight">
            <a href="">
            <p className="text-lg font-extrabold tracking-tight">
              <span className="text-primary-500">Zytr</span>
              <span className="text-slate-50">ona</span>
            </p>
            </a>
            <a href="">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Network de Minecraft
            </p>
            </a>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          <a href="#inicio" className="transition-colors hover:text-[#fca5a5]">
            Início
          </a>
          <a href="#modos" className="transition-colors hover:text-[#fca5a5]">
            Modos de Jogo
          </a>
          <a href="#loja" className="transition-colors hover:text-[#fca5a5]">
            Loja
          </a>
          <a href="#estatisticas" className="transition-colors hover:text-[#fca5a5]">
            Estatísticas
          </a>
          <a href="#comunidade" className="transition-colors hover:text-[#fca5a5]">
            Comunidade
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-md border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-xs font-mono text-slate-300 md:inline-flex">
            zytrona.xyz
          </span>
          <a
            href="#jogar"
            className="rounded-md bg-primary-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-neon-red transition hover:bg-primary-700"
          >
            Jogar Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


