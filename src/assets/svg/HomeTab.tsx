import { Icon } from "@chakra-ui/react";

type Props = {
  color?: string;
  selected?: boolean;
  width?: number;
  height?: number;
};

export const HomeTab: React.FC<Props> = ({ selected = true, ...props }) => {
  const selectedColor = selected ? "#EB0029" : "#E2E2E2";
  const { width = 10, height = 10, color = selectedColor, ...rest } = props;

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
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1288_1381)">
          <path
            d="M3 15.2a3 3 0 01.918-2.16L16 1.39l12.082 11.65A3 3 0 0129 15.2V28a3 3 0 01-3 3H6a3 3 0 01-3-3V15.2z"
            stroke={color as string}
            strokeWidth={2}
          />
          <path
            d="M21.746 20.114h-3.834v3.888h-1.53v-3.888h-3.816v-1.386h3.816v-3.906h1.53v3.906h3.834v1.386z"
            fill={color as string}
          />
        </g>
        <defs>
          <clipPath id="clip0_1288_1381">
            <path fill="#fff" d="M0 0H32V32H0z" />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
};
