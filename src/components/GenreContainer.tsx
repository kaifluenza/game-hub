import { List, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreContainer = ({ children }: Props) => {
  return (
    <List>
      <ListItem borderRadius={8} paddingY="5px">{children}</ListItem>
    </List>
  );
};

export default GenreContainer;
