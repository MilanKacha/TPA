const AddUser = ({ theme }) => {
  const light = theme.mode === "light";

  return (
    <div
      className={`h-full flex flex-col gap-2 justify-center items-center text-[${theme.text}] text-xs`}>
      <div
        className={`w-[55%] rounded-lg bg-[${theme.header}] grid grid-cols-3 gap-2 p-2`}>
        <div
          className={`flex gap-2 justify-between items-center border ${
            light && "border-black"
          } p-2 rounded-lg`}>
          <span>Avaliable License</span>
          <span className="text-green-600">41</span>
        </div>
        <div
          className={`flex gap-2 justify-between items-center border ${
            light && "border-black"
          } p-2 rounded-lg`}>
          <span>Admin</span>
          <span className="text-green-600">09</span>
        </div>
        <div
          className={`flex gap-2 justify-between items-center border ${
            light && "border-black"
          } p-2 rounded-lg`}>
          <span>Front Desk</span>
          <span className="text-green-600">10</span>
        </div>
        <div
          className={`flex gap-2 justify-between items-center border ${
            light && "border-black"
          } p-2 rounded-lg`}>
          <span>Billing</span>
          <span className="text-green-600">05</span>
        </div>
        <div
          className={`flex gap-2 justify-between items-center border ${
            light && "border-black"
          } p-2 rounded-lg`}>
          <span>Finance</span>
          <span className="text-green-600">20</span>
        </div>
        <div
          className={`flex gap-2 justify-between items-center border ${
            light && "border-black"
          } p-2 rounded-lg`}>
          <span>B</span>
          <span className="text-green-600">02</span>
        </div>
      </div>

      <div
        className={`p-3 w-[55%] rounded-lg bg-[${theme.header}] flex flex-col gap-3`}>
        <div className="flex justify-center items-center flex-col leading-[9px] ">
          <h6 className="text-center font-bold ">ADD USER</h6>
          <div
            className={`w-[10rem] h-[2px] ${
              light ? "bg-black" : "bg-white"
            } left-[16.5rem] top-[75%]`}></div>
        </div>

        <div className="flex flex-col mx-5">
          <label htmlFor="hospital_name" className={`pb-1 px-1`}>
            Select Your Role
          </label>
          <select
            name="hospital_name"
            placeholder="select"
            className={`w-full border ${
              light && "border-black"
            } bg-transparent p-1 rounded-md outline-none`}
            required>
            <option className="text-black">Select</option>
            <option value="Admin" className="text-black">
              Admin
            </option>
            <option value="Front desk" className="text-black">
              Front Desk
            </option>
            <option value="Billing" className="text-black">
              Billing
            </option>
            <option value="Finance" className="text-black">
              Finance
            </option>
            <option value="b" className="text-black">
              b
            </option>
          </select>
        </div>

        <div className="flex flex-col mx-5">
          <label htmlFor="username" className={` pb-1 px-1`}>
            User name
          </label>
          <input
            type="email"
            name="username"
            className={`w-full border ${
              light && "border-black"
            } bg-transparent p-1 text-[0.9rem] rounded-md outline-none `}
            required
          />
        </div>

        <div className="btn flex justify-center items-center mx-4">
          <button
            type="submit"
            className="w-[96%] h-[1.5rem] bg-green-600 rounded-md text-white font-medium hover:border hover:border-violet-200">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
