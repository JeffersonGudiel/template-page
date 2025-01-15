"use client";

import { useState } from "react";
import Link from "next/link";

interface Evento {
  id: string;
  fecha: Date;
  titulo: string;
  descripcion: string;
  url: string;
}

export function Calendario() {
  const [eventos, setEventos] = useState<Evento[]>([
    {
      id: "1",
      fecha: new Date(2023, 5, 15),
      titulo: "Reunión de equipo",
      descripcion: "Discusión de proyectos actuales",
      url: "https://ejemplo.com/reunion-equipo",
    },
    {
      id: "2",
      fecha: new Date(2023, 5, 20),
      titulo: "Lanzamiento de producto",
      descripcion: "Presentación del nuevo producto",
      url: "https://ejemplo.com/lanzamiento-producto",
    },
    {
      id: "3",
      fecha: new Date(2023, 5, 25),
      titulo: "Conferencia anual",
      descripcion: "Conferencia de tecnología",
      url: "https://ejemplo.com/conferencia-anual",
    },
  ]);

  const [eventoExpandido, setEventoExpandido] = useState<string | null>(null);

  const diasDelMes = Array.from({ length: 31 }, (_, i) => i + 1);
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  return (
    <div className="container mx-auto p-4">
      {/* Vista de escritorio */}
      <div className="hidden md:grid grid-cols-7 gap-2">
        {diasSemana.map((dia) => (
          <div key={dia} className="text-center font-bold p-2">
            {dia}
          </div>
        ))}
        {diasDelMes.map((dia) => (
          <div key={dia} className="border rounded-lg p-2 h-24 overflow-y-auto">
            <div className="font-semibold">{dia}</div>
            {eventos
              .filter((evento) => evento.fecha.getDate() === dia)
              .map((evento) => (
                <div
                  key={evento.id}
                  className="mt-1 p-1 bg-blue-100 rounded cursor-pointer transition-all duration-200 ease-in-out"
                  onMouseEnter={() => setEventoExpandido(evento.id)}
                  onMouseLeave={() => setEventoExpandido(null)}>
                  <Link
                    href={evento.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="text-sm truncate">{evento.titulo}</div>
                    {eventoExpandido === evento.id && (
                      <div className="text-xs mt-1">{evento.descripcion}</div>
                    )}
                  </Link>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Vista móvil */}
      <div className="md:hidden">
        {diasDelMes.map((dia) => {
          const eventosDelDia = eventos.filter(
            (evento) => evento.fecha.getDate() === dia
          );
          if (eventosDelDia.length === 0) return null;

          return (
            <div key={dia} className="mb-4 border-b pb-2">
              <div className="font-bold text-lg mb-2">
                {dia} {diasSemana[new Date(2023, 5, dia).getDay()]}
              </div>
              {eventosDelDia.map((evento) => (
                <div key={evento.id} className="bg-blue-100 rounded p-2 mb-2">
                  <button
                    className="w-full text-left"
                    onClick={() =>
                      setEventoExpandido(
                        eventoExpandido === evento.id ? null : evento.id
                      )
                    }>
                    <div className="font-semibold">{evento.titulo}</div>
                    {eventoExpandido === evento.id && (
                      <div className="text-sm mt-1">{evento.descripcion}</div>
                    )}
                  </button>
                  <Link
                    href={evento.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm mt-1 inline-block">
                    Ver más
                  </Link>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
