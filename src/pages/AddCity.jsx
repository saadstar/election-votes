import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input, Button, Select} from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import {  setterOptions,statesOptions } from '../data/dummy';

const AddCity = () => {
  const { currentColor } = useStateContext();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitHandler = async (data) => {
    console.log(data);
  };
  return (
      <div className="m-2 md:m-4 mt-20 p-2 md:p-2 bg-white rounded-3xl p-10">          
          <form
            onSubmit={handleSubmit(submitHandler)}
            className=' w-[80%] pr-20 mt-5'
          >
              <div className='flex flex-col gap-10'>                                                    
                  <div className="flex gap-3">                 
                  <Select
        label="المحافظه"
        name="type"
        options={statesOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />                     
                  <Select
        label="الدائره"
        name="type"
        options={setterOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />
                  </div>                                
                  <div className="flex gap-3">                 
                  <Select
        label="القسم"
        name="type"
        options={setterOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />                     
                   <Input
                placeholder='اسم المدينه'
                type='text'
                name='allvotes'
                label='الشياخه او القريه'
                className='w-full rounded-full'
                register={register("allvotes", {
                  required: "السنه مطلوب!",
                })}
                error={errors.allvotes ? errors.allvotes.message : ""}
              />
                  </div>                                
                  <div className="flex gap-3 mt-3">
                      <Button
                color="white"
                bgColor={currentColor}
                text="أضافه"
                borderRadius="10px"
                          any='w-full'
              />
                      <Link to='/' className='w-full'>
                          <Button
                color="white"
                bgColor={"red"}
                text="الغاء"
                          borderRadius="10px"
                          any='w-full'
                      />
                          </Link>
                  </div>
            </div>
          </form>
    </div>
  )
}
export default AddCity;