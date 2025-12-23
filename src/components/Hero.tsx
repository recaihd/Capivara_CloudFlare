import React, { useState } from "react";
import { useServerStatus } from "../hooks/useServerStatus";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { onlinePlayers, isOnline, isLoading } = useServerStatus();

  const statusText = (() => {
    if (isLoading) return "Carregando status...";
    if (isOnline === false) return "Servidor Offline";
    if (isOnline && onlinePlayers !== null) {
      return `Servidor Online • ${onlinePlayers} jogadores`;
    }
    return "Servidor Online";
  })();

  return (
    <section
      id="inicio"
      className="bg-mc-pattern bg-no-repeat bg-cover bg-center relative overflow-hidden border-b border-slate-800/60"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.15),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 text-center md:flex-row md:items-stretch md:text-left">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-950/70 px-3 py-1 text-xs font-medium text-emerald-300 shadow-md shadow-emerald-500/20">
            <span
              className={`h-2 w-2 rounded-full ${isOnline === false
                  ? "bg-red-500"
                  : "bg-emerald-400 animate-pulse"
                }`}
            />
            {statusText}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Jogue na{" "}
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-emerald-400 bg-clip-text text-transparent">
              minigames
            </span>{" "}
            Redefenix Network
          </h1>
          <p className="max-w-xl text-sm text-slate-200 sm:text-base">
            Participe da próxima geração de servidores de Minecraft inspirada
            nos maiores networks do mundo, com{" "}
            <span className="font-semibold text-secondary-300">
              BedWars, SkyWars, Duels, SkyBlock
            </span>{" "}
            e muito mais. Eventos diários, rankings globais e recompensas
            insanas.
          </p>
          <div id="jogar" className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-neon-red transition hover:-translate-y-0.5 hover:bg-primary-700">
              Entrar agora
            </button>
            <div className="flex flex-1 flex-col items-center gap-1 text-xs text-slate-300 sm:items-start">
              <span className="font-medium uppercase tracking-[0.18em] text-slate-400">
                IP do servidor
              </span>
              <div className="group relative w-full max-w-xs">
                <code className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 pr-10 font-mono text-[11px] text-emerald-300 shadow-inner shadow-slate-900 block truncate">
                  xpro-1.syrtex-app.cloud:25808
                </code>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard
                      .writeText("xpro-1.syrtex-app.cloud:25808")
                      .then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      })
                      .catch(() => { });
                  }}
                  className="absolute inset-y-0 right-1 my-1 hidden items-center rounded-md bg-slate-800/80 px-2 text-[10px] font-semibold uppercase tracking-wide text-slate-200 shadow-sm hover:bg-slate-700 group-hover:flex"
                >
                  {copied ? "Copiado" : "Copiar"}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 text-xs text-slate-200 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Versões
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                1.8 – 1.21
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Região
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Brasil • Ping Otimizado
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Proteção
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Anti-cheat avançado
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mx-auto max-w-sm rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-2xl shadow-primary-900/50">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold">Lobby Principal</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                {isOnline && onlinePlayers !== null
                  ? `${onlinePlayers} jogadores`
                  : isOnline === false
                    ? "Servidor Offline"
                    : "Carregando..."}
              </span>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
              <img
                src="/images/lobby.png"
                alt="Imagem do lobby em estilo Hypixel, com portais para BedWars, SkyWars, Duels e SkyBlock."
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-200">
              <div className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  BedWars
                </p>
                <p className="font-semibold text-slate-50">0</p>
              </div>
              <div className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  SkyWars
                </p>
                <p className="font-semibold text-slate-50">0</p>
              </div>
              <div className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5">
                <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  Duels
                </p>
                <p className="font-semibold text-slate-50">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


