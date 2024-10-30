import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input, Button, Select} from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { statesOptions,candidateStatusOptions, setterOptions, daysOptions } from '../data/dummy';

const AddResult = () => {
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
        name="state"
        options={statesOptions}
        register={register("status", { required: "Please select a color" })}
        error={errors.status}
                      />
                  <Select
        label="الدائره الانتخابيه"
        name="type"
        options={setterOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />
                     
                  </div>         
                  <div className="flex gap-3">
                  <Select
        label="لجنه المرشح"
        name="status"
        options={candidateStatusOptions}
        register={register("status", { required: "Please select a color" })}
        error={errors.status}
                      />
                  <Select
        label="اليوم الانتخابي"
        name="days"
        options={daysOptions}
        register={register("days", { required: "Please select a color" })}
        error={errors.days}
                      />
                     
                  </div>         
                  <div className="flex gap-3">
                   <Input
                placeholder=''
                type='text'
                name='allvotes'
                label='عدد الاصوات'
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
                      <Link to='/results' className='w-full'>
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
export default AddResult;