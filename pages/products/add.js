/* eslint-disable no-magic-numbers */
/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import qs from 'qs';

import Input from '../../components/inputs/input';
import CurrencyInput from '../../components/inputs/currencyInput';
import ImageDropBox from '../../components/inputs/imageDropBox';

export default function Add () {
  const [ acknowledgement, setAcknowledgement ] = useState(false);

  useEffect(() => {
    if (acknowledgement) {
      setTimeout(() => {
        setAcknowledgement(false);
      }, 3000);
      console.log('acknowledgement');
    }
  }, [ acknowledgement ]);

  const addProduct = async event => {
    event.preventDefault();


    // make a urlencoded post request to localhost:3001
    const data = {
      name: event.target.name.value,
      price: Number(event.target.price.value),
      currency: event.target.currency.value,
      image: event.target['file-upload'].files[0].name,
    };

    const response = await fetch('http://localhost:3001/add_product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(data),
    });

    console.log(response.status);
    console.log(data);

    const success = response.status === 200;

    setAcknowledgement(success);
    console.log(success);

    return success;
  };

  return (
    <div className="bg-slate-700">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
        </div>
        <div className="col-span-1 inline-block">
          <h1 className="font-semibold
         text-6xl font-mono underline mt-5 text-white col-span-4">Add a</h1>
          <p className="ml-6 font-semibold underline
         text-8xl font-mono text-white col-span-4">Product</p>
        </div>
        <div className="col-span-1">
        </div>
      </div>
      <div>
        <form className="w-full max-w-lg mx-auto mt-10" onSubmit={addProduct}>
          <Input lable="Product Name" placeholder="Product name" name="name" />
          <CurrencyInput lable="Price" placeholder="0.00" name="price" />
          <ImageDropBox lable="Image" />
          <button className="btn-primary mx-1 inline-block mt-6" type="submit">Add Product</button>
        </form>
      </div>
      {acknowledgement &&
          <div className="bg-green-500 text-white text-center p-2">
              Product added successfully!
          </div>
      }
    </div>
  );
}
