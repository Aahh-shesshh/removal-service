'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FormInputWrapper } from './form-input';

type TProps = {
  get?: 'name' | 'id';
  data?: {
    id: string;
    name: string;
    def?: boolean;
  }[];
  placeholder?: string;
  disabled?: boolean;
  stateChange?: (value: string) => void;
} & Omit<React.ComponentProps<typeof FormInputWrapper>, 'children'>;

export function SelectInput({ data, get, placeholder, ...props }: TProps) {
  const defaultValue = data?.find((item) => item.def);

  return (
    <FormInputWrapper {...props}>
      <Select
        disabled={props.disabled}
        defaultValue={get === 'id' ? defaultValue?.id : defaultValue?.name}
        onValueChange={(value) => props.stateChange?.(value)}
      >
        <SelectTrigger className="w-full text-muted-foreground">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{props.label}</SelectLabel>
            {data?.map((item, i) => (
              <SelectItem key={i} value={get === 'id' ? item.id : item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </FormInputWrapper>
  );
}
