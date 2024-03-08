"use client"
import Navbar from "@/app/components/Navbar";
import { useState, useEffect} from 'react';
import axios from "axios";
import Image from "next/image";

interface Data {
  id: number;
  imageFront: string;
  imageBack: string;
  firstName: string;
  contactNumber: string;
  email: string;
  violation: string;
  description: string;
  profilePic: string;
}

interface Report {
  _id: string;
  reportedUserId: {
    identification: {
      back: string;
      front: string;
      idType: string;
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
    ratingPoints: number;
    verified: boolean;
    banned: boolean;
    archived: boolean;
    _id: string;
    image: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    gender: string;
    location: string;
    email: string;
    password: string;
    role: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  violation: string;
  description: string;
  reportedBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



const data = [
  {
    id: 1,
    imageFront: "",
    imageBack: "",
    name: "Albert Punzalan",
    contactNumber: "09234567891",
    email: "Albert@gmail.com",
    violation: "Trolling",
    description:"This user doesnt pay minimum wage",
    profilePic:""
  },
  {
    id: 2,
    imageFront: "",
    imageBack: "",
    name: "Aaron Ramos",
    contactNumber: "09234567891",
    email: "Aaron@gmail.com",
    violation: "Fake User",
    description:"Fake User",
    profilePic:""
  },
  {
    id: 3,
    imageFront: "",
    imageBack: "",
    name: "Remoh Bayubuts",
    contactNumber: "09982785865",
    email: "Remoh@gmail.com",
    violation: "Trolling",
    description:"This person is just trolling me",
    profilePic:""
  },
]

const Manage = () => {
  const host = "http://192.168.8.34:8082/";
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [reportData, setReportData] = useState<Report[]>([]);
  const [successMessage, setSuccessMessage] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get('http://192.168.8.34:8082/ap1/v1/report/get-reports');
        console.log(response.data.reports);
        setReportData(response.data.reports);
    
      } catch (error) {
        console.error('Error fetching reports data:', error);
        throw new Error('Error fetching reports data');
      }
    };

    getReports();
  }, []);

  const handleShowModal = (report: Report) => {
    setSelectedReport(report);
    setShowModal(true);
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
      if (!selectedReport) return;
  
      const userId = selectedReport.reportedUserId._id;
      console.log(`THIS IS THE USER ID: ${userId}`)

      const response = await axios.post(`http://192.168.8.34:8082/ap1/v1/auth/ban-user`, { userId });
      
      // Update the report data if the user is banned successfully
      console.log("User banned successfully." + response.data);
      // Optionally, you can update the UI to reflect the user's ban status
      setShowModal(false);
      setShowConfirmation(false);
      setSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } catch (error) {
      if ((error as any).response && (error as any).response.status === 409) {
        // Provide feedback to the user that the user is already banned
        console.log("User is already banned.");
        setShowModal(false);
        setShowConfirmation(false);
        setAlreadyVerified(true);

        setTimeout(() => {
          setAlreadyVerified(false);
        }, 3000);
        // Optionally, you can update the UI to reflect the user's ban status
      } else {
        // Handle other errors
        console.log("Error banning user:", (error as Error).message);
        setShowModal(false);
        setShowConfirmation(false);
        setErrorMessage(true);

        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
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
            Reported Accounts
          </div>
        </div>
        <div className="bg-softWhite w-[1200px] h-[470px] rounded-[15px] relative p-12">
            <div className="grid grid-cols-5">
              <div className="text-lg ms-4">Name</div>
              <div className="text-lg">Contact Number</div>
              <div className="text-lg">Email</div>
              <div className="text-lg">Violation</div>
            </div>
            <div className="h-[350px] flex flex-col gap-3  overflow-auto ">
              {reportData && reportData.map((reportItem, index) => (
                <div className="grid grid-cols-5 bg-white py-4 rounded-lg items-center" key={index}>
                  <div className="ms-4">{reportItem.reportedUserId.firstName}  {reportItem.reportedUserId.lastName}</div>
                  <div>{reportItem.reportedUserId.contactNumber}</div>
                  <div>{reportItem.reportedUserId.email}</div>
                  <div>{reportItem.violation}</div>
                  <button className="w-[100px] bg-primary text-center py-2 rounded-lg" onClick={() => handleShowModal(reportItem)}>View</button>
                </div>
              ))}
              {showModal && selectedReport && (
                <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-10 flex justify-center items-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                    <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative mx-auto mt-[100px] inset-x-0 top-0  p-4 w-full  max-w-2xl max-h-full">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Reported Account
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
                                    src={`${host}${selectedReport.reportedUserId.image}`}
                                    alt=""
                                    width={70}
                                    height={70}
                                  />
                                  <div className="my-3">{selectedReport.reportedUserId.firstName}  {selectedReport.reportedUserId.lastName}</div>
                                  <div className="flex justify-center w-auto lg:w-[500px] gap-3 "> 
                                      <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-full text-center">{selectedReport.reportedUserId.email}</div>
                                      <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-full text-center">{selectedReport.reportedUserId.contactNumber}</div>
                                  </div>
                                  <div className="flex align-center justify-center gap-3 my-2">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                       <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-[500px] text-center">{selectedReport.violation}</div>
                                       <div className="bg-[#f0f0f0] p-4 px-6 rounded-xl w-[500px] h-[200px] text-center">{selectedReport.description}</div>
                                    </div>
                                   
                                 </div>
                                  {/* <div className="w-auto lg:w-[500px] bg-[#f0f0f0] p-4 px-6 rounded-xl text-center"> 
                                     Client
                                  </div> */}
                                </div>
                                {/* Modal footer */}
                                <div className="justify-center flex items-center p-4 md:p-5 gap-3 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button onClick={handleDecline} type="button" className="text-black bg-[#f0f0f0]/70 hover:[#00CCAA]/80 focus:ring-4 focus:outline-none focus:ring-[#00CCAA]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#f0f0f0]/60 dark:hover:[#f0f0f0]/70 dark:focus:ring-[#f0f0f0]/80">Cancel</button>
                                    <button onClick={handleAccept} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Ban</button>
                                    {/* <button onClick={handleAccept} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Archive</button> */}
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
              <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-30 flex justify-center items-center">
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                <div className="relative bg-white rounded-lg p-8 max-w-md w-full z-50">
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
            This user has already banned 
            <button onClick={handleCloseSuccessMessage} className="ml-2 text-white font-bold focus:outline-none">&times;</button>
          </div>
        </div>
      )}
      {alreadyVerified && (
        <div className="fixed top-0 flex justify-center z-50 mt-4">
          <div className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md">
            This user has already banned!
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
