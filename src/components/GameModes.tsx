import type React from "react";

const modes = [
  {
    name: "BedWars",
    desc: "Proteja sua cama, destrua os adversários e domine o céu em partidas frenéticas.",
    tag: "Competitivo",
    players: "0 jogando"
  },
  {
    name: "SkyWars",
    desc: "Ilhas flutuantes, loot insano e PvP rápido para quem gosta de adrenalina.",
    tag: "Clássico",
    players: "0 jogando"
  },
  {
    name: "Duels",
    desc: "1v1, Bridge, UHC, Combo e muito mais para treinar suas habilidades.",
    tag: "Treino",
    players: "0 jogando"
  },
  {
    name: "SkyBlock",
    desc: "Evolua sua ilha, farme recursos e participe da economia da network.",
    tag: "RPG",
    players: "0 jogando"
  }
];

const GameModes: React.FC = () => {
  return (
    <section
      id="modos"
      className="border-b border-slate-800/60 bg-gradient-to-b from-slate-950 to-slate-950/80 py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-50">
              Modos de jogo da{" "}
              <span className="text-primary-400">Redefenix</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Uma experiência completa de minigames inspirada em servidores como
              Hypixel, com identidade própria, progressão equilibrada e eventos
              semanais.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Sugestões de novos modos? Entre no nosso{" "}
            <span className="font-semibold text-secondary-300">Discord</span>.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modes.map((mode) => (
            <article
              key={mode.name}
              className="group flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-slate-950/80 transition hover:-translate-y-1 hover:border-primary-500/70 hover:shadow-primary-900/40"
            >
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-100">
                  {mode.name}
                </span>
                <span className="rounded-full bg-primary-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-300">
                  {mode.tag}
                </span>
              </div>
              <p className="flex-1 text-xs text-slate-300">{mode.desc}</p>
              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-300">
                <span className="rounded-md bg-slate-900/80 px-2 py-1 font-mono text-[10px] text-emerald-300">
                  {mode.players}
                </span>
                <button className="text-[11px] font-semibold uppercase tracking-wide text-primary-300 group-hover:text-primary-200">
                 
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModes;


