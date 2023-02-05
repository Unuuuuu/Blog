import { getCategoryData } from "@src/utils";
import { CollectionEntry, getCollection } from "astro:content";
import { useEffect, useState } from "react";

const CategorySelect = () => {
  const [options, setOptions] = useState<
    CollectionEntry<"posts">["data"]["category"][]
  >([]);

  useEffect(() => {
    const setInitialOptions = async () => {
      const posts = await getCollection("posts");
      const categories = [...new Set(posts.map((post) => post.data.category))];
      setOptions(categories);
    };

    setInitialOptions();
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const origin = window.location.origin;

    if (event.target.value === "all") {
      window.location.href = origin;
      return;
    }

    window.location.href = `${origin}/categories/${event.target.value}`;
  };

  return (
    <div className="w-fit bg-bg-default border border-border-default relative rounded-md">
      <select
        className="w-[96px] appearance-none bg-transparent outline-none py-1 pl-4 pr-8 text-sm font-medium cursor-pointer"
        value=""
        onChange={handleChange}
      >
        <option value="" disabled>
          카테고리
        </option>
        <option value="all">All</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {getCategoryData(option).displayName}
          </option>
        ))}
      </select>
      <span className="absolute right-4 top-[50%] translate-y-[-50%] border-t-4 border-r-4 border-l-4 border-fg-default border-l-transparent border-r-transparent opacity-80 pointer-events-none" />
    </div>
  );
};

export default CategorySelect;
