import { containerProps } from "@/app/components/container/types";
import { textProps } from "@/app/components/typography/types";

const pictureWrap: containerProps = {
  as: "figure",
  position: "relative",
  width: "200px",
  height: "200px",
  borderradius: "50%",
  overflow: "hidden",
};

const text: textProps = {
  color: "black",
  size: "16px",
};

export const styles = {
  wrap: pictureWrap,
  text: text,
};
