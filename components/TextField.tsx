import { MouseEventHandler } from "react";

const TextField = ({ onSpeakClick }: { onSpeakClick: MouseEventHandler }) => {
  return (
    <label className="relative block">
      <input
        className="h-[3.5rem] min-w-[50vw] rounded-full bg-gray-900 px-6 py-2 drop-shadow-md focus:outline-none"
        placeholder="Enter your questions here..."
        type="text"
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 fill-black"
          onClick={onSpeakClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
          />
        </svg>
      </span>
    </label>
  );
};

export default TextField;
