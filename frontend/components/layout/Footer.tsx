export const Footer = () => {
  return (
    <div
      className="flex justify-center items-center fixed bottom-0 right-0 z-10 w-16 h-12 border-solid border-l-2 border-t-2 border-l-white/40 bg-white/30 shadow-sm backdrop-blur-sm"
    >
      <div
        className="flex justify-center items-center gap-20"
      >
        <button
          className="flex justify-center items-center gap-2"
        >
            <img src="/images/cacti_co_pet.svg" width="25" height="25" alt="cacti_co_logo" />

        </button>
      </div>
    </div>
  );
};