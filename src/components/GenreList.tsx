import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import GenreContainer from "./GenreContainer";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  if (error) return null;
  //if (isLoading) return <Spinner />;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreContainer>
            <GenreSkeleton key={skeleton} />
          </GenreContainer>
        ))}

      <List>
        {data.map((genre) => (
          <GenreContainer>
            <ListItem key={genre.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          </GenreContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
