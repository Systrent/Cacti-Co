import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { InputButton } from "./InputButton";

// TODO: Continue class video w15d1 (2h 26min)

export const NewCactusForm = () => {
  const {
	register,
	handleSubmit,
	watch,
	formState: { errors },
  } = useForm();

  const submit = handleSubmit((data) => {
    console.log("HANDLE SUBMIT");
    console.log(data);
  });
  return (
    <div
      className="h-screen w-full bg-[#99ffe2]"
      css={css`
        background-image:
        radial-gradient(at 87% 55%, hsla(161,75%,60%,0.49) 0px, transparent 50%),
        radial-gradient(at 65% 21%, hsla(108,77%,71%,0.5) 0px, transparent 50%),
        radial-gradient(at 33% 90%, hsla(175,87%,62%,0.75) 0px, transparent 50%),
        radial-gradient(at 41% 0%, hsla(184,77%,66%,0.78) 0px, transparent 50%),
        radial-gradient(at 33% 53%, hsla(0,100%,98%,0.75) 0px, transparent 50%),
        radial-gradient(at 64% 70%, hsla(240,59%,70%,0.61) 0px, transparent 50%);
      `}
    >
      <div
        className="bg-black/25 h-screen w-full flex flex-col justify-center items-center gap-8"
      >
        <div
            className="flex flex-col"
        >
            <label className="text-base">Name</label>
            <input
                type="text"
                className="w-96 h-8 p-3 border-2 rounded-lg"
                placeholder="Astrophytum Asterias V Type, etc."
                {...register("name")}
            />
        </div>
        <div
            className="flex flex-col"
        >
            <label className="text-base">Description</label>
            <input
                type="text"
                className="w-96 h-8 p-3 border-2 rounded-lg"
                placeholder="Spiny, Fast growth, etc."
                {...register("description")}
            />
        </div>
        <InputButton onClick={submit}>Create product</InputButton>
      </div>
    </div>
  );
};
