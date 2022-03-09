export interface AutoCompleteProps {
  value?: { label: string; id: number };
  label?: string;
  className?: string;
  error?: boolean;
  options: { label: string; id: number }[];
  onChange?: (e: any, value: any) => void;
}
