import { type ClassValue, clsx } from "clsx";
import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectToURLSearchParams(obj: Record<string, any>) {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    let n = value;

    if (typeof value === "number") n = value.toString();
    if (n) params.append(key, n);
  });

  return params.toString();
}

export const parseBackendValidation = async <T extends FieldValues, E>(
  res: T,
  setErrors: UseFormSetError<T>,
  returnErrors?: boolean
): Promise<(Partial<T> & E) | void> => {
  const isServer = typeof window === "undefined";
  const toast = !isServer && (await import("react-hot-toast")).toast;

  const errors = res as Partial<T> & E;

  Object.entries(errors).forEach(([key, value]) => {
    setErrors(
      key as keyof T as Path<T>,
      {
        type: "manual",
        message: value || "Something's wrong.",
      },
      {
        shouldFocus: true,
      }
    );
  });

  if (toast) {
    toast.error("Please fix current errors and try again.");
  }

  if (returnErrors) return errors;

  return undefined;
};

export const parseToFormData = (data: { [key: string]: any }) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (String(v)) {
          formData.append(key, String(v));
        }
      });
    } else if (value instanceof FileList) {
      for (let i = 0; i < value.length; i += 1) {
        formData.append(key, value[i] as File);
      }
    } else if (typeof value === "object" && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else if (String(value) && typeof value !== "undefined") {
      formData.append(key, String(value));
    }
  });

  return formData;
};

export const generateKeywords = (description?: string) => {
  // Primary keywords for Hobart removalist business
  const primaryKeywords = [
    "removal in hobart",
    "mover in hobart",
    "cheap removal",
    "best removal in hobart",
    "two man and van",
    "affordable removal hobart",
    "house office relocation hobart tas",
    "removal service hobart tas",
    "removalists hobart",
    "furniture removalists hobart",
    "removalist hobart tasmania",
    "moving company hobart",
    "professional movers hobart",
    "interstate removalists hobart",
    "local removalists hobart",
    "office relocation hobart",
    "house movers hobart",
    "piano movers hobart",
    "furniture movers hobart",
    "storage hobart",
    "packing services hobart",
    "cleaning services hobart",
    "end of lease cleaning hobart",
    "multi removal and cleaning experts",
  ];

  // Add description-based keywords if needed
  const descKeywords = description
    ? description
        .toLowerCase()
        .split(/[,.\s]+/)
        .filter((word) => word.length > 3)
    : [];

  // Combine and deduplicate
  return [...new Set([...primaryKeywords, ...descKeywords])];
};
export const genSeq = (length: number) => {
  const repsOf3 = length / 3;

  const bigScreen: number[] = [];
  for (let i = 0; i < repsOf3; i += 1) {
    const item = i * 3;

    if (item % 2 !== 0) {
      bigScreen.push(item);
      bigScreen.push(item + 1);
      bigScreen.push(item + 2);
    }
  }

  const smallScreen: number[] = [];
  let alternate = false;
  for (let i = 0; i < length + 1; i += 1) {
    if (i % 2 === 0) {
      const item = alternate ? i : i - 1;
      if (item >= 0) {
        smallScreen.push(item);
      }
      alternate = !alternate;
    }
  }

  const omits = smallScreen.filter((i) => !bigScreen.includes(i));

  return {
    bigScreen,
    smallScreen,
    omits,
  };
};
