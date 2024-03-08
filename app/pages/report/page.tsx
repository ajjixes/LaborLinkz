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
  const host = "http://192.168.1.4:8082/";
  const [showModal, setShowModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [reportData, setReportData] = useState<Report[]>([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await axios.get('http://192.168.1.4:8082/ap1/v1/report/get-reports');
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

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReport(null);
  };

  const handleDecline = () => {
    setShowModal(false);
    // Implement your logic here
  };

  const handleAccept = async () => {
    try {
      if (!selectedReport) return;
  
      const userId = selectedReport.reportedUserId._id;
      console.log(`THIS IS THE USER ID: ${userId}`)

      const response = await axios.post(`http://192.168.1.4:8082/ap1/v1/auth/ban-user`, { userId });
      
      // Update the report data if the user is banned successfully
      console.log("User banned successfully." + response.data);
      // Optionally, you can update the UI to reflect the user's ban status
    } catch (error) {
      if ((error as any).response && (error as any).response.status === 409) {
        // Provide feedback to the user that the user is already banned
        console.log("User is already banned.");
        // Optionally, you can update the UI to reflect the user's ban status
      } else {
        // Handle other errors
        console.log("Error banning user:", (error as Error).message);
        throw new Error('Error banning user');
      }
    }
  };
  
  

  return (
    <div className="flex items-center gap-11 justify-center h-screen w-screen flex-container py-12">
      <Navbar />
      <div className="flex items-center justify-center flex-col gap-10">
        <div className="bg-black w-[1200px] h-[130px] rounded-[15px] flex items-center px-20 gap-3">
          <div className="text-3xl font-medium text-primary">
            Reported Accounts
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
            {/* <div>
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
            </div> */}
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
                <div className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center">
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
    </div>
  );
};

export default Manage;
