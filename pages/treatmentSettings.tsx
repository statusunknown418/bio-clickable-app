import { NextPage } from "next";
import { useState } from "react";
import { MainLayout } from "../components/Layout/MainLayout";
import styles from "../styles/customRangeSlider.module.css";
import Image from "next/image";
import { BtnNext } from "../components/Common/BtnNext";
import { useRouter } from "next/dist/client/router";
import { BtnBack } from "../components/Common/BtnBack";
type Props = {};

const Treatment: NextPage<Props> = () => {
  const [slider, setSlider] = useState("0");
  const [frequency, setFrequency] = useState("0");
  const router = useRouter();
  return (
    <MainLayout extraClassnames="relative">
      <div
        className="absolute inset-0 rounded-xl overflow-hidden bg-transparent bg-no-repeat z-0"
        style={{ backgroundImage: "url('svg/blob-scene-haikei (8).svg')" }}
      >
        <BtnBack backUrl="/" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[55px] font-bold mt-20">Treatment</h1>
          <h2 className="text-[#BBBBBB] text-[17px]">
            Enter your desired treatment settings
          </h2>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center relative">
              <input
                className={`${styles.range} mt-2`}
                onChange={(e) => {
                  let value = e.target.value;
                  setSlider(value);
                  console.log(e.target.value);
                }}
                type="range"
                min={0}
                max={100}
              />
              <span className="text-[30px] font-black mr-32 -mt-10">
                {slider}%
              </span>
              <p className="absolute top-[230px] text-[25px] font-bold">
                Intensity
              </p>
            </div>
            <div className=" relative flex flex-col justify-center items-center my-48">
              <input
                className={`${styles.range} mt-2`}
                onChange={(e) => {
                  let value = e.target.value;
                  setFrequency(value);
                  console.log(e.target.value);
                }}
                type="range"
                min={0}
                max={100}
              />
              <span className="text-[30px] font-black mr-32 -mt-10">
                {frequency}hz
              </span>
              <p className="absolute top-[230px] text-[25px] font-bold">
                Frequency
              </p>

              {/* End of changes */}
              {/* <div
                style={{ backgroundImage: `url("/svg/Group 50.svg")` }}
                className="mt-20 w-[332px] bg-no-repeat h-[332px] "
              />
              <p className="pt-10 text-[25px] font-bold">Frequency</p> */}
            </div>
          </div>

          <BtnNext href={"/start"} />
        </div>
      </div>
    </MainLayout>
  );
};
export default Treatment;
