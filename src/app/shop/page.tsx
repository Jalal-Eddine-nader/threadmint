import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  {
    id: 1,
    name: "Minimal Wave",
    price: 29,
    tag: "Bestseller",
    desc: "Clean geometric wave on 180g premium cotton. Available in white, black, and stone.",
    color: "bg-emerald-50",
    img: "/designs/minimal-wave.svg",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Urban Grid",
    price: 29,
    tag: "New",
    desc: "Bold grid pattern inspired by city blueprints. Crisp on white or charcoal.",
    color: "bg-sky-50",
    img: "/designs/urban-grid.svg",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "Botanical",
    price: 32,
    tag: "",
    desc: "Delicate leaf illustration. Sustainably printed with water-based inks.",
    color: "bg-lime-50",
    img: "/designs/botanical.svg",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Sunrise Type",
    price: 29,
    tag: "",
    desc: "Typographic sunrise motif. Minimal, warm, and universally wearable.",
    color: "bg-amber-50",
    img: "/designs/sunrise-type.svg",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "Circuit",
    price: 32,
    tag: "Tech",
    desc: "PCB circuit board pattern for the technically inclined.",
    color: "bg-slate-50",
    img: "/designs/circuit.svg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Wildflower",
    price: 32,
    tag: "",
    desc: "Hand-drawn wildflower illustration in a classic bouquet arrangement.",
    color: "bg-rose-50",
    img: "/designs/wildflower.svg",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold mb-2">Shop</h1>
        <p className="text-gray-500">
          All shirts are printed on 180g premium cotton.{" "}
          <Link href="/order" className="text-emerald-600 underline">
            Want something custom?
          </Link>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
          >
            <div className={`${p.color} h-60 flex items-center justify-center overflow-hidden`}>
              <Image
                src={p.img}
                alt={p.name}
                width={240}
                height={240}
                className="object-contain h-52 w-52"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="font-bold">{p.name}</h2>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                {p.tag && (
                  <span className="ml-2 shrink-0 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1 my-3">
                {p.sizes.map((s) => (
                  <span
                    key={s}
                    className="text-xs border border-gray-200 px-2 py-0.5 rounded-full text-gray-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold">€{p.price}</span>
                <Link
                  href={`/order?design=${encodeURIComponent(p.name)}`}
                  className="bg-gray-900 text-white text-xs px-4 py-2 rounded-full hover:bg-emerald-500 transition-colors"
                >
                  Order this
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CTA */}
      <div className="mt-16 bg-emerald-50 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Don't see what you want?</h2>
        <p className="text-gray-500 mb-6">
          Submit your own design or describe what you have in mind. We'll make it happen.
        </p>
        <Link
          href="/order"
          className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-emerald-600 transition-colors"
        >
          Request a custom shirt
        </Link>
      </div>
    </div>
  );
}
