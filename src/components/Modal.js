import avatar from "../assets/Bitmap.png";

function Modal() {
  return (
    <div className=" mt-6 p-12 rounded-2xl w-full drop-shadow-xl bg-light-white dark:bg-dark-darkblue dark:drop-shadow-none dark:text-dark-white outline-none">
      <div className="flex justify-between pb-5">
        <img src={avatar} alt="avatar" className="rounded-full " />
        <div className="flex flex-col">
          <h1>The Octocat</h1>
          <p>@octocat</p>
          <p>This profile has no bio</p>
        </div>
        <p>Joined 25 Jan 2011</p>
      </div>
      <div className="flex justify-end ml-32">
        <div className="flex rounded-2xl bg-light-lightblue dark:bg-dark-dark py-3.5 px-8 container justify-between pr-20">
          <div>
            <p>Repos</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>3938</p>
          </div>
          <div>
            <p>Following</p>
            <p>9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
