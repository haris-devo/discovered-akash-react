import { useState } from "react";
import Orders from "./profile-components/orders/Orders";
import SavedOrders from "./profile-components/saved-orders/SavedOrders";
import FavouriteOrder from "./profile-components/FavouriteOrder";
import UpdateProfileInfo from "./profile-components/UpdateProfileInfo";
import BillingAddress from "./profile-components/BillingAddress";

const Profile = () => {
  const [selectedItem, setSelectedItem] = useState("Billing address");
  const sidebarItems = [
    {
      name: "Language",
      component: null,
      divider: true,
      icon: "/public/assets/icons/language.png",
    },
    {
      name: "Your Orders",
      component: <Orders />,
      icon: "/public/assets/icons/order.png",
    },
    {
      name: "Saved Posters",
      component: <SavedOrders />,
      icon: "/public/assets/icons/saved.png",
    },
    {
      name: "Favourites",
      component: <FavouriteOrder />,
      icon: "/public/assets/icons/favourite.png",
    },
    {
      name: "Billing address",
      component: <BillingAddress />,
      icon: "/public/assets/icons/address.png",
    },
    {
      name: "Update Profile Info",
      component: <UpdateProfileInfo />,
      icon: "/public/assets/icons/settings.png",
    },
  ];

  return (
    <>
      <div className="flex justify-center space-x-4 mx-auto px-10 container py-4 font-inter">
        <div className="h-full p-3 space-y-2 w-1/4 bg-[#EFF2F3] rounded-2xl text-black">
          <div className="flex items-center p-2 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
          <div className="divide-y divide-blue-200">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  className={item.name === selectedItem ? "text-blue-400" : ""}
                >
                  <button
                    onClick={() => setSelectedItem(item.name)}
                    className="flex items-center p-2 space-x-3 rounded-md w-full cursor-pointer"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-7 h-7 rounded-full"
                    />
                    <span>{item.name}</span>
                  </button>
                  {item.divider && <hr className="my-2 border-blue-300" />}
                </li>
              ))}
            </ul>
            <ul className="pt-2 pb-2 space-y-1 text-sm">
              <li className="">
                <button className="flex items-center p-2 space-x-3 rounded-md">
                  <img
                    src="/public/assets/icons/log out.png"
                    alt=""
                    className="w-7 h-7 rounded-full"
                  />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-3/4">
          {sidebarItems.map((item, index) => {
            if (item.name === selectedItem) {
              return (
                <div key={index} className="w-full">
                  {item.component}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
