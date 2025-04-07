import { Icon } from "@chakra-ui/react";

type Props = {
  color?: string;
  selected?: boolean;
  width?: number;
  height?: number;
};

export const ProfileTab: React.FC<Props> = ({ selected = true, ...props }) => {
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
        <path
          d="M31 26.41c0 5.864-6.716 5.588-15 5.588-8.284 0-15 .276-15-5.588C1 20.547 7.716 15 16 15c8.284 0 15 5.547 15 11.41z"
          fill={color as string}
        />
        <circle cx={16} cy={7} r={7} fill={color as string} />
      </svg>
    </Icon>
  );
};
