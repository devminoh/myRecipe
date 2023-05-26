import { useState, useCallback, Dispatch, SetStateAction } from "react";

function useInput<T>(initalValue: T)
 	: [T, (e?: React.ChangeEvent<HTMLInputElement>)=> void, Dispatch<SetStateAction<T>>]{
  const [value, setValue] = useState<typeof initalValue>(initalValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
