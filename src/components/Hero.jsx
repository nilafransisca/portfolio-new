export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 mt-0 text-center bg-pink-light overflow-hidden"
    >
      {/* Decorative floating circles */}
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-gradient-to-br from-pink-soft/30 to-pink-accent/30 animate-float pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-pink-accent/20 to-pink-soft/20 animate-float-reverse pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/img/foto1.jpg"
              alt="Profile Picture"
              className="rounded-2xl shadow-lg border-[5px] border-white max-w-[280px] w-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-3 tracking-tight bg-gradient-to-r from-pink-accent to-pink-hot bg-clip-text text-transparent animate-fadeInUp">
              Nila Fransisca Hardiyeni
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium animate-fadeInUpSlow">
               Junior Web Developer 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
