import { ChangeEventHandler } from "react";

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export const Input = (props: InputProps) => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        placeholder="Amount"
        onChange={props.onChange}
        className={
          "bg-[#393E46]/50 p-4 w-1/3 rounded-md my-4" + props.className
        }
      />
      {/* <span className="border">USD</span> */}
    </>
  );
};
