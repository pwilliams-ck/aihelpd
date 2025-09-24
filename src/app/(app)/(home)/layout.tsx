import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";

import { LucideConstruction } from "lucide-react";

import { AlertPopup } from "@/components/alert-popup";
import { Footer } from "@/modules/home/ui/components/footer";
import { Navbar } from "@/modules/home/ui/components/navbar";
import {
  SearchFilters,
  SearchFiltersLoading,
} from "@/modules/home/ui/components/search-filters";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersLoading />}>
          <SearchFilters />
        </Suspense>
      </HydrationBoundary>
      <div className="flex-1 bg-[#f4f4f0] dark:bg-input/30">
        <div className="inset-0 flex items-center justify-center z-10">
          <AlertPopup
            title="Heads up!"
            description="aihelpd's new console is currently in beta and is actively being worked on, please come back soon!"
            icon={<LucideConstruction className="h-6 w-6" />}
          />
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
