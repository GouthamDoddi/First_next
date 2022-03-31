/* eslint-disable no-shadow */
import Link from 'next/link';

export default function Home () {
  return (
    <div>
      <h1 className="text-3xl font-bold m-5">
        Welcome to my first nextjs app.
      </h1>
      <div>
        <p className="m-5 font-medium text-2xl">Here you can add a product and vew all products.</p>
        <div className="m-5">
          <button className="btn-primary mx-1"><Link href="/products/add">Add a product</Link></button>
          <button className="btn-primary mx-1 ml-10"><Link href="/products/vew">View all products</Link></button>
        </div>
      </div>
    </div>
  );
}
