import { FC } from 'react';
import { Button, InputField } from './components';

export const TailwindCSS: FC = () => {
  return (
    <div className="relative m-8 max-w-screen-sm w-full border rounded-lg border-gray-300 shadow-xl">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-auto bg-white outline-none focus:outline-none">
        <div className="flex items-start justify-center p-5 rounded-t ">
          <h2 className="text-xl font=semibold">
            Request for a sample of goods
          </h2>
        </div>
        <div className="relative px-6 pb-5 flex-auto">
          <div className="p-3">
            <div className="w-full flex flex-col gap-3 sm:flex-row mb-4 border-grey-500 border-b pb-4">
              <div className="w-full flex flex-col gap-3 w-full">
                <InputField label="First name" />
                <InputField label="Last name" />
              </div>
              <div className="w-full flex flex-col gap-3 w-full">
                <div className="w-full flex flex-col gap-3 sm:flex-row">
                  <InputField label="Country" />
                  <InputField label="ZIP code" />
                </div>
                <InputField label="City" />
                <InputField label="Address" />
              </div>
            </div>
            <div className="flex align-center pb-4">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-base font-medium cursor-pointer"
              >
                I agree with the
                <a
                  href="/"
                  className="text-blue-600 hover:underline text-base ml-1"
                >
                  Terms and conditions
                </a>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button title="Cancel" variant="cancel" />
              <Button title="Send request" variant="accept" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
