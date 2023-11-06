import React from "react";
import PosterDetails from "../../landing/posters/PosterCard";

const BillingAddress = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-5/6 pb-10 font-inter">
        {/* Your orders section  */}
        <div className=" h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
          <div className="flex space-x-3 items-center">
            <img
              src="/public/assets/icons/address.png"
              alt="Saved Icon"
              className="w-6 h-6"
            />
            <h1 className="text-2xl font-bold ">Billing Address</h1>
          </div>
        </div>
        <div className=" h-auto bg-[#EFF2F3] rounded-2xl p-4 px-7">
          <div className="flex space-x-3 items-center justify-center">
            <button
              type="button"
              className="bg-[#F4F4F4] hover:bg-[#EAEAEA] text-gray-600 font-bold py-4 px-8 rounded-3xl border border-blue-300 "
            >
              <span className="flex items-center space-x-4">
                <img
                  src="/public/assets/icons/copy.png"
                  alt="Add Icon"
                  className="w-6 h-6"
                />
                <span className="text-sm">Add new address</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
