import { CardProps } from "@yext/search-ui-react";
import Faq from "../../types/faqs";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FAQ = ({ result }: CardProps<Faq>) => {
  const { name } = result;
  const { answer, c_primaryCTA, c_businessUnit } = result.rawData;
  return (
    <div className="border p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between px-4 py-2 items-center rounded-lg ">
              <div className="text-lg">{name}</div>
              <ChevronDownIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-8 w-8 text-[#218a3c]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-800">
              <div className="flex flex-col gap-2">
                <div>{answer}</div>
                {c_primaryCTA && (
                  <div className="mt-2 flex items-center gap-x-4 ">
                    <a
                      href={c_primaryCTA?.link}
                      className="relative border z-10  bg-gray-50 px-3 py-1.5 font-medium text-[#218a3c] hover:bg-gray-100 text-base"
                    >
                      {c_primaryCTA?.label}
                    </a>
                  </div>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FAQ;
