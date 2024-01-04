import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="rounded-[15px] bg-white shadow-lg h-[400px] w-[4rem] border">
      <div className="w-[4rem] mt-3">
        <Image
          className="mx-auto mb-[5rem] "
          src="/logo.png"
          width={70}
          height={70}
          alt="Logo"
        />
      </div>
      <div className="flex flex-col items-center">
        {/* <svg
          className="my-3 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M0 2.67857C0 1.19978 1.19978 0 2.67857 0H8.03571C9.51451 0 10.7143 1.19978 10.7143 2.67857V8.03571C10.7143 9.51451 9.51451 10.7143 8.03571 10.7143H2.67857C1.19978 10.7143 0 9.51451 0 8.03571V2.67857ZM3.57143 3.57143V7.14286H7.14286V3.57143H3.57143ZM0 16.9643C0 15.4855 1.19978 14.2857 2.67857 14.2857H8.03571C9.51451 14.2857 10.7143 15.4855 10.7143 16.9643V22.3214C10.7143 23.8002 9.51451 25 8.03571 25H2.67857C1.19978 25 0 23.8002 0 22.3214V16.9643ZM3.57143 17.8571V21.4286H7.14286V17.8571H3.57143ZM16.9643 0H22.3214C23.8002 0 25 1.19978 25 2.67857V8.03571C25 9.51451 23.8002 10.7143 22.3214 10.7143H16.9643C15.4855 10.7143 14.2857 9.51451 14.2857 8.03571V2.67857C14.2857 1.19978 15.4855 0 16.9643 0ZM21.4286 3.57143H17.8571V7.14286H21.4286V3.57143ZM14.2857 15.1786C14.2857 14.6875 14.6875 14.2857 15.1786 14.2857H18.75C19.2411 14.2857 19.6429 14.6875 19.6429 15.1786C19.6429 15.6696 20.0446 16.0714 20.5357 16.0714H22.3214C22.8125 16.0714 23.2143 15.6696 23.2143 15.1786C23.2143 14.6875 23.6161 14.2857 24.1071 14.2857C24.5982 14.2857 25 14.6875 25 15.1786V20.5357C25 21.0268 24.5982 21.4286 24.1071 21.4286H20.5357C20.0446 21.4286 19.6429 21.0268 19.6429 20.5357C19.6429 20.0446 19.2411 19.6429 18.75 19.6429C18.2589 19.6429 17.8571 20.0446 17.8571 20.5357V24.1071C17.8571 24.5982 17.4554 25 16.9643 25H15.1786C14.6875 25 14.2857 24.5982 14.2857 24.1071V15.1786ZM20.5357 25C20.2989 25 20.0718 24.9059 19.9044 24.7385C19.7369 24.571 19.6429 24.3439 19.6429 24.1071C19.6429 23.8703 19.7369 23.6432 19.9044 23.4758C20.0718 23.3084 20.2989 23.2143 20.5357 23.2143C20.7725 23.2143 20.9996 23.3084 21.1671 23.4758C21.3345 23.6432 21.4286 23.8703 21.4286 24.1071C21.4286 24.3439 21.3345 24.571 21.1671 24.7385C20.9996 24.9059 20.7725 25 20.5357 25ZM24.1071 25C23.8703 25 23.6432 24.9059 23.4758 24.7385C23.3084 24.571 23.2143 24.3439 23.2143 24.1071C23.2143 23.8703 23.3084 23.6432 23.4758 23.4758C23.6432 23.3084 23.8703 23.2143 24.1071 23.2143C24.3439 23.2143 24.571 23.3084 24.7385 23.4758C24.9059 23.6432 25 23.8703 25 24.1071C25 24.3439 24.9059 24.571 24.7385 24.7385C24.571 24.9059 24.3439 25 24.1071 25Z"
            fill="black"
          />
        </svg>
        <svg
          className="my-3 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            d="M29.5553 27.2896H8.88867V15.8686C8.88867 10.4623 13.5154 6.0791 19.222 6.0791C24.9286 6.0791 29.5553 10.4623 29.5553 15.8686V27.2896Z"
            fill="black"
            stroke="black"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M5.44444 33H33M2 9.34211L4.58333 10.1579M9.75 2L10.6111 4.44737M7.16667 6.89474L4.58333 4.44737"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className="my-3 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
        >
          <path
            d="M13.5538 14.1016C13.2098 14.0859 12.8659 14.0703 12.5064 14.0703C8.72318 14.0703 5.19014 15.1177 2.17298 16.9155C0.79728 17.7284 0 19.2604 0 20.8706V25.0134H14.4761C13.3719 23.4383 12.7049 21.5987 12.5429 19.6819C12.3808 17.7652 12.7296 15.8397 13.5538 14.1016Z"
            fill="black"
          />
          <path
            d="M12.5071 12.5064C15.9606 12.5064 18.7603 9.70671 18.7603 6.25318C18.7603 2.79964 15.9606 0 12.5071 0C9.05355 0 6.25391 2.79964 6.25391 6.25318C6.25391 9.70671 9.05355 12.5064 12.5071 12.5064Z"
            fill="black"
          />
          <path
            d="M29.3115 18.7598C29.3115 18.4159 29.2646 18.1032 29.2177 17.775L30.9999 16.196L29.4366 13.4915L27.1698 14.2575C26.6695 13.8355 26.1067 13.5072 25.4814 13.2727L25.0124 10.9434H21.8859L21.4169 13.2727C20.7915 13.5072 20.2288 13.8355 19.7285 14.2575L17.4617 13.4915L15.8984 16.196L17.6806 17.775C17.6337 18.1032 17.5868 18.4159 17.5868 18.7598C17.5868 19.1038 17.6337 19.4164 17.6806 19.7447L15.8984 21.3236L17.4617 24.0281L19.7285 23.2621C20.2288 23.6842 20.7915 24.0125 21.4169 24.247L21.8859 26.5763H25.0124L25.4814 24.247C26.1067 24.0125 26.6695 23.6842 27.1698 23.2621L29.4366 24.0281L30.9999 21.3236L29.2177 19.7447C29.2646 19.4164 29.3115 19.1038 29.3115 18.7598ZM23.4491 21.8864C21.7295 21.8864 20.3226 20.4795 20.3226 18.7598C20.3226 17.0402 21.7295 15.6332 23.4491 15.6332C25.1688 15.6332 26.5757 17.0402 26.5757 18.7598C26.5757 20.4795 25.1688 21.8864 23.4491 21.8864Z"
            fill="black"
          />
        </svg>
        <svg
          className="mt-[13rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M2.77778 25C2.01389 25 1.35972 24.7278 0.81528 24.1833C0.270835 23.6389 -0.000923568 22.9852 2.35805e-06 22.2222V2.77778C2.35805e-06 2.01389 0.272225 1.35972 0.816669 0.81528C1.36111 0.270835 2.01482 -0.000923568 2.77778 2.35805e-06H12.5V2.77778H2.77778V22.2222H12.5V25H2.77778ZM18.0556 19.4444L16.1458 17.4306L19.6875 13.8889H8.33333V11.1111H19.6875L16.1458 7.56945L18.0556 5.55556L25 12.5L18.0556 19.4444Z"
            fill="black"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default Navbar;