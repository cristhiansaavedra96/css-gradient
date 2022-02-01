import {
    BsArrowUp,
    BsArrowUpLeft,
    BsArrowUpRight,
    BsArrowLeft,
    BsArrowDownLeft,
    BsArrowDown,
    BsArrowDownRight,
    BsArrowRight,
    BsCircle,
} from "react-icons/bs";

const buttons = [
    {
        direction: 'top-left',
        icon: <BsArrowUpLeft />
    },
    {
        direction: 'top-mid',
        icon: <BsArrowUp />
    },
    {
        direction: 'top-right',
        icon: <BsArrowUpRight />
    },
    {
        direction: 'left',
        icon: <BsArrowLeft />
    },
    {
        direction: 'center',
        icon: <BsCircle />
    },
    {
        direction: 'right',
        icon: <BsArrowRight />
    },
    {
        direction: 'bottom-left',
        icon: <BsArrowDownLeft />
    },
    {
        direction: 'bottom-mid',
        icon: <BsArrowDown />
    },
    {
        direction: 'bottom-right',
        icon: <BsArrowDownRight />
    },

]

export default buttons;