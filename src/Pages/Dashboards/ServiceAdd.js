// import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addServiceData from "../../redux/thunk/services/addServiceData";
const ServiceAdd = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const service = {
      title: data.title,
      brand: data.brand,
      status: data.status === "true" ? true : false,
      rating: data.rating,
      details: data.details,

    };
    console.log(service);
    dispatch(addServiceData(service));
  };

  return (

    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-gray-200'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Title
          </label>
          <input className='py-2 rounded-md' type='text' id='title' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input className='py-2 rounded-md' type="file" name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select className='py-2 rounded-md' name='brand' id='brand' {...register("brand")}>
            <option value='amd'>Food</option>
            <option value='intel'>beverage</option>
            <option value='intel'>logistics</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='rating'>
            Rating
          </label>
          <input className='py-2 rounded-md' type='text' name='rating' id='rating' {...register("rating")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='details'>
            Details
          </label>
          <input className='py-2 rounded-md' type='text' name='details' id='details' {...register("details")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className='px-4 py-3 btn btn-outline rounded-md font-semibold '
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default ServiceAdd;