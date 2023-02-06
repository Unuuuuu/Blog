import { getCategoryData } from "@src/utils";
import type { CollectionEntry } from "astro:content";

interface CategorySelectProps {
  categories: CollectionEntry<"posts">["data"]["category"][];
}

const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const { categories } = props;

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
        {categories.map((category) => (
          <option value={category} key={category}>
            {getCategoryData(category).displayName}
          </option>
        ))}
      </select>
      <span className="absolute right-4 top-[50%] translate-y-[-50%] border-t-4 border-r-4 border-l-4 border-fg-default border-l-transparent border-r-transparent opacity-80 pointer-events-none" />
    </div>
  );
};

export default CategorySelect;
