import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("269242a0-744a-4ec7-a8b2-00210cbc7f79");

  return (
    <Container>
      <div className="flex items-center justify-center pt-4 font-3xl font-bold">
        Welcome To LAZYSTORE
      </div>
        <Banner data={banner} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produk Unggulan" items={products} />
        </div>
    </Container>
  );
};

export default HomePage;
