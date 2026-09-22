import Image from "next/image";

export default function ProfileFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <div
        className="group relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:h-20 sm:w-20"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src="/profile.png"
            alt="Orlando Junior Fornolles"
            fill
            className="object-cover drop-shadow-lg"
            sizes="80px"
          />
        </div>
      </div>
    </div>
  );
}
