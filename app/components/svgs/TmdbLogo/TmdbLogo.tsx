import Image from "next/image";
import * as React from "react";

export const TmdbLogo: React.FC = () => {
  return <Image src="images/tmdb.svg" alt="TMDB" width={36} height={36} />;
};

export default TmdbLogo;
