import { Badge } from "@chakra-ui/react";

//need a prop for receiving the score
//so define an interface to define shape of prop
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
