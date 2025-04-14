'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function DeductionInputCard({ handleDeductionChange }) {
  return (
    <Card className="w-full md:w-1/2 lg:w-1/2">
      <CardHeader>
        <CardTitle>Calculadora de Sueldo Bruto basado de Deducciones</CardTitle>
        <CardDescription>
          Calcula tu ingreso bruto en base a las deducciones en República
          Dominicana.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {[
          { label: 'ISR', id: 'isr' },
          { label: 'AFP', id: 'afp' },
          { label: 'SFS', id: 'sfs' },
        ].map(({ label, id }) => (
          <div
            key={id}
            className="grid w-full max-w-sm items-center gap-1.5 mb-4"
          >
            <Label htmlFor={id}>{label}</Label>
            <Input
              type="number"
              id={id}
              name={id}
              onChange={handleDeductionChange}
              defaultValue={0}
              min={0}
              step={1000}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default DeductionInputCard;
