import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  return (
    <div>
      <Button
        variant="elevated"
        className={cn(
          "h-11 px-4 bg-transparent border-transparent rounded-full hover:border-primary dark:border-transparent dark:bg-transparent dark:hover:border-primary",
          isActive && !isNavigationHovered && "border-primary",
        )}
      >
        {category.name}
      </Button>
    </div>
  );
};
