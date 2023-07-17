import { IconArrowMoveDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/tippy.css";

const ArrowDown = ({ text }) => (
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
