import { FC } from "react";
import { IconArrowMoveDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/tippy.css";

interface ArrowDownProps {
  text: string;
}

const ArrowDown: FC<ArrowDownProps> = ({ text }) => (
  <Tippy
    content={text}
    placement="right"
    animation="shift-away"
    duration={500}
  >
    <IconArrowMoveDown className="animate-bounce text-negro3" />
  </Tippy>
);

export default ArrowDown;
