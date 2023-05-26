<<<<<<< HEAD
import { useState, useCallback, Dispatch, SetStateAction } from "react";

function useInput<T>(initalValue: T)
 	: [T, (e?: React.ChangeEvent<HTMLInputElement>)=> void, Dispatch<SetStateAction<T>>]{
  const [value, setValue] = useState<typeof initalValue>(initalValue);
=======
import { useState, useCallback } from "react";

export default (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
>>>>>>> 2ba4eb7efdd106695123f78e6b01fa5b100e69f3
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
<<<<<<< HEAD
};

export default useInput;
=======
};
>>>>>>> 2ba4eb7efdd106695123f78e6b01fa5b100e69f3
