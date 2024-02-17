"use client"
import Navbar from "@/app/components/Navbar";
import { useState } from 'react';

const Manage = () => {
  const [showModal, setShowModal] = useState(false);

    const handleAccept = () => {
        setShowModal(false);
    };

    const handleDecline = () => {
        setShowModal(false);
    };
  return (
    <div className="flex items-center gap-11 justify-center h-screen w-screen flex-container py-12">
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-10">
        <div className="bg-black w-[1200px] h-[130px] rounded-[15px] flex items-center px-20 gap-3">
          <div className="text-3xl font-medium text-primary">
            Manage Account
          </div>
          <div className="bg-white flex items-center w-[300px] h-[40px] rounded-xl px-4 gap-2 ms-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M19.875 21.625L12.875 14.625C12.25 15.125 11.5312 15.5208 10.7188 15.8125C9.90625 16.1042 9.04167 16.25 8.125 16.25C5.85417 16.25 3.9325 15.4633 2.36 13.89C0.7875 12.3167 0.000833333 10.395 0 8.125C0 5.85417 0.786667 3.9325 2.36 2.36C3.93333 0.7875 5.855 0.000833333 8.125 0C10.3958 0 12.3175 0.786667 13.89 2.36C15.4625 3.93333 16.2492 5.855 16.25 8.125C16.25 9.04167 16.1042 9.90625 15.8125 10.7188C15.5208 11.5312 15.125 12.25 14.625 12.875L21.6562 19.9062C21.8854 20.1354 22 20.4167 22 20.75C22 21.0833 21.875 21.375 21.625 21.625C21.3958 21.8542 21.1042 21.9688 20.75 21.9688C20.3958 21.9688 20.1042 21.8542 19.875 21.625ZM8.125 13.75C9.6875 13.75 11.0158 13.2029 12.11 12.1088C13.2042 11.0146 13.7508 9.68667 13.75 8.125C13.75 6.5625 13.2029 5.23417 12.1088 4.14C11.0146 3.04583 9.68667 2.49917 8.125 2.5C6.5625 2.5 5.23417 3.04708 4.14 4.14125C3.04583 5.23542 2.49917 6.56333 2.5 8.125C2.5 9.6875 3.04708 11.0158 4.14125 12.11C5.23542 13.2042 6.56333 13.7508 8.125 13.75Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              className="h-[40px] w-[270px] border-0 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 27 30"
                fill="none"
              >
                <path
                  d="M16.6685 15V28.1333C16.7352 28.6333 16.5685 29.1667 16.1852 29.5167C16.031 29.6712 15.8478 29.7937 15.6462 29.8774C15.4446 29.961 15.2285 30.0041 15.0102 30.0041C14.7919 30.0041 14.5758 29.961 14.3741 29.8774C14.1725 29.7937 13.9894 29.6712 13.8352 29.5167L10.4852 26.1667C10.3034 25.989 10.1652 25.7716 10.0813 25.5317C9.9975 25.2917 9.97029 25.0356 10.0018 24.7833V15H9.95185L0.351846 2.7C0.0811931 2.35255 -0.040931 1.9121 0.0121593 1.47488C0.0652495 1.03767 0.289238 0.639244 0.63518 0.366667C0.951846 0.133333 1.30185 0 1.66851 0H25.0018C25.3685 0 25.7185 0.133333 26.0352 0.366667C26.3811 0.639244 26.6051 1.03767 26.6582 1.47488C26.7113 1.9121 26.5892 2.35255 26.3185 2.7L16.7185 15H16.6685Z"
                  fill="#343434"
                />
              </svg>
            </div>
          </div>
          {/* <div className="bg-white h-[40px]  w-[40px] rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M20 35C16.1667 35 12.8261 33.7289 9.97833 31.1867C7.13056 28.6444 5.49889 25.4711 5.08333 21.6667H8.5C8.88889 24.5556 10.1739 26.9444 12.355 28.8333C14.5361 30.7222 17.0844 31.6667 20 31.6667C23.25 31.6667 26.0072 30.5344 28.2717 28.27C30.5361 26.0056 31.6678 23.2489 31.6667 20C31.6667 16.75 30.5344 13.9928 28.27 11.7283C26.0056 9.46389 23.2489 8.33222 20 8.33333C18.0833 8.33333 16.2917 8.77778 14.625 9.66667C12.9583 10.5556 11.5556 11.7778 10.4167 13.3333H15V16.6667H5V6.66667H8.33333V10.5833C9.75 8.80556 11.4794 7.43056 13.5217 6.45833C15.5639 5.48611 17.7233 5 20 5C22.0833 5 24.035 5.39611 25.855 6.18833C27.675 6.98056 29.2583 8.04944 30.605 9.395C31.9517 10.7428 33.0211 12.3261 33.8133 14.145C34.6056 15.9639 35.0011 17.9156 35 20C35 22.0833 34.6039 24.035 33.8117 25.855C33.0194 27.675 31.9506 29.2583 30.605 30.605C29.2572 31.9517 27.6739 33.0211 25.855 33.8133C24.0361 34.6056 22.0844 35.0011 20 35ZM24.6667 27L18.3333 20.6667V11.6667H21.6667V19.3333L27 24.6667L24.6667 27Z"
                fill="#343434"
              />
            </svg>
          </div> */}
        </div>
        <div className="bg-softWhite w-[1200px] h-[470px] rounded-[15px] relative p-12">
            <div className="grid grid-cols-5">
              <div className="text-lg ms-4">User ID</div>
              <div className="text-lg">Name</div>
              <div className="text-lg">Verification</div>
              <div className="text-lg">Active Status</div>
            </div>
            <div className="h-[350px] flex flex-col gap-3  overflow-auto ">
              <div className="grid grid-cols-5 bg-white py-4 rounded-lg items-center">
                <div className=" ms-4">R-000001</div>
                <div>Albert Punzalan</div>
                <div>Not Verified</div>
                <div>Trolling</div>
                <button className="w-[100px] bg-primary text-center py-2 rounded-lg" onClick={() => setShowModal(true)}>View</button>
              </div>
              {showModal && (
                <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative mx-auto mt-[100px] inset-x-0 top-0  p-4 w-full  max-w-2xl max-h-full">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Verify User
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShowModal(false)}>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <div className="flex gap-4 flex-col items-center justify-center p-10">
                                  <img
                                    className="w-[70px] h-[70px] rounded-full bg-black object-cover"
                                    src="/profile.jpg"
                                    alt=""
                                  />
                                  <div className="my-3">Charles Joshua Bayubuts</div>
                                  <div className="flex justify-center w-auto lg:w-[500px] gap-3 "> 
                                      <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-full text-center">bayubuts@example.com</div>
                                      <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-full text-center">0999999999</div>
                                  </div>
                                  <div className="w-auto lg:w-[500px] bg-[#f0f0f0] p-4 px-6 rounded-xl text-center"> 
                                     Verified User
                                  </div>
                                  <div className="w-auto lg:w-[500px] bg-[#f0f0f0] p-4 px-6 rounded-xl text-center"> 
                                     Client
                                  </div>
                                </div>
                                {/* Modal footer */}
                                <div className="justify-center flex items-center p-4 md:p-5 gap-3 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={handleAccept} type="button" className="text-black bg-[#00CCAA]/70 hover:[#00CCAA]/80 focus:ring-4 focus:outline-none focus:ring-[#00CCAA]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#00CCAA]/60 dark:hover:[#00CCAA]/70 dark:focus:ring-[#00CCAA]/80">Approve</button>
                                    <button onClick={handleAccept} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
