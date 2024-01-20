import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import { useEffect } from 'react';

const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      input: '',
    },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <form onSubmit={handleSubmit(console.log)}>
        <Input
          {...register('input', {
            required: '필수 값 입니다.',
            maxLength: {
              value: 5,
              message: '최대값을 5 입니다',
            },
          })}
          placeholder="제목 작성하기"
        />
      </form>
    </>
  );
};

export default MainPage;
