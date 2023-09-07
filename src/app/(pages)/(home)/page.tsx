import { Container } from "@/app/components/container/styles";
import { styles } from "./styles";
import { Profile } from "./components/profile";

export default function HomePage() {
  return (
    <Container {...styles.container}>
      <Profile.wrap>
        <Profile.pictutre />
        <Profile.text />
      </Profile.wrap>
    </Container>
  );
}
