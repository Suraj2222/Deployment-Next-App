import VerticalNavbar from "@/components/Layout/VerticalNavbar";
import { accountSettingsItems } from "@/data";
import { MdContentCopy } from "react-icons/md";

const Settings = () => {
  return (
    <section className="container-1200 mx-auto flex flex-col">
      {/* Heading */}
      <div className="my-4 py-4">
        <h2 className="text-2xl font-bold pl-2">Personal Account Settings</h2>
      </div>

      {/* Horizontal Bar */}
      <div className="relative">
        <hr className="absolute -left-full border-1 border-gray-400 w-full" />
        <hr className="absolute left-0 border-1 border-gray-400 w-screen" />
      </div>

      {/* Setrings Section */}
      <div className="flex  my-10">
        {/* SideBar */}
        <div className="basis-1/4 ">
          <VerticalNavbar navItems={accountSettingsItems} />
        </div>
        {/* Main Content */}
        <div className="basis-3/4 flex flex-col gap-8">
          {/* Username Box */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Your Username</h3>
              <p>This is your URL namespace within Vercel.</p>
              <div className="flex my-2 gap-2">
                <button className="basis=1/4 p-1 border-2 border-gray-100 opacity-80 cursor-text">
                  vercel.com
                </button>
                <input
                  className="basis=3/4 w-48 p-1 px-4 border-2 border-gray-300"
                  type="text"
                  value="username"
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>Please use 48 characters at maximum.</span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Save
              </button>
            </div>
          </div>

          {/* Your Name Box */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Your Name</h3>
              <p>
                Please enter your full name, or a display name you are
                comfortable with.
              </p>
              <div className="flex my-2 gap-2">
                <input
                  className="basis=3/4 w-64 p-1 px-3 border-2 border-gray-300"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>Please use 32 characters at maximum.</span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Save
              </button>
            </div>
          </div>

          {/* Email Box */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Your Email</h3>
              <p>
                Please enter the email address you want to use to log in with
                Vercel.
              </p>
              <div className="flex my-2 gap-2">
                <input
                  className="basis=3/4 w-full p-1 px-4"
                  type="text"
                  value="example@email.com"
                />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>We will email you to verify the change.</span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Save
              </button>
            </div>
          </div>

          {/* Your ID */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Your iD</h3>
              <p>This is your user ID within Vercel.</p>
              <div className="w-80 flex items-center justify-center my-2 gap-2 border-2 border-gray-300">
                <span className="p-1 ">uvsNLzhWrkqSRQGVvOGaPPl3</span>
                <MdContentCopy size={20} />
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>Used when interacting with the Vercel API.</span>
            </div>
          </div>

          {/* Delete Project */}
          <div className="flex flex-col  gap-1 border-2 border-red-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">
                Delete Personal Account
              </h3>
              <p>
                Permanently remove your Personal Account and all of its contents
                from the Vercel platform. This action is not reversible, so
                please continue with caution.
              </p>
            </div>
            <div className="flex items-center bg-gray-100 p-3">
              <button className="rounded-md px-4 py-1 rounded=full first-letter:border-2 border-white bg-red-500 text-white opacity-80 cursor-text ml-auto font-semibold">
                Delete Personal Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
