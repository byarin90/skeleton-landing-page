function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0,position:'absolute' }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#32C5FF" />
            <stop offset="85.56%" stopColor="#B620E0" />
          </linearGradient>

        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;
  