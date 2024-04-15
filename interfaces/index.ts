export interface IExpenseProps {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export interface IFormValuesProps {
  Amount: { value: number; isValid: boolean };
  Date: { value: string; isValid: boolean };
  Description: { value: string; isValid: boolean };
}
