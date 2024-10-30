import React from 'react';
import { useForm } from "react-hook-form";
import { Input , Button,Select} from '../components';
import { Link } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { candidateStatusOptions ,setterOptions,centerOptions} from '../data/dummy';


const AddCandidate = () => {
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
              <Input
                placeholder='اسم المرشح'
                type='text'
                name='name'
                label='اسم المرشح'
                className='w-full rounded-full'
                register={register("name", {
                  required: "الاسوم مطلوب",
                })}
                error={errors.name ? errors.name.message : ""}
              />            
              <Input
                placeholder='الشهره'
                type='text'
                name='nickname'
                label='اسم الشهره'
                className='w-full rounded-full'
                register={register("nickname", {
                  required:"اسم الشهره مطلوب!",
                })}
                error={errors.nickname ? errors.nickname.message : ""}
              />            
                    </div>           
                  <div className="flex gap-3">
              <Input
                placeholder='الحزب'
                type='text'
                name='branch'
                label='اسم الحزب'
                className='w-full rounded-full'
                register={register("branch", {
                  required: "الحزب مطلوب!",
                })}
                error={errors.branch ? errors.branch.message : ""}
              />            
              <Input
                placeholder='الرمز'
                type='text'
                name='logo'
                label='الرمز'
                className='w-full rounded-full'
                register={register("logo", {
                  required: "الرمز مطلوب!",
                })}
                error={errors.logo ? errors.logo.message : ""}
              />            
                    </div>           
                  <div className="flex gap-3">
                  <Select
        label="صفه المرشح"
        name="status"
        options={candidateStatusOptions}
        register={register("status", { required: "Please select a color" })}
        error={errors.status}
                      />
                  <Select
        label="اسم المجلس"
        name="type"
        options={setterOptions}
        register={register("type", { required: "Please select a color" })}
        error={errors.type}
                      />
                     
                  </div>         
                  <div className="flex gap-3">
                   <Input
                placeholder='السنه'
                type='text'
                name='year'
                label='سنه الأنتخاب'
                className='w-full rounded-full'
                register={register("year", {
                  required: "السنه مطلوب!",
                })}
                error={errors.year ? errors.year.message : ""}
              />  
                  <Select
        label="الدائره المرشح لها"
        name="center"
        options={centerOptions}
        register={register("center", { required: "Please select a color" })}
        error={errors.center}
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
                      <Link to='/candidates' className='w-full'>
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
export default AddCandidate;