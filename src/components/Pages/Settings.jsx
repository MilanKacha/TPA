import PropTypes from "prop-types";

const Settings = ({ theme }) => {
  console.log(`bg-[${theme.header}]`);
  return (
    <div
      className={`h-full flex justify-center items-center text-[${theme.text}]`}>
      <form
        className={`absolute p-4 w-[35%] rounded-lg bg-[${theme.header}] ${
          theme.mode === "dark" && "bg-[#161a30]"
        }  flex flex-col gap-3`}>
        <div className={`flex justify-center`}>UPDATE PASSWORD</div>
        <input
          type="password"
          placeholder="ENTER OLD PASSWORD"
          className={`w-full bg-[${
            theme.pageBg
          }] text-[0.54rem] px-2 rounded-md h-6 ${
            theme.mode === "light" && "placeholder-[black]"
          }`}
          autoComplete="current-password"
        />
        <input
          type="password"
          placeholder="ENTER NEW PASSWORD"
          className={`w-full bg-[${
            theme.pageBg
          }] text-[0.54rem] px-2 rounded-md h-6 ${
            theme.mode === "light" && "placeholder-[black]"
          }`}
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="CONFIRM NEW PASSWORD"
          className={`w-full bg-[${
            theme.pageBg
          }] text-[0.54rem] px-2 rounded-md h-6 ${
            theme.mode === "light" && "placeholder-[black]"
          }`}
          autoComplete="new-password"
        />
        <div className="flex justify-center items-center">
          <button className="bg-[rgba(52,249,105,0.74)] hover:bg-[rgba(52,249,105,0.95)] px-2 rounded-md h-6 text-xs w-[16%]">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

// Settings.propTypes = {
//   theme: PropTypes.object.isRequired,
// };

export default Settings;
