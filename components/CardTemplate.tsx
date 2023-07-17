import TinderCard from "react-tinder-card";
import { FC, MutableRefObject, ReactNode } from "react";

type func = () => void;

interface cardTemplateProps {
  swiped: func;
  children: ReactNode;
  link?: string;
  props: {
    ref: MutableRefObject<any>;
    onCardLeftScreen: func;
  };
}

const openURL = (url: string) => {
  setTimeout(() => {
    window.open(url, "_blank");
  }, 1000);
};

const CardTemplate: FC<cardTemplateProps> = ({
  children,
  props,
  swiped,
  link,
}) => {
  const onSwipe = (dir: string) => {
    if (dir === "down" && link) openURL(`https://${link}`);

    swiped();
  };

  return (
    <TinderCard
      {...props}
      swipeThreshold={100}
      swipeRequirementType="position"
      onSwipe={(dir) => onSwipe(dir)}
      className="absolute z-10 flex h-full w-full select-none items-center justify-center overflow-hidden rounded-2xl bg-white p-0.5"
    >
      {children}
    </TinderCard>
  );
};

export default CardTemplate;
