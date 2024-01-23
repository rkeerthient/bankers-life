import { CardProps } from "@yext/search-ui-react";
import { FaFileAlt } from "react-icons/fa";

const File = (props: CardProps<any>) => {
  const { result } = props;
  const { name: _name, segment } = result;
  const { c_file } = result.rawData;
  const { url, name, size, mimeType } = c_file;
  console.log(JSON.stringify(result));

  return (
    <div className="border rounded-md flex flex-col gap-2 m-4">
      <div className="font-semibold p-4 leading-6 text-gray-900 group-hover:text-gray-600 flex flex-col gap-4">
        <div>{_name}</div>
        <div className="text-sm text-gray-500">{segment.text}</div>
        <div className="flex text-sm items-center">
          <FaFileAlt />
          <a href={url} className="underline text-[#8bb0cd]">
            {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default File;
