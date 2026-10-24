// Abstract account-network graphic behind the portrait. Purely decorative; it shows no data.
// Two signal dots travel the network when motion is allowed.
export function HeroArt({ animate }: { animate: boolean }) {
  const nodes: [number, number, number][] = [
    [70, 110, 4], [160, 60, 5], [270, 40, 6], [60, 230, 4], [40, 360, 5],
    [360, 80, 4], [450, 150, 5], [470, 280, 4], [420, 400, 6], [90, 470, 4], [200, 540, 5],
  ];
  const links = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [5, 6], [6, 7], [7, 8], [3, 9], [9, 10], [4, 9], [1, 5],
  ];
  const hot = new Set([2, 6, 9]);
  const routeA = "M70 110 L160 60 L270 40 L360 80 L450 150 L470 280 L420 400";
  const routeB = "M60 230 L40 360 L90 470 L200 540";
  return (
    <svg className="hero-art" viewBox="0 0 520 600" role="presentation" aria-hidden="true" focusable="false">
      <rect className="frame" x="8" y="8" width="504" height="584" rx="36" pathLength="1" />
      <g className="net">
        {links.map(([a, b], i) => {
          const na = nodes[a] as [number, number, number];
          const nb = nodes[b] as [number, number, number];
          return <line key={i} x1={na[0]} y1={na[1]} x2={nb[0]} y2={nb[1]} />;
        })}
        {nodes.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} className={hot.has(i) ? "net-hot" : ""} />
        ))}
      </g>
      {animate ? (
        <g className="signals">
          <circle r="5" className="signal">
            <animateMotion dur="7s" repeatCount="indefinite" path={routeA} />
          </circle>
          <circle r="4" className="signal">
            <animateMotion dur="5s" begin="1.5s" repeatCount="indefinite" path={routeB} />
          </circle>
        </g>
      ) : null}
    </svg>
  );
}
