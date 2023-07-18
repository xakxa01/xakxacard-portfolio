import { FC, useEffect, useCallback, useMemo, useState } from "react";
import styles from "../styles/controller.module.css";
import {
  IconSquareRoundedArrowLeft,
  IconSquareRoundedArrowDown,
  IconSquareRoundedArrowUp,
  IconSquareRoundedArrowRight,
  IconSquareRoundedArrowLeftFilled,
  IconSquareRoundedArrowDownFilled,
  IconSquareRoundedArrowUpFilled,
  IconSquareRoundedArrowRightFilled,
  IconRefresh,
  IconSquareRoundedFilled,
} from "@tabler/icons-react";
import type { direction, func } from "../types";

interface controllerP {
  goBack: func;
  swipe: (dir: direction) => void;
}

const keysIconsArray = [
  {
    direction: "left",
    keyAction: "ArrowLeft",
    noActive: IconSquareRoundedArrowLeft,
    active: IconSquareRoundedArrowLeftFilled,
  },
  {
    direction: "down",
    keyAction: "ArrowDown",
    noActive: IconSquareRoundedArrowDown,
    active: IconSquareRoundedArrowDownFilled,
  },
  {
    direction: "up",
    keyAction: "ArrowUp",
    noActive: IconSquareRoundedArrowUp,
    active: IconSquareRoundedArrowUpFilled,
  },
  {
    direction: "right",
    keyAction: "ArrowRight",
    noActive: IconSquareRoundedArrowRight,
    active: IconSquareRoundedArrowRightFilled,
  },
];

const Controller: FC<controllerP> = ({ goBack, swipe }) => {
  const [isActive, setIsActive] = useState<string>();

  const keyActions = useMemo(
    () => ({
      ArrowLeft: () => swipe("left"),
      ArrowDown: () => swipe("down"),
      ArrowUp: () => swipe("up"),
      ArrowRight: () => swipe("right"),
    }),
    [swipe]
  );

  const animationIcon = (keyAction: string) => {
    setIsActive(keyAction);
    setTimeout(() => setIsActive(undefined), 200);
  };

  const keybinds = useCallback(
    ({ key }: KeyboardEvent) => {
      type keyActionsKeys = keyof typeof keyActions;
      keyActions[key as keyActionsKeys]?.();

      if (key === " ") goBack();

      animationIcon(key);
    },
    [keyActions, goBack]
  );

  useEffect(() => {
    window.addEventListener("keydown", keybinds);

    return () => {
      window.removeEventListener("keydown", keybinds);
    };
  }, [keybinds]);

  return (
    <div className={styles.container}>
      {keysIconsArray.map(({ direction, noActive, active, keyAction }) => {
        const Icon = isActive === keyAction ? active : noActive;

        return (
          <button
            key={direction}
            onClick={() => {
              swipe(direction as direction);
              animationIcon(keyAction);
            }}
          >
            <Icon
              size={49}
              className={styles.keyIcons}
            />
          </button>
        );
      })}

      <button
        className={styles.backBtn}
        onClick={goBack}
      >
        <IconSquareRoundedFilled
          className={styles.backgroundIcon}
          size={49}
        />
        <IconRefresh className={styles.backIcon} />
      </button>
    </div>
  );
};

export default Controller;