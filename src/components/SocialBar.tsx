const socials = [
  { name: "Instagram", count: "128K" },
  { name: "TikTok", count: "94K" },
  { name: "Pinterest", count: "61K" },
  { name: "YouTube", count: "40K" },
  { name: "WhatsApp", count: "22K" },
];

export default function SocialBar() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl bg-nude-soft grid grid-cols-2 sm:grid-cols-5 gap-6 px-6 py-8">
        {socials.map((s) => (
          <div key={s.name} className="text-center">
            <p className="text-xl font-extrabold" style={{ color: "var(--primary)" }}>
              {s.count}
            </p>
            <p className="text-xs font-semibold text-foreground/60 mt-1">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
