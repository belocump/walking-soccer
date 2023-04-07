import Image from "next/image";

export default function Logo() {
  return (
    <div className="mx-auto px-4 py-4">
      <Image src="/title.png" alt="" width={1000} height={400} />
    </div>
  );
}
