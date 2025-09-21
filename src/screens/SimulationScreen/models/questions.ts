export type RiskProfile = 'Conservador' | 'Moderado' | 'Agressivo';

export type Question = {
  text: string;
  options: { label: string; value: number }[];
};

export const questions: Question[] = [
  {
    text: '1) Qual é o seu objetivo principal?',
    options: [
      { label: 'Preservar capital (baixo risco)', value: 1 },
      { label: 'Equilíbrio risco/retorno', value: 2 },
      { label: 'Maximizar retorno (alto risco)', value: 3 },
    ],
  },
  {
    text: '2) Qual seu horizonte de investimento?',
    options: [
      { label: 'Curto prazo (até 1 ano)', value: 1 },
      { label: 'Médio prazo (1–5 anos)', value: 2 },
      { label: 'Longo prazo (>5 anos)', value: 3 },
    ],
  },
  {
    text: '3) Como reagiria a uma queda de 10% no valor do seu investimento?',
    options: [
      { label: 'Venderia imediatamente', value: 1 },
      { label: 'Manteria e avaliaria', value: 2 },
      { label: 'Aproveitaria para comprar mais', value: 3 },
    ],
  },
  {
    text: '4) Qual parcela do seu patrimônio destina a este investimento?',
    options: [
      { label: 'Menos de 10%', value: 1 },
      { label: '10%–30%', value: 2 },
      { label: 'Mais de 30%', value: 3 },
    ],
  },
  {
    text: '5) Qual retorno médio anual você espera?',
    options: [
      { label: 'Até 6%', value: 1 },
      { label: '6%–12%', value: 2 },
      { label: 'Acima de 12%', value: 3 },
    ],
  },
];
