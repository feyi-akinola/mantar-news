
const TitleBanner = ({ title } : { title?: string}) => {
  return (
    <div className={`relative w-screen left-1/2 right-1/2 -mx-[50vw]
      ${title ? 'py-3 px-6 lg:py-6 lg:px-12' : 'h-14'} bg-[url('/images/abstract-bg.jpg')]
      bg-cover bg-center`}>
      {
        title && (
          <h2 className="max-w-[1600px] mx-auto text-2xl lg:text-4xl font-bold
            text-white font-expanded text-shadow-md">
            {title}
          </h2>
        )
      }
    </div>
  );
};

export default TitleBanner;