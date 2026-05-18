"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import TemplatesHeader from "./TemplatesHeader";
import TemplatesToolbar, {
  type SortBy,
  type TypeFilter,
} from "./TemplatesToolbar";
import TemplatesSearchBar, {
  type CategoryFilter,
} from "./TemplatesSearchBar";
import TemplateCard from "./TemplateCard";
import Pagination from "./Pagination";
import NameWebsiteModal from "./NameWebsiteModal";
import { templates } from "./data";
import { type Template } from "./types";

const PAGE_SIZE = 9;

export default function TemplatesView() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [type, setType] = useState<TypeFilter>("all");
  const [sort, setSort] = useState<SortBy>("newest");
  const [page, setPage] = useState(1);
  const [picked, setPicked] = useState<Template | null>(null);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = templates.filter((t) => {
      if (category !== "All" && t.category !== category) return false;
      if (type !== "all" && t.type !== type) return false;
      if (query && !t.name.toLowerCase().includes(query)) return false;
      return true;
    });

    const sorted = [...list];
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "popular")
      sorted.sort((a, b) => b.popularity - a.popularity);
    else sorted.sort((a, b) => b.added.localeCompare(a.added));

    return sorted;
  }, [search, category, type, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(startIdx, startIdx + PAGE_SIZE);
  const shownStart = filtered.length === 0 ? 0 : startIdx + 1;
  const shownEnd = startIdx + pageItems.length;

  function resetPage<T>(setter: (value: T) => void) {
    return (value: T) => {
      setter(value);
      setPage(1);
    };
  }

  function handleCreate() {
    setPicked(null);
    router.push("/websites");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 flex flex-col gap-6">
      <TemplatesHeader />

      <TemplatesToolbar
        shownStart={shownStart}
        shownEnd={shownEnd}
        total={filtered.length}
        type={type}
        onTypeChange={resetPage(setType)}
        sort={sort}
        onSortChange={resetPage(setSort)}
      />

      <TemplatesSearchBar
        search={search}
        onSearchChange={resetPage(setSearch)}
        category={category}
        onCategoryChange={resetPage(setCategory)}
      />

      {pageItems.length === 0 ? (
        <div className="py-20 text-center text-sm text-gray-400">
          No templates match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageItems.map((t) => (
            <TemplateCard key={t.id} template={t} onUse={setPicked} />
          ))}
        </div>
      )}

      <Pagination
        page={safePage}
        totalPages={totalPages}
        onChange={setPage}
      />

      <NameWebsiteModal
        template={picked}
        onClose={() => setPicked(null)}
        onCreate={handleCreate}
      />
    </div>
  );
}
