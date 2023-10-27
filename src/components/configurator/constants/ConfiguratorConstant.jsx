import { Image } from "@mui/icons-material";
import { Switch } from "@mui/material";

export const buttons = [
  { name: "Design", label: "Design" },
  { name: "Moment", label: "Moment" },
  { name: "Customize", label: "Customize" },
  { name: "Size", label: "Size" },
];

export const items = [
  { name: "Name" },
  { name: "Name" },
  { name: "Name" },
  { name: "Name" },
  { name: "Name" },
];

export const accordionDataDesign = [
  {
    id: "panel1",
    title: "Birthday",
    icon: "../../../../public/assets/icons/birthday.png",
    content: (
      <>
        {/* show only 4 small cards  */}
        <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-40 overflow-y-auto ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="../../../../public/assets/icons/circle.png"
                alt="..."
                className="h-8 w-8"
              />
              <span className="text-center text-blue-200 font-sm">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "panel2",
    title: "For Loved One",
    icon: "../../../../public/assets/icons/heart.svg",
    content: (
      <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-auto overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src="../../../../public/assets/icons/circle.png"
              alt="..."
              className="h-8 w-8"
            />
            <span className="text-center text-blue-200 font-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "panel3",
    title: "For Parents",
    icon: "../../../../public/assets/icons/parents.png",
    content: (
      <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src="../../../../public/assets/icons/circle.png"
              alt="..."
              className="h-8 w-8"
            />
            <span className="text-center text-blue-200 font-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "panel4",
    title: "Anniversary & Wedding",
    icon: "../../../../public/assets/icons/wedding.png",
    content: (
      <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src="../../../../public/assets/icons/circle.png"
              alt="..."
              className="h-8 w-8"
            />
            <span className="text-center text-blue-200 font-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "panel5",
    title: "Family",
    icon: "../../../../public/assets/icons/family.png",
    content: (
      <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src="../../../../public/assets/icons/circle.png"
              alt="..."
              className="h-8 w-8"
            />
            <span className="text-center text-blue-200 font-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];
export const accordionDataMoment = [
  {
    id: "panel1",
    title: "Upload Photo",
    content: (
      <>
        {/* show only 4 small cards  */}
        <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto">
          <div className="flex flex-col">
            <label
              htmlFor="file-input"
              className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer"
            >
              <Image />
              <span className="text-center text-blue-400 text-xs">
                Add Photo
              </span>
            </label>
            <input id="file-input" type="file" style={{ display: "none" }} />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="file-input"
              className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer"
            >
              <Image />
              <span className="text-center text-blue-400 text-xs">
                Add Photo
              </span>
            </label>
            <input id="file-input" type="file" style={{ display: "none" }} />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "panel2",
    title: "Moment 1",
    content: (
      <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-44 overflow-y-auto ">
        <input
          type="text"
          placeholder="Location"
          className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
        />
        <input
          type="Date"
          placeholder="Date"
          className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
        />
        <div className="flex flex-col gap-2">
          {/* toggle button  */}

          <div className="flex items-center justify-between">
            <p>
              <span className="text-black text-xs ">Use default time</span>
            </p>
            <Switch defaultChecked className="border p-0.5 rounded-3xl" />
          </div>
          <input
            type="time"
            placeholder="Date"
            className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
          />
        </div>
      </div>
    ),
  },
  {
    id: "panel3",
    title: "Moment 2",
    content: (
      <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-44 overflow-y-auto ">
        <input
          type="text"
          placeholder="Location"
          className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
        />
        <input
          type="Date"
          placeholder="Date"
          className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
        />
        <div className="flex flex-col gap-2">
          {/* toggle button  */}

          <div className="flex items-center justify-between">
            <p>
              <span className="text-black text-xs ">Use default time</span>
            </p>
            <Switch defaultChecked className="border p-0.5 rounded-3xl" />
          </div>
          <input
            type="time"
            placeholder="Date"
            className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
          />
        </div>
      </div>
    ),
  },
];
export const accordionDataCustomize = [
  {
    id: "panel1",
    title: "Text",
    content: (
      <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-28 overflow-y-auto ">
        {/* add two textarea fields */}
        <textarea
          placeholder="Main text"
          className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
        />
        <textarea
          placeholder="2nd text"
          className="border w-full rounded-xl text-sm p-1 px-2 border-blue-100 "
        />
      </div>
    ),
  },
  {
    id: "panel2",
    title: "Font style",
    content: (
      <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-28 overflow-y-auto ">
        <div className="flex w-full justify-around px-2">
          <button className=" rounded-lg py-1.5 px-5 bg-gradient-new text-white text-xs font-thin shadow-xl">
            Main text
          </button>
          <button className=" rounded-lg py-1.5 px-5  text-black text-xs font-thin shadow-xl">
            2nd text
          </button>
          <button className=" rounded-lg py-1.5 px-5  text-black text-xs font-thin shadow-xl">
            3rd text
          </button>
        </div>
        <div className="flex w-full justify-around px-10 py-2">
          <button className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-sans">
            Font 1
          </button>
          <button className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-inter">
            Font 2
          </button>
          <button className=" rounded-lg py-1.5 px-2  text-black text-xs font-bold font-serif">
            Font 3
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "panel3",
    title: "Starmap",
    content: (
      <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-72 overflow-y-auto ">
        <div className="flex w-full space-x-2">
          {/* add 5 radio button and when button is selected give it button color  */}
          <div className="flex flex-col gap-2 pl-10">
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                id="Constellation"
                name="Constellation"
                value="Constellation"
                className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
              />
              <label htmlFor="Constellation">Constellation</label>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                id="Constellation Names"
                name="Constellation Names"
                value="Constellation Names"
                className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
              />
              <label htmlFor="Constellation Names">Constellation Names</label>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                id="Planet Names"
                name="Planet Names"
                value="Planet Names"
                className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
              />
              <label htmlFor="Planet Names">Planet Names</label>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                id="Star Name"
                name="Star Name"
                value="Star Name"
                className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
              />
              <label htmlFor="Star Name">Star Name</label>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                id="Graticule Line"
                name="Graticule Line"
                value="Graticule Line"
                className="text-blue-400 rounded-full appearance-none border border-gray-300 checked:bg-blue-400 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 h-4 w-4"
              />
              <label htmlFor="Graticule Line">Graticule Line</label>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mt-2">
          <button className=" rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-500 shadow-xl">
            Background Color
          </button>
          <button className=" rounded-lg py-2 px-5  text-black text-xs font-500 shadow-xl">
            Star Color
          </button>
          <button className=" rounded-lg py-2 px-5  text-black text-xs font-500 shadow-xl">
            Constilation Color
          </button>
        </div>
        <div className="flex w-full space-x-2">
          <button className=" rounded-lg p-5 px-10 bg-white border border-blue-100 text-white text-xs font-thin shadow-xl"></button>
          <button className=" rounded-lg p-5 px-10 bg-slate-700  text-black text-xs font-thin shadow-xl"></button>
          <button className=" rounded-lg p-5 px-10 bg-slate-300  text-black text-xs font-thin shadow-xl"></button>
        </div>
      </div>
    ),
  },
  {
    id: "panel4",
    title: "Streetmap",
    content: (
      <div className="grid grid-cols-4 gap-2 py-2 w-full max-h-auto h-36 overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src="../../../../public/assets/icons/circle.png"
              alt="..."
              className="h-8 w-8"
            />
            <span className="text-center text-blue-200 font-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "panel5",
    title: "Color",
    content: (
      <div className="flex flex-col gap-3 py-2 w-full max-h-auto h-44 overflow-y-auto ">
        <div className="flex w-full space-x-2 flex-wrap px-2 gap-2 my-2">
          <button
            className="rounded-lg py-2 px-5 bg-gradient-new text-white text-xs font-thin shadow-xl mx-2"
            style={{ width: "100px" }}
          >
            Fill Color 1
          </button>
          <button
            className="rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"
            style={{ width: "100px" }}
          >
            Fill Color 2
          </button>
          <button
            className="rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"
            style={{ width: "100px" }}
          >
            Fill Color 3
          </button>
          <button
            className="rounded-lg py-2 px-5 text-black text-xs font-thin shadow-xl mx-2"
            style={{ width: "100px" }}
          >
            Fill Color 4
          </button>
        </div>
        <div className="flex w-full space-x-2">
          <button className=" rounded-lg p-5 px-10 bg-white border border-blue-100 text-white text-xs font-thin shadow-xl"></button>
          <button className=" rounded-lg p-5 px-10 bg-slate-700  text-black text-xs font-thin shadow-xl"></button>
          <button className=" rounded-lg p-5 px-10 bg-slate-300  text-black text-xs font-thin shadow-xl"></button>
        </div>
      </div>
    ),
  },
];
