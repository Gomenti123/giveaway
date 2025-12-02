"use client";

const Page = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("Clicked");
    }, 2000);
  };
  return (
    <div className="w-full h-screen p-10 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="rounded-md border w-full min-h-[300px] p-5"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>Email Address :</label>
            <input
              type="text"
              required
              className="border outline-none rounded-md p-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Access Token :</label>
            <input
              type="text"
              required
              className="border outline-none rounded-md p-1"
              placeholder="Enter your unique Access Token"
            />
            <p className="text-[12px] text-red-400">
              Note: Kindly contact your agent to get your access token
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-amber-400 mt-5 p-2 text-white w-full font-semibold flex gap-1 items-center justify-center rounded-full"
        >
          Access Dashboard
        </button>
      </form>
    </div>
  );
};

export default Page;
