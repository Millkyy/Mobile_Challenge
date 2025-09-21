import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeTabParamList } from "../../navigation/HomeTabs";
import { useSimulation } from "./hooks/useSimulation";
import { Screen, QuestionText } from "./styles";
import { OptionButton } from "./components/OptionButton";
import { ProgressText } from "./components/ProgressText";

type Nav = StackNavigationProp<HomeTabParamList, "Simulação">;
type Props = { navigation: Nav };

const SimulationScreen: React.FC<Props> = ({ navigation }) => {
  const { q, idx, total, handleAnswer } = useSimulation(navigation);

  return (
    <Screen>
      <QuestionText>{q.text}</QuestionText>

      {q.options.map((opt) => (
        <OptionButton
          key={opt.label}
          label={opt.label}
          onPress={() => handleAnswer(opt.value)}
        />
      ))}

      <ProgressText current={idx + 1} total={total} />
    </Screen>
  );
};

export default SimulationScreen;
