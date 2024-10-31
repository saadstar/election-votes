import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input, Button, Select} from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { statesOptions,centerOptions,districtOptions,schools} from '../data/dummy';

const AddNumber = () => {
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
        options={centerOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />
                  </div>                                
                  <div className="flex gap-3">                 
                  <Select
        label="القسم"
        name="type"
        options={districtOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />                     
                  <Select
        label="المدرسه"
        name="type"
        options={schools}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />                                       
                  </div>                                
                  <div className="flex gap-3">                                                                        
                   <Input
                placeholder='رقم اللجنه'
                type='text'
                name='allvotes'
                label='اللجنه'
                className='w-full rounded-full'
                register={register("allvotes", {
                  required: "السنه مطلوب!",
                })}
                error={errors.allvotes ? errors.allvotes.message : ""}
            />
              <Input
                نplaceholder='عدد الناخبين'
                type='text'
                name='allvotes'
                label=' عدد الناخبين للجنه'
                className='w-full rounded-full'
                register={register("allvotes", {
                  required: "العدد مطلوب!",
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
                      <Link to='/elc-center' className='w-full'>
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
export default AddNumber;