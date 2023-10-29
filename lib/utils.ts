import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatterCurrency = new Intl.NumberFormat('en-US', {
  style   : 'currency',
  currency: 'USD',
})

export function ToCurrency(
  number              : number, 
  type                : string,
  codeOrsymbolDisplay : string, 
  fractionDigits      : number, 
  language            : string, 
) {
  return new Intl.NumberFormat(language, {
      style: 'currency', 
      currency: type, 
      currencyDisplay: codeOrsymbolDisplay,
      maximumFractionDigits: fractionDigits,
    })
    .format(number)
} 