import { useState, useMemo, useCallback } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeTabParamList } from '../../../navigation/HomeTabs';
import { questions, RiskProfile } from '../models/questions';

type Nav = StackNavigationProp<HomeTabParamList, 'Simulação'>;

export const useSimulation = (navigation: Nav) => {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);

  const q = useMemo(() => questions[idx], [idx]);
  const total = questions.length;

  const computeProfile = useCallback((sum: number): RiskProfile => {
    if (sum <= 7) return 'Conservador';
    if (sum <= 11) return 'Moderado';
    return 'Agressivo';
  }, []);

  const handleAnswer = useCallback(
    (value: number) => {
      const nextScore = score + value;
      if (idx + 1 < total) {
        setScore(nextScore);
        setIdx(idx + 1);
      } else {
        const profile = computeProfile(nextScore);
        navigation.navigate('Recomendações', { profile });
      }
    },
    [computeProfile, idx, navigation, score, total]
  );

  return {
    q,
    idx,
    total,
    handleAnswer,
  };
};
