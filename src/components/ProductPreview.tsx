import Image from "next/image";

export function ProductPreview() {
  return (
    <div className="container mx-auto px-6 -mt-20 mb-32">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <Image
            src="/product-screenshot.svg"
            alt="CallCopilot Dashboard — real-time sales coaching interface"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
