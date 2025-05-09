import { useRouterStuff } from "@dub/ui";
import { FilterBars } from "@dub/ui/icons";
import { cn } from "@dub/utils";
import Link from "next/link";

export function FilterButtonTableRow({
  set,
  className,
}: {
  set: Record<string, any>;
  className?: string;
}) {
  const { queryParams } = useRouterStuff();

  return (
    <div
      className={cn(
        "absolute right-1 top-0 flex h-full shrink-0 translate-x-3 items-center justify-center p-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100",
        className,
      )}
    >
      <Link
        href={
          queryParams({
            set,
            del: "page",
            getNewPath: true,
          }) as string
        }
        className="block rounded-md border border-transparent bg-white p-0.5 text-neutral-600 transition-colors hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950"
      >
        <span className="sr-only">Filter</span>
        <FilterBars className="size-3.5" />
      </Link>
    </div>
  );
}
