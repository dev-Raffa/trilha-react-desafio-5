import { Container } from "@/app/components/container/styles";
import { styles } from "../../styles";
import Image from "next/image";
import picture from "../../../../../../../../public/me_2.jpg";

export const PictureProfile = () => {
  return (
    <Container {...styles.wrap}>
      <Image
        src={picture}
        alt="Picture of the autor"
        priority
        fill
        quality={90}
      />
    </Container>
  );
};
