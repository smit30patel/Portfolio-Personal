/**
 * HandDrawnAvatar — smaller, slightly tilted frame, no caption below
 */
export default function HandDrawnAvatar({ imageSrc = "/img/profile_pic_croped.png", alt = "Smit Patel" }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Slightly awkward tilted frame */}
      <div
        style={{
          width: '148px',
          height: '178px',
          transform: 'rotate(-3.5deg)',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <img
          src={imageSrc}
          alt={alt}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://api.dicebear.com/7.x/notionists/svg?seed=SmitPatel&backgroundColor=ffffff";
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px',
            border: 'none',
            filter: 'contrast(1.08) grayscale(0.12) sepia(0.06)',
          }}
        />
      </div>
      {/* No caption below */}
    </div>
  );
}
