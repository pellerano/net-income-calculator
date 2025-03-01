"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "./Loading";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Separator } from "../ui/separator";

function ResultsCard({ results, salary }) {
  const { savings } = salary;
  return (
    <Card
      className={`w-full md:w-1/2 lg:w-1/2 ${
        results ? "bg-emerald-600" : "bg-white"
      } pb-0`}
    >
      {results ? (
        <>
          <CardHeader className="text-white">
            <CardTitle className="text-center flex flex-col gap-2">
              <p className="text-md font-light">Tu salario neto es de:</p>
              <p className="text-4xl font-bold">
                {formatCurrency(results.totalWithoutSavings)}
              </p>
              <p className="text-sm font-light">
                <span className="font-bold">
                  {formatCurrency(results.totalMinusSavings)}
                </span>{" "}
                con un ahorro de {formatCurrency(savings)} mensuales
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white py-6 rounded-b-lg text-center">
            <h1 className="text-lg font-light">Deducciones</h1>
            <h1 className="text-4xl font-bold text-red-700">
              -{formatCurrency(results.totalDeductions)}
            </h1>
            <Separator className="my-6" />
            <div className="flex gap-2 flex-col md:flex-row lg:flex-row">
              <div className="w-full md:w-1/3 lg:w-1/3 text-center rounded shadow-lg p-4">
                <Tooltip>
                  <TooltipTrigger>
                    <p className="m-0 font-light text-sm flex items-center gap-1 justify-center">
                      AFP <Info className="w-3 h-3 mb-4" />
                    </p>
                    <p className="font-bold text-lg m-0">
                      {formatCurrency(results.afp)}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    <p>
                      El sistema de capitalización individual obligatoria
                      consiste en que trabajadoras y trabajadores deben
                      depositar cada mes un porcentaje de su remuneración,
                      sueldo o ingreso imponible en una cuenta personal en una
                      administradora de fondos de pensiones (AFP).
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/3 text-center rounded shadow-lg p-4">
                <Tooltip>
                  <TooltipTrigger>
                    <p className="m-0 font-light text-sm flex items-center gap-1 justify-center">
                      SFS <Info className="w-3 h-3 mb-4" />
                    </p>
                    <p className="font-bold text-lg m-0">
                      {formatCurrency(results.sfs)}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    <p>
                      Seguro Familiar de Salud (SFS): Tiene como objetivo la
                      protección integral de la salud física y mental del
                      afiliado y su familia. El empleador deberá pagar a la TSS
                      un porcentaje para el seguro familiar de salud del
                      empleado, actualmente este porcentaje corresponde al 7.09%
                      sobre el salario del empleado.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/3 text-center rounded shadow-lg p-4">
                <Tooltip>
                  <TooltipTrigger>
                    <p className="m-0 font-light text-sm flex items-center gap-1 justify-center">
                      ISR <Info className="w-3 h-3 mb-4" />
                    </p>
                    <p className="font-bold text-lg m-0">
                      {formatCurrency(results.isr)}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-64">
                    <p>
                      Impuesto sobre la Renta (ISR): Es un tributo anual que se
                      aplica a todos los ingresos que obtienen las personas
                      físicas, personas jurídicas y sucesiones indivisas
                      (herencias sin repartir) en un período fiscal determinado.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardContent>
        </>
      ) : (
        <>
          <CardContent className="flex flex-col gap-4 justify-center items-center h-full pb-6 text-center">
            <Loading />
            <p>Introduce tu salario y ahorro mensual para ver tus resultados</p>
          </CardContent>
        </>
      )}
    </Card>
  );
}

export default ResultsCard;
