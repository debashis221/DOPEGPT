const ResultCard = ({ message }: { message: string }) => {
  console.log(message);
  return (
    <div className="max-w-sm w-screen lg:max-w-full lg:flex justify-center">
      <div className="min-w-[50vw] px-5 py-5 min-h-[20vh] lg:w-40 bg-white rounded-lg text-center overflow-hidden text-black">
        <h3 className="text-xl">{message}</h3>
      </div>
    </div>
  );
};

export default ResultCard;
