export default function Hero({ titulo }) {
  return (
    <>
      <div className="hero bg-base-200 min-h-[25vh] rounded-xl shadow-xl mb-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-neutral">{titulo}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
