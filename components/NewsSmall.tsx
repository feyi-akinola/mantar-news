import { ClockIcon } from "lucide-react";

export default function NewsSmall({ item, isLast }: { item: any, isLast: boolean }) {
  return (
    <div className="flex-col-center_">
      <div className="flex-between_ gap-4 mb-4 w-full">
        <div className="flex-col-start_ gap-1">
          <div className="flex-between_ w-full gap-12">
            <div className="flex-center_ bg-blue-100 rounded-full px-3 py-1">
              <p className="text-xs text-blue-500 font-bold">{item.category}</p>
            </div>

            <div className="flex-center_ gap-1">
              <p className="text-xs font-regular text-gray-400">{item.time}</p>
              <ClockIcon className="w-4 h-4 stroke-gray-400" />
            </div>
          </div>

          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>

        <div className="w-28 h-28 shrink-0 rounded-xl bg-gray-200" />
      </div>

    {
      !isLast && (
        <div className="w-[80%] h-1 my-2 rounded-full bg-gray-100" />
      )
    }
    </div>
  );
};