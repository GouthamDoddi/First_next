/* eslint-disable no-shadow */
import Image from 'next/image';

export default function Example (props) {
  const { products } = props;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) =>
            <a key={index} href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  src={`/images/${product.image}`}
                  alt={`/images/${product.image}`}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>)}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps () {
  const response = await fetch('http://localhost:3001/get_all_products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const products = await response.json();

  console.log(products);

  return {
    props: {
      products,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
}

