import { Cursor } from "./cursors-context";

// NOTE
// The pointer SVG is from https://github.com/daviddarnes/mac-cursors
// The license is the Apple User Agreement

export default function OtherCursor(props: {
  cursor: Cursor
  windowDimensions: { width: number; height: number };
}) {
  const { cursor, windowDimensions } = props;

  const left = cursor.x * windowDimensions.width;
  const top = cursor.y * windowDimensions.height;

  return (
    <div className="absolute flex flex-col z-10" style={{ left: left, top: top }}>
      <svg
      width="26"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill='#fff'
      />
    </svg>
      <span
        className="w-5 -mt-6 ml-2"
        dangerouslySetInnerHTML={{ __html: cursor.flag }}
      >
      </span>
    </div>
  );
}
