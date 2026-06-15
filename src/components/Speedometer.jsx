// Signature element: a working instrument gauge. The needle sweeps from rest to
// its reading on page load (see .gauge-needle in index.css), turning the brief's
// promise — "your panel, working again" — into something the page performs.

const CX = 400
const CY = 400
const MAJORS = 11 // 0, 20, 40 ... 200

const polar = (r, deg) => {
  const rad = (deg * Math.PI) / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

// Arc path helper (clockwise sweep from a1 to a2 at radius r)
const arc = (r, a1, a2) => {
  const [x1, y1] = polar(r, a1)
  const [x2, y2] = polar(r, a2)
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`
}

const angleOf = i => -225 + i * 27 // value 0 at -225°, value 200 at +45°

export default function Speedometer({ className = '' }) {
  const majors = Array.from({ length: MAJORS }, (_, i) => i)
  const minors = Array.from({ length: (MAJORS - 1) * 5 + 1 }, (_, i) => i).filter(i => i % 5 !== 0)

  return (
    <svg
      viewBox="0 0 800 620"
      className={className}
      role="img"
      aria-label="Velocímetro Velomaicon com ponteiro indicando o painel em funcionamento"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft backlight rising behind the face — warm, not neon */}
      <g className="gauge-lit">
        <circle cx={CX} cy={CY} r="250" fill="url(#backlight)" />
      </g>
      <defs>
        <radialGradient id="backlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8a1f" stopOpacity="0.16" />
          <stop offset="55%" stopColor="#ff8a1f" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ff8a1f" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Bezel + dial face */}
      <path d={arc(330, -225, 45)} stroke="#39414c" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d={arc(300, -225, 45)} stroke="#262c35" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Redline zone — 160 to 200 (the one accent that means danger) */}
      <path d={arc(316, angleOf(8), angleOf(10))} stroke="#e0382f" strokeWidth="8" fill="none" strokeLinecap="butt" />

      {/* Minor ticks */}
      {minors.map(i => {
        const a = -225 + i * 5.4
        const [x1, y1] = polar(330, a)
        const [x2, y2] = polar(320, a)
        return <line key={`mn${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5a626d" strokeWidth="1.2" strokeLinecap="round" />
      })}

      {/* Major ticks + numerals */}
      {majors.map(i => {
        const a = angleOf(i)
        const [x1, y1] = polar(330, a)
        const [x2, y2] = polar(302, a)
        const [nx, ny] = polar(258, a)
        const value = i * 20
        const isRed = value >= 160
        return (
          <g key={`mj${i}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={isRed ? '#e0382f' : '#aeb4bd'} strokeWidth="3" strokeLinecap="round" />
            <text
              x={nx}
              y={ny + 11}
              textAnchor="middle"
              fontFamily='"Saira Condensed", sans-serif'
              fontWeight="600"
              fontSize="34"
              fill={isRed ? '#e0382f' : '#dcd6c8'}
            >
              {value}
            </text>
          </g>
        )
      })}

      {/* Dial inscriptions */}
      <text x={CX} y="300" textAnchor="middle" fontFamily='"IBM Plex Mono", monospace' fontSize="20" letterSpacing="4" fill="#8b93a1">km/h</text>
      <text x={CX} y="470" textAnchor="middle" fontFamily='"Saira Condensed", sans-serif' fontWeight="600" fontSize="22" letterSpacing="6" fill="#8b93a1">VELOMAICON</text>

      {/* Needle (sweeps via .gauge-needle). Drawn pointing east, then rotated. */}
      <g className="gauge-needle">
        <polygon points="368,400 400,392 656,400 400,408" fill="#ff8a1f" />
      </g>

      {/* Center hub */}
      <circle cx={CX} cy={CY} r="30" fill="#161a21" stroke="#39414c" strokeWidth="2" />
      <circle cx={CX} cy={CY} r="11" fill="#ff8a1f" />
    </svg>
  )
}
