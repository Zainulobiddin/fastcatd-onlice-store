import girls from "#/girls.svg";
import img1 from "#/img1.svg";
import person1 from "#/peson1.svg";
import person2 from "#/person2.svg";
import person3 from "#/person3.svg";
import IconTwitter from "#/IconTwitter.svg";
import IconLinkedin from "#/IconLinkedin.svg";
import IconInstagram from "#/IconInstagram.svg";
import free1 from "#/free.svg";
import free2 from "#/free2.svg";
import free3 from "#/free3.svg";
import Free from "@/components/free/free";
export default function About() {
  return (
    <div>
      <p className="my-6 px-4 text-gray-400">
        Home / <b className="text-black">About</b>
      </p>

      <section className="flex flex-col gap-5 lg:flex-row items-center">
        <div className="flex flex-col px-5 gap-5 lg:gap-10 ">
          <h1 className="font-semibold text-[28px] tracking-[6%] lg:text-[54px] lg:leading-[64px]   ">
            Our Story
          </h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. <br /> <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={girls} alt="" />
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-4 justify-between my-10">
        <ComponentProductsAbout
          src={img1}
          num={"10.5k "}
          desc={"Sallers active our site"}
        />
        <ComponentProductsAbout
          src={img1}
          num={"33k "}
          desc={"Mopnthly Produduct Sale"}
        />
        <ComponentProductsAbout
          src={img1}
          num={"45.5k "}
          desc={"Customer active in our site"}
        />
        <ComponentProductsAbout
          src={img1}
          num={"25k "}
          desc={"Anual gross sale in our site"}
        />
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-4 justify-between my-10 px-5">
        <Persons src={person1} name={'Tom Cruise'} profession={'Founder & Chairman'} />
        <Persons src={person2} name={'Emma Watson'} profession={'Managing Director'} />
        <Persons src={person3} name={'Will Smith'} profession={'Product Designer'} />
      </section>

  <section className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 py-[60px] ">
        <Free src={free1} title={"FREE AND FAST DELIVERY"}>
          Free delivery for all orders over $140
        </Free>
        <Free src={free2} title={"24/7 CUSTOMER SERVICE"}>
          Friendly 24/7 customer support
        </Free>
        <Free src={free3} title={"MONEY BACK GUARANTEE"}>
          We reurn money within 30 days
        </Free>
      </section>

    </div>
  );
}

export function ComponentProductsAbout({ src, num, desc }) {
  return (
    <div className="flex flex-col gap-6 border hover:bg-[#DB4444] hover:text-white border-[#0000004D] rounded-[4px] items-center text-center py-8 px-[50px] ">
      <img src={src} alt="" />
      <div className="flex flex-col gap-3">
        <h4 className="font-bold text-[32px] leading-[30px] ">{num}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}


export function Persons({src, name, profession}) {
  return (
    <div className="flex flex-col gap-8 items-start ">
      <img className="bg-[#F5F5F5] px-[67px] pt-[39px] " src={src} alt="" />

      <div className="flex flex-col gap-2">
        <h3 className="font-normal text-[32px] leading-[30px] ">{name}</h3>
        <p>{profession}</p>
        <div className="flex gap-4">
          <img src={IconTwitter} alt="" />
          <img src={IconInstagram} alt="" />
          <img src={IconLinkedin} alt="" />
        </div>
      </div>
    </div>
  )
}