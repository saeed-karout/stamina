const Hero = ({
  name,
  image,
  description,
}: {
  name: string | undefined;
  image: string | undefined;
  description: string | undefined;
}) => {
  return (
    <div
      className="h-[384px] bg-cover bg-center mb-[24px]"
      style={{
        backgroundImage: `linear-gradient(#30373FA3, #30373FA3), url(${image})`,
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-[36px] text-white">{name}</h1>
        <p className="text-[18px] text-white mt-4 max-w-[700px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
