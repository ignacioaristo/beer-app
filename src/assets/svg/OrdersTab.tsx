import { Icon } from "@chakra-ui/react";

type Props = {
  color?: string;
  selected?: boolean;
  width?: number;
  height?: number;
};
export const OrdersTab: React.FC<Props> = ({ selected = true, ...props }) => {
  const selectedColor = selected ? "red" : "#E2E2E2";
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
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
        <path fill="#fff" d="M0 0H32V32H0z" />
        <path
          d="M26.133 22.31c.409 4.118-2.827 7.69-6.966 7.69h-6.334c-4.14 0-7.375-3.572-6.966-7.69l.952-9.606A3 3 0 019.805 10h12.39a3 3 0 012.986 2.704l.952 9.605z"
          stroke={color as string}
          strokeWidth={2}
        />
        <path
          stroke={color as string}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17L20 17"
        />
        <path
          stroke={color as string}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21L20 21"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.86 9.337C19.95 8.92 20 8.473 20 8c0-3.062-2.069-5-4-5s-4 1.938-4 5c0 .473.05.92.14 1.337a9.427 9.427 0 00-1.864.767A8.078 8.078 0 0110 8c0-3.866 2.686-7 6-7s6 3.134 6 7c0 .733-.097 1.44-.276 2.104a9.426 9.426 0 00-1.864-.767z"
          fill={color as string}
        />
      </svg>
    </Icon>
  );
};
