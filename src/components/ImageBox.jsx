// ImageBox: shows real image if src provided, else styled placeholder
export default function ImageBox({ src, alt, emoji = "📷", label = "Photo", style = {}, aspectRatio = "4/3" }) {
  return (
    <div style={{
      aspectRatio,
      background: "linear-gradient(135deg, #0A1628 0%, #122040 100%)",
      overflow: "hidden", position: "relative",
      ...style
    }}>
      {src ? (
        <img src={src} alt={alt || label} style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block"
        }} />
      ) : (
        <div style={{
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "0.6rem",
          background: "linear-gradient(135deg, #0A1628, #1E3A5F)",
          position: "relative"
        }}>
          {/* Subtle grid pattern */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.06,
            backgroundImage: "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />
          <span style={{ fontSize: "2.2rem", opacity: 0.5, position: "relative" }}>{emoji}</span>
          <span style={{
            fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(201,168,76,0.45)", position: "relative"
          }}>{label}</span>
          {/* Upload hint */}
          <span style={{
            fontSize: "0.58rem", color: "rgba(201,168,76,0.25)",
            letterSpacing: "0.1em", position: "relative"
          }}>Add photo to public/images/</span>
        </div>
      )}
    </div>
  );
}
