'use client';

import { format } from 'date-fns';
import { LucideCalendarDays } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { FormInputWrapper } from './form-input';

export function DateInput(
  props: Omit<React.ComponentProps<typeof FormInputWrapper>, 'children'> & {
    onChange?: (value: string) => void;
  },
) {
  const [date, setDate] = React.useState<Date>();

  return (
    <FormInputWrapper {...props}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <LucideCalendarDays className="mr-2 size-4" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e) => {
              if (props.onChange && e) {
                props.onChange(e.toISOString());
              }
              setDate(e);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </FormInputWrapper>
  );
}
