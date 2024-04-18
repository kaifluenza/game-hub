import { Skeleton, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

const GenreSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="34px" />
    </Stack>
  );
};

export default GenreSkeleton;
