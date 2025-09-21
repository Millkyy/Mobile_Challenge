import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeTabParamList } from "../../navigation/HomeTabs";
import { useRecommendation } from "./hooks/useRecommendation";
import { Screen, Content, Title, ProfileText } from "./styles";
import { RecommendationCard } from "./components/RecommendationCard";
import { BlockedState } from "./components/BlockedState";

type Props = StackScreenProps<HomeTabParamList, "Recomendações">;

const RecommendationScreen: React.FC<Props> = ({ route, navigation }) => {
  const { profile, data, goSimulation } = useRecommendation(route, navigation);

  if (!profile) {
    return <BlockedState onGoSimulation={goSimulation} />;
  }

  return (
    <Screen>
      <Content>
        <Title>
          Perfil: <ProfileText>{profile}</ProfileText>
        </Title>

        {data.map((item) => (
          <RecommendationCard key={item.name} item={item} />
        ))}
      </Content>
    </Screen>
  );
};

export default RecommendationScreen;
