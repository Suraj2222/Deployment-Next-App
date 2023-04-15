import VerticalNavbar from "@/components/Layout/VerticalNavbar";
import { accountSettingsItems } from "@/data";
import { MdContentCopy } from "react-icons/md";

const Billing = () => {
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
          {/* Plan Box */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Plan</h3>
              <p>
                Plan Your Personal account is on the Hobby plan. Free of charge.
                Learn more →
              </p>
              <div className="flex my-2 gap-2">
                <span>Coming SOON</span>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>Contact Sales</span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Create a Team
              </button>
            </div>
          </div>

          {/* Payment Box */}
          <div className="flex flex-col  gap-1 border-2 border-gray-400 rounded-lg">
            <div className="p-4 pb-1">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <p>
                ou have not yet added any cards. Click the button below to add
                one.
              </p>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4">
              <span>
                At most, three credit cards, debit cards or prepaid cards can be
                added.
              </span>
              <button className="border-2 border-gray-50 opacity-80 cursor-text">
                Add New Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
