import { GithubIcon, SendIcon, VercelIcon } from "../icons";

const FormPage = () => {
  return (
    <div>
      <div className="fixed top-0 hidden sm:flex justify-between items-center w-full py-5 px-10 bg-slate-200">
        <a href="#" target="_blank">
          <VercelIcon></VercelIcon>
        </a>
        <a href="#" target="_blank">
          <GithubIcon></GithubIcon>
        </a>
      </div>
      <div className="fixed bottom-0 w-full bg-slate-200 p-10">
        <form className="max-w-4xl mx-auto relative">
          <input
            type="text"
            placeholder="Send a message"
            className="rounded-md w-full px-3 py-4 focus:outline-none"
          ></input>
          <button className="absolute inset-y-0 right-2 flex items-center justify-center rounded-md transition-all w-8 my-2 bg-green-500 hover:bg-green-600">
            <SendIcon className="h-4 w-4 text-white"></SendIcon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
