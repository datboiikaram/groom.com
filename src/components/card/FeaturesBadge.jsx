const FeaturesBadge = ({ feature }) => {
  return (
    <>
      {feature ? (
        <span className="bg-cyan-200 p-1 px-2 w-fit text-xs md:text-sm lg:text-base  text-cyan-800 rounded-sm md:rounded-xl font-bold ">
          {feature}
        </span>
      ) : (
        <span className="h-10"></span>
      )}
    </>
  );
};

export default FeaturesBadge;
