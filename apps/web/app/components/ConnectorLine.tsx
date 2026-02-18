interface LineCoords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface ConnectorLineProps {
  coords: LineCoords | null;
  isPartial?: boolean;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const ConnectorLine = ({
  coords,
  isPartial = false,
  color = '#3434F4',
  strokeWidth = 2,
  className = '',
}: ConnectorLineProps) => {
  if (!coords) return null;

  const { x1, y1, x2, y2 } = coords;
  const curveOffset = 50;

  return (
    <svg className={`absolute inset-0 pointer-events-none w-full h-full z-0 hidden md:block ${className}`}>
      {/* Arrow marker definitions */}
      <defs>
        <marker
          id="connectorArrowStart"
          markerWidth="6"
          markerHeight="6"
          refX="0"
          refY="2"
          orient="auto-start-reverse"
          markerUnits="strokeWidth"
        >
          <path d="M6,0 L6,4 L0,2 z" fill={color} />
        </marker>
        <marker
          id="connectorArrowEnd"
          markerWidth="6"
          markerHeight="6"
          refX="6"
          refY="2"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,4 L6,2 z" fill={color} />
        </marker>
      </defs>
      <path
        d={`M ${x1} ${y1} C ${x1 + curveOffset} ${y1}, ${x2 - curveOffset} ${y2}, ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={isPartial ? "6 4" : "none"}
        markerStart="url(#connectorArrowStart)"
        markerEnd="url(#connectorArrowEnd)"
        className={isPartial ? "animate-pulse" : ""}
      />
    </svg>
  );
};

export default ConnectorLine;
