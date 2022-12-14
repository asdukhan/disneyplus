import Image from "next/image";

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group">
        <Image src="/images/disnep.png" layout="fill"   alt="image" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/vedios/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/pixar.png" layout="fill"   alt="image" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/vedios/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/marvel.png" layout="fill"   alt="image" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/vedios/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image src="/images/starwars.png" layout="fill"   alt="image" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/vedios/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          alt="image"
          
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/vedios/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Brands;