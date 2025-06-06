import { Icon, IconProps } from "@chakra-ui/react";

type Props = IconProps;

export const PaidOrder = (props: Props) => {
  const { width = 10, height = 10, ...rest } = props;

  return (
    <Icon
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 1224 792"
      xmlSpace="preserve"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={755}
        height={607}
        viewBox="0 0 755.0000000000006 606.999999999999"
        xmlSpace="preserve"
      >
        <path
          d="M225.38 585.25L198.61 550l-43.889-50.323-50.221-40.088-56.75-35.997L23 410.595 38.5 336 54 258.835 55.51 256l20.25 9.424 18.74 9.423 29.11 29.327 29.111 29.326 13.215 21.25L179.871 376l97.457-102L398.5 159.519l89-69.957 114.973-79.37L659.544 81.5l64.611 81.838 8.814 12-62.25 36.092-62.219 34.93L543 292.32 378.767 420.175 334.033 460.5l-37.6 42.5-52.767 63.226-16.175 20.75z"
          fill="#21b04b"
        />
      </svg>
    </Icon>
  );
};
