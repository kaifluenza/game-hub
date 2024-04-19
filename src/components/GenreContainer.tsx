import { List, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreContainer = ({ children }: Props) => {
  return <List borderRadius={8} paddingY="5px">{children}</List>;
};

export default GenreContainer;
