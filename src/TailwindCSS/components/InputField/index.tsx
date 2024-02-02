import { FC } from 'react';

type Props = {
  label?: string;
};

export const InputField: FC<Props> = (props) => {
  const { label } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <div className="relative mt-1 w-full">
          <div className="relative w-full">
            <input
              type="text"
              className="block w-full px-3 pb-2 pt-2 text-base text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-1 hover:border-gray-500 hover:border peer"
              placeholder=""
            />
            <label className="absolute pointer-events-none text-base text-gray-500 duration-300 transform top-1 -translate-y-4 scale-75 z-10 origin-[0] px-2 peer-focus:px-2 bg-white peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:translate-x rtl:peer-focus:translate-x-1/6 rtl:peer-focus:left-auto start-1">
              {label}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
