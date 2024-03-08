"use client"
import Navbar from "@/app/components/Navbar";
import { useState, useEffect } from 'react';
import axios from "axios";
import Image from "next/image";

interface UnverifiedUser {
  _id: string;
  identification: {
    back: string | boolean;
    front: string | boolean;
    idType: string | boolean;
  };
  region: {
    code: string;
    name: string;
  };
  province: {
    code: string;
    name: string;
  };
  city: {
    code: string;
    name: string;
  };
  barangay: {
    code: string;
    name: string;
  };
  image: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  gender: string;
  location?: string;
  email: string;
  password: string;
  role: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
  banned: boolean;
  ratingPoints: number;
  verified: boolean;
  __v: number;
}


const Manage = () => {
  const host = "http://192.168.8.34:8082/";
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UnverifiedUser | null>(null);
  const [unverifiedData, setUnverifiedData] = useState<UnverifiedUser[]>([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);


  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get('http://192.168.8.34:8082/ap1/v1/auth/get-unverified');
        console.log(response.data);
        setUnverifiedData(response.data);
    
      } catch (error) {
        console.error('Error fetching reports data:', error);
        throw new Error('Error fetching reports data');
      }
    };

    getReports();
  }, []);



  const handleShowModal = (userData: UnverifiedUser) => {
    setSelectedUser(userData);
    setShowModal(true);
    console.log(selectedUser?.identification.front)
  };

  const handleDecline = () => {
    setShowModal(false);
  };

  const handleVerifyDecline = () => {
    setShowConfirmation(false);
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessage(false);
  };

  const handleVerify = async () => {
    try {
      if (!selectedUser) return;
  
      const userId = selectedUser._id;
      console.log(`THIS IS THE USER ID: ${userId}`)

      const response = await axios.post(`http://192.168.8.34:8082/ap1/v1/auth/verify-user`, { userId });
      
      // Update the report data if the user is banned successfully
      console.log("User verified successfully." + response.data);

      setShowModal(false);
      setShowConfirmation(false);
      setSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
      // Optionally, you can update the UI to reflect the user's ban status
    } catch (error) {
      if ((error as any).response && (error as any).response.status === 409) {
        setShowModal(false);
        setShowConfirmation(false);
        setAlreadyVerified(true);

        setTimeout(() => {
          setAlreadyVerified(false);
        }, 3000);

        console.log("User is already verified.");
        // Optionally, you can update the UI to reflect the user's ban status
      } else {
        // Handle other errors
        setShowModal(false);
        setShowConfirmation(false);
        setErrorMessage(true);

        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);

        console.log("Error verifying user:", (error as Error).message);
      }
    }
  };

  const handleAccept = async () => {
    setShowConfirmation(true);
  };

  return (
    
    <div className="flex items-center gap-11 justify-center h-screen w-screen flex-container py-12">
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-10">
        <div className="bg-black w-[1200px] h-[130px] rounded-[15px] flex items-center px-20 gap-3">
          <div className="text-3xl font-medium text-primary">
            Manage Accounts
          </div>
          {/* <div className="bg-white flex items-center w-[300px] h-[40px] rounded-xl px-4 gap-2 ms-auto">
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
          </div> */}
        </div>
        <div className="bg-softWhite w-[1200px] h-[470px] rounded-[15px] relative p-12">
            <div className="grid grid-cols-5">
              <div className="text-lg ms-4">Name</div>
              <div className="text-lg">Contact Number</div>
              <div className="text-lg">Email</div>
              <div className="text-lg">Verification</div>
            </div>
            <div className="h-[350px] flex flex-col gap-3  overflow-auto ">
              {unverifiedData.map((unverifiedItem, index) => (
                <div className="grid grid-cols-5 bg-white py-4 rounded-lg items-center" key={index}>
                  <div className="ms-4">{unverifiedItem.firstName} {unverifiedItem.lastName}</div>
                  <div>{unverifiedItem.contactNumber}</div>
                  <div>{unverifiedItem.email}</div>
                  <div>{unverifiedItem.verified ? "Verified" : "Not Verified"}</div>
                  <button className="w-[100px] bg-primary text-center py-2 rounded-lg" onClick={() => handleShowModal(unverifiedItem)}>View</button>
                </div>
              ))}
             {showModal && selectedUser && (
                <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-10 flex justify-center items-center">
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
                                  <Image
                                    className="w-[70px] h-[70px] rounded-full bg-black object-cover"
                                    src={`${host}${selectedUser.image}`}
                                    alt=""
                                    width={70}
                                    height={70}
                                  />
                                  <div className="my-3">{selectedUser.firstName} {selectedUser.lastName}</div>
                                  <div className="flex justify-center w-auto lg:w-[500px] gap-3 "> 
                                      <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-full text-center">{selectedUser.email}</div>
                                      <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-full text-center">{selectedUser.contactNumber}</div>
                                  </div>
                                  <div className="w-auto lg:w-[500px] bg-[#f0f0f0] p-4 px-6 rounded-xl text-center"> 
                                     National ID
                                  </div>
                                  <div className="flex align-center justify-center gap-3 my-2">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                    {selectedUser.identification.front !== false && selectedUser.identification.front !== null ? (
                                        <Image
                                          className="rounded-lg bg-red-500 h-[150px] w-[244px] object-cover"
                                          src={`${host}${selectedUser.identification.front}`}
                                          alt="Front"
                                          width={70}
                                          height={70}
                                        />
                                      ) : (
                                        <p className="rounded-lg bg-[#f0f0f0] h-[150px] w-[244px] flex items-center justify-center">No Image</p>
                                      )}

                                      <div>Front</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                    {selectedUser.identification.front !== false && selectedUser.identification.front !== null ? (
                                      <Image
                                        className="rounded-lg bg-red-500 h-[150px] w-[244px] object-cover"
                                        src={`${host}${selectedUser.identification.back}`}
                                        alt="Back"
                                        width={70}
                                        height={70}
                                      />
                                      ) : (
                                        <p className= "rounded-lg bg-[#f0f0f0] h-[150px] w-[244px] flex items-center justify-center ">No Image</p>
                                      )}
                                      <div>Back</div>
                                    </div>
                                 </div>
                                </div>
                                {/* Modal footer */}
                                <div className="justify-center flex items-center p-4 md:p-5 gap-3 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={handleAccept} type="button" className="text-black bg-[#00CCAA]/70 hover:[#00CCAA]/80 focus:ring-4 focus:outline-none focus:ring-[#00CCAA]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#00CCAA]/60 dark:hover:[#00CCAA]/70 dark:focus:ring-[#00CCAA]/80">Approve</button>
                                    <button onClick={handleDecline} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              )}
            </div>
        </div>
      </div>
      {showConfirmation && (
              <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-20 flex justify-center items-center">
                <div className="fixed inset-0 bg-black opacity-50 z-30"></div>
                <div className="relative bg-white rounded-lg p-8 max-w-md w-full z-40">
                  {/* Your modal content here */}
                  <p>Are you sure you want to verify this user?</p>
                  {/* Modal footer */}
                  <div className="justify-center flex items-center p-4 md:p-5 gap-3 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button onClick={handleVerify} type="button" className="text-black bg-[#00CCAA]/70 hover:[#00CCAA]/80 focus:ring-4 focus:outline-none focus:ring-[#00CCAA]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#00CCAA]/60 dark:hover:[#00CCAA]/70 dark:focus:ring-[#00CCAA]/80">Confirm</button>
                      <button onClick={handleVerifyDecline} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancel</button>
                  </div>
                </div>
              </div>
      )}
      {successMessage && (
        <div className="fixed top-0 flex justify-center z-50 mt-4">
          <div className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
            You have approved the request for verification 
            <button onClick={handleCloseSuccessMessage} className="ml-2 text-white font-bold focus:outline-none">&times;</button>
          </div>
        </div>
      )}
      {alreadyVerified && (
        <div className="fixed top-0 flex justify-center z-50 mt-4">
          <div className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md">
            This user has already been verified!
            <button onClick={handleCloseSuccessMessage} className="ml-2 text-white font-bold focus:outline-none">&times;</button>
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="fixed top-0 flex justify-center z-50 mt-4">
          <div className="bg-red-500 text-white py-4 px-8 rounded-md shadow-md">
            There seems to be an error!
            <button onClick={handleCloseSuccessMessage} className="ml-2 text-white font-bold focus:outline-none">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manage;