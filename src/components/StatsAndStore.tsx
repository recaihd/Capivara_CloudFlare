import React, { useState } from "react";
import { useServerStatus } from "../hooks/useServerStatus";

const StatsAndStore: React.FC = () => {
  const { onlinePlayers, isOnline, isLoading } = useServerStatus();
  const [showMore, setShowMore] = useState(false);

  const onlineBoxText = (() => {
    if (isLoading) return "Carregando...";
    if (isOnline === false) return "Offline";
    if (isOnline && onlinePlayers !== null) return onlinePlayers.toString();
    return "Indisponível";
  })();

  return (
    <section
      id="estatisticas"
      className="border-b border-slate-800/60 bg-slate-950/95 py-14"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-50">
            Estatísticas em tempo real
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Veja os números da Redefenix atualizados a cada minuto. Rankings
            dedicados para cada modo de jogo, temporadas, níveis e muito mais.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Jogadores Online
              </p>
              <p className="mt-2 text-2xl font-extrabold text-emerald-300">
                {onlineBoxText}
              </p>
              <p className="mt-1 text-[11px] text-emerald-300/80">
                Em manutenção
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Contas Registradas
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-50">
                +30
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Desde outubro de 2024
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Partidas por dia
              </p>
              <p className="mt-2 text-2xl font-extrabold text-secondary-300">
                0
              </p>
              <p className="mt-1 text-[11px] text-secondary-300/80">
                Em manutenção
              </p>
            </div>
          </div>
        </div>

        <div id="loja">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                Loja Redefenix
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                    Vips, armaduras, cosméticos exclusivos e mais.
              </p>
            </div>
            <a
              href="#"
              className="text-xs font-semibold uppercase tracking-wide text-primary-300 hover:text-primary-200"
            >
              Acessar loja
            </a>
          </div>

          <div className="mt-4 space-y-3 text-xs text-slate-200">
            <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
              <div className="flex items-center gap-3">
                <img
                  src="/img_produtos/shulker_box.webp"
                  alt="Shulker Box"
                  className="h-10 w-10 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-50">1x Shulker Box</p>
                  <p className="text-[11px] text-slate-400">
                  Permite armazenar mais itens em seu baú virtual.
                  </p>
                </div>
              </div>
              <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                COMPRAR
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
              <div className="flex items-center gap-3">
                <img
                  src="/img_produtos/ender_chest.webp"
                  alt="Ender Chest"
                  className="h-10 w-10 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-50">1x Ender Chest</p>
                  <p className="text-[11px] text-slate-400">
                  Guarde seus itens com segurança acessível de qualquer lugar.
                  </p>
                </div>
              </div>
              <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                COMPRAR
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
              <div className="flex items-center gap-3">
                <img
                  src="/img_produtos/armor_diamante.png"
                  alt="Full Diamante"
                  className="h-10 w-10 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-50">1x Full Diamante</p>
                  <p className="text-[11px] text-slate-400">
                  Armadura completa de diamante.
                  </p>
                </div>
              </div>
              <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                COMPRAR
              </button>
            </div>

            {showMore && (
              <>
                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/armor_netherite.png"
                      alt="Full Netherite"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x Full Netherite</p>
                      <p className="text-[11px] text-slate-400">
                      Armadura completa de netherite.
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/full_netherite_p4.png"
                      alt="Full Netherite P4"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x Full Netherite P4</p>
                      <p className="text-[11px] text-slate-400">
                      Full Netherite encantada com Proteção IV.
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/armadura_dos_deuses.png"
                      alt="Armadura dos Deuses"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x Armadura dos Deuses</p>
                      <p className="text-[11px] text-slate-400">
                      Equipamento lendário com encantamentos supremos.
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/vip.png"
                      alt="VIP"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x VIP</p>
                      <p className="text-[11px] text-slate-400">
                      Seja VIP no nosso servidor.
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/mvp.png"
                      alt="MVP"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x MVP</p>
                      <p className="text-[11px] text-slate-400">
                      Seja MVP no nosso servidor
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/ultra.png"
                      alt="ULTRA"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x ULTRA</p>
                      <p className="text-[11px] text-slate-400">
                      Seja ULTRA no nosso servidor.
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/maca_do_tita.png"
                      alt="Maçã do TITÃ"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x Maçã do TITÃ</p>
                      <p className="text-[11px] text-slate-400">
                      Maçã do TITÃ
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/img_produtos/acucar_da_formiga.gif"
                      alt="Açúcar da Formiga"
                      className="h-10 w-10 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-50">1x Açúcar da Formiga</p>
                      <p className="text-[11px] text-slate-400">
                      Açúcar da formiga
                      </p>
                    </div>
                  </div>
                  <button className="rounded-md bg-emerald-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-emerald-500">
                    COMPRAR
                  </button>
                </div>
              </>
            )}
          </div>

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-4 w-full rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
            >
              Ver mais
            </button>
          )}

          {showMore && (
            <button
              onClick={() => setShowMore(false)}
              className="mt-4 w-full rounded-md border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
            >
              Ver menos
            </button>
          )}

          <p
            id="comunidade"
            className="mt-4 text-[11px] text-slate-500"
          >
            As compras ajudam a manter a Redefenix online e financiar novos
            minigames. Não é pay-to-win: todos os benefícios são cosméticos ou
            de conveniência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsAndStore;


