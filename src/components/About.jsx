export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-center bg-gradient-to-br from-white to-pink-light overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-accent/10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-pink-soft/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="relative inline-block font-bold text-3xl text-gray-800 mb-12 pb-4">
          About Me
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[3px] rounded bg-gradient-to-r from-pink-accent to-pink-soft" />
        </h2>

        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border-l-[5px] border-pink-accent px-8 md:px-10 pt-10 pb-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <span className="absolute -top-[18px] left-8 bg-white text-xl px-2.5 py-1.5 rounded-lg shadow">
            💼
          </span>
          <p className="text-gray-600 leading-relaxed text-justify">
            Hallo! Saya merupakan lulusan D3 Teknologi Informasi dari
            Universitas Brawijaya dengan pengalaman dalam bidang pengembangan
            web. Memiliki kemampuan dalam menggunakan bahasa
            pemrograman seperti HTML, CSS, JavaScript, serta framework ReactJS
            dan Tailwind CSS. Saat ini saya ingin terus mengembangkan
            kemampuan di bidang teknologi digital. Saya memiliki semangat
            untuk berkembang, mudah beradaptasi, serta tertarik untuk
            mempelajari hal baru.
          </p>
        </div>
      </div>
    </section>
  );
}
