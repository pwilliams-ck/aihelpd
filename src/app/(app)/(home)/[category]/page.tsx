import { caller } from "@/trpc/server";

interface Props {
  params: Promise<{
    category: string;
    products: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { category } = await params;

  const products = await caller.produts.getMany();

  return (
    <div>
      Category: {category}
      <br />
      Product: {JSON.stringify(products)}
    </div>
  );
};

export default Page;
