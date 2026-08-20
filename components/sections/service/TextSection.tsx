export default function TextSection({
  heading,
  body,
  bg = "cream",
}: {
  heading: string;
  body: string | React.ReactNode;
  bg?: "cream" | "white";
}) {
  return (
    <section className={bg === "cream" ? "bg-cream py-16 sm:py-24" : "bg-white py-16 sm:py-24"}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-ink text-balance">
          {heading}
        </h2>
        <div className="mt-5 text-lg text-ink/70 leading-relaxed">{body}</div>
      </div>
    </section>
  );
}
