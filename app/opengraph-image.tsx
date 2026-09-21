import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Orlando Junior Fornolles';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fafaf8', // Matches var(--background)
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 800,
            color: '#171717', // Matches var(--foreground)
            letterSpacing: '-0.02em',
            textShadow: '5px 5px 0px #4f7a5f, 10px 10px 0px rgba(0,0,0,0.1)', // Scaled up version of the 3D shadow effect
          }}
        >
          Orlando Junior Fornolles
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
