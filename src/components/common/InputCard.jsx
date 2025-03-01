"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function InputCard({ handleSalaryChange }) {
  return (
    <Card className="w-full md:w-1/2 lg:w-1/2">
      <CardHeader>
        <CardTitle>Calculadora de Sueldo Neto</CardTitle>
        <CardDescription>
          Calcula tu ingreso neto en base a salarios en República Dominicana.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label htmlFor="salary">Salario Bruto Mensual</Label>
          <Input
            type="number"
            id="salary"
            name="salary"
            onChange={handleSalaryChange}
            defaultValue={0}
            min={0}
            step={1000}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="savings">Ahorro Mensual (Opcional)</Label>
          <Input
            type="number"
            id="savings"
            name="savings"
            onChange={handleSalaryChange}
            min={0}
            step={1000}
            defaultValue={0}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default InputCard;
