import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import GenreContainer from "./GenreContainer";

interface Props{
  onSelectedGenre:(genre:Genre) => void;
  selectedGenre:Genre | null;
}


const GenreList = ({selectedGenre, onSelectedGenre}:Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  if (error) return null;
  //if (isLoading) return <Spinner />;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreContainer key={skeleton}>
            <GenreSkeleton />
          </GenreContainer>
        ))}

      <List>
        {data.map((genre) => (
          <GenreContainer key={genre.id}>
            <ListItem>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight={genre.id===selectedGenre?.id? "bold" :"normal" }
                  onClick={() => onSelectedGenre(genre)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
