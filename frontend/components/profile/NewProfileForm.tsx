import { css } from "@emotion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createProfile } from "../../lib/profile.repo";
import { InputButton } from "../admin/InputButton";

// TODO: Continue class video w15d1 (2h 26min)

export const NewProfileForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async () => {
    console.log("HANDLE SUBMIT");
    console.log(firstName,
      lastName,
      email,
      address,
      contact);
    await createProfile({
      auth0Id: 'github|58349789',
      firstName,
      lastName,
      email,
      address,
      contact,
      favoriteFamilies: ["WACA", "POPO", "FOFO"],
    });
  };

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
          <label className="text-base">First name</label>
          <input
            type="text"
            className="w-96 h-8 p-3 border-2 rounded-lg"
            placeholder=""
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div
          className="flex flex-col"
        >
          <label className="text-base">Last name</label>
          <input
            type="text"
            className="w-96 h-8 p-3 border-2 rounded-lg"
            placeholder=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div
          className="flex flex-col"
        >
          <label className="text-base">Email</label>
          <input
            type="text"
            className="w-96 h-8 p-3 border-2 rounded-lg"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className="flex flex-col"
        >
          <label className="text-base">Address</label>
          <input
            type="text"
            className="w-96 h-8 p-3 border-2 rounded-lg"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div
          className="flex flex-col"
        >
          <label className="text-base">Contact</label>
          <input
            type="text"
            className="w-96 h-8 p-3 border-2 rounded-lg"
            placeholder=""
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <InputButton onClick={handleSubmit}>Save data</InputButton>
      </div>
    </div>
  );
};
