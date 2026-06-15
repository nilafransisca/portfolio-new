import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="sertifikasi" className="py-20 bg-pink-light">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl text-gray-800 mb-12">
          Sertifikasi & Pelatihan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {certificates.map((cert) => {
            const card = (
              <div className="bg-white rounded-2xl shadow overflow-hidden h-full transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-pink-accent/30">
                <div className="w-full h-[250px] bg-gray-50 flex items-center justify-center p-2.5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-gray-800">{cert.title}</p>
                </div>
              </div>
            );

            return cert.link ? (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                {card}
              </a>
            ) : (
              <div key={cert.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
