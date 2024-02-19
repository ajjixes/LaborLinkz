"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const currentDate = new Date();
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = monthNames[monthIndex];
  const formattedDate = `${monthName} ${day}, ${year}`;
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalPost, setTotalPost] = useState(null);

  const fetchTotalUsers = async () => {
    try {
      // Make a GET request to the endpoint
      const response = await axios.get('http://192.168.8.37:8082/ap1/v1/auth/total-users'); // Assuming the backend is running on the same server
  
      // Extract total users count from the response data
      const totalUsers = response.data.totalUsers;
      
      // Return the total number of users
      setTotalUsers(totalUsers);
    } catch (error) {
      // Handle errors
      console.error('Error fetching total number of users:', error);
      throw new Error('Error fetching total number of users');
    }
  };

  const fetchTotalPost = async () => {
    try {
      // Make a GET request to the endpoint
      const response = await axios.get('http://192.168.8.37:8082/ap1/v1/post/total-post'); // Assuming the backend is running on the same server
  
      // Extract total users count from the response data
      const totalPost = response.data.totalPosts;
      
      // Return the total number of users
      setTotalPost(totalPost);
    } catch (error) {
      // Handle errors
      console.error('Error fetching total number of users:', error);
      throw new Error('Error fetching total number of users');
    }
  };

  useEffect(() => {
    // Call fetchTotalUsers when component mounts
    fetchTotalUsers();
    fetchTotalPost();
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div className="flex items-center gap-11 justify-center h-screen w-screen flex-container py-12">
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        <div className="bg-softWhite w-[1200px] h-[130px] rounded-[15px] mb-4 flex items-center px-20">
          <div className="flex items-center">
            <div className="">
              <img
                className="w-[70px] h-[70px] rounded-full bg-black object-cover"
                src="/profile.jpg"
                alt=""
              />
            </div>
            <div className="ms-2">
              <div className="text-[22px] font-bold">Charles Joshua Lucero</div>
              <small className="text-[18px] font-medium text-black">
                Administrator
              </small>
            </div>
          </div>
          <div className="ms-auto flex bg-white py-3 px-5 rounded-md mx-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="ms-2">{formattedDate}</div>
          </div>
          <div className="flex bg-white py-3 px-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="grid items-center  grid-cols-3 gap-4 bg-softWhite w-[1200px] h-[200px] rounded-[15px] mb-4">
          <div className="flex gap-2 justify-center">
            <div className="bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_244_136)">
                  <path
                    d="M15.9111 15.3778C18.3111 15.3778 20.1778 13.4223 20.1778 11.0223C20.1778 8.62228 18.2222 6.75562 15.8222 6.75562C13.4222 6.75562 11.5555 8.71117 11.5555 11.0223C11.5555 13.4223 13.5111 15.3778 15.9111 15.3778ZM15.8222 8.53339C15.9111 8.53339 15.9111 8.53339 15.8222 8.53339C17.2444 8.53339 18.4 9.68895 18.4 11.1112C18.4 12.5334 17.2444 13.6001 15.8222 13.6001C14.4 13.6001 13.3333 12.4445 13.3333 11.1112C13.3333 9.68895 14.4889 8.53339 15.8222 8.53339Z"
                    fill="#0A0909"
                  />
                  <path
                    d="M29.0666 14.8444C27.3778 13.3333 25.1555 12.5333 22.8444 12.6222H22.1333C21.9555 13.3333 21.6889 13.9555 21.3333 14.4888C21.8666 14.3999 22.3111 14.3999 22.8444 14.3999C24.5333 14.3111 26.2222 14.8444 27.5555 15.8222V22.2222H29.3333V15.1111L29.0666 14.8444Z"
                    fill="#0A0909"
                  />
                  <path
                    d="M20.8 6.93338C21.2444 5.86671 22.4889 5.33338 23.6444 5.77782C24.7111 6.22227 25.2444 7.46671 24.8 8.62226C24.4444 9.42227 23.6444 9.9556 22.8444 9.9556C22.6667 9.9556 22.4 9.9556 22.2222 9.86671C22.3111 10.3112 22.3111 10.7556 22.3111 11.1112V11.6445C22.4889 11.6445 22.6667 11.7334 22.8444 11.7334C25.0667 11.7334 26.8444 9.9556 26.8444 7.82227C26.8444 5.60004 25.0667 3.82227 22.9333 3.82227C21.5111 3.82227 20.2667 4.53338 19.5555 5.77782C20 6.04449 20.4444 6.40004 20.8 6.93338Z"
                    fill="#0A0909"
                  />
                  <path
                    d="M10.6667 14.5778C10.3111 14.0445 10.0445 13.4223 9.86669 12.7112H9.15558C6.84447 12.6223 4.62224 13.4223 2.93335 14.8445L2.66669 15.1112V22.2223H4.44446V15.8223C5.86669 14.8445 7.46669 14.3112 9.15558 14.4001C9.68891 14.4001 10.2222 14.4889 10.6667 14.5778Z"
                    fill="#0A0909"
                  />
                  <path
                    d="M9.15555 11.6445C9.33332 11.6445 9.5111 11.6445 9.68888 11.5556V11.0223C9.68888 10.5778 9.68888 10.1334 9.77777 9.77781C9.59999 9.8667 9.33332 9.8667 9.15555 9.8667C7.99999 9.8667 7.02221 8.88892 7.02221 7.73337C7.02221 6.57781 7.99999 5.60003 9.15555 5.60003C10.0444 5.60003 10.8444 6.13337 11.2 6.93337C11.5555 6.48892 12.0889 6.04448 12.5333 5.68892C11.3778 3.82226 8.97777 3.20003 7.1111 4.35559C5.24444 5.51114 4.62221 7.91114 5.77777 9.77781C6.48888 10.9334 7.73332 11.6445 9.15555 11.6445Z"
                    fill="#0A0909"
                  />
                  <path
                    d="M23.2 20.1778L23.0222 19.9112C21.2445 17.9556 18.7556 16.8 16.0889 16.8889C13.4222 16.8 10.8445 17.9556 9.06669 19.9112L8.88892 20.1778V26.9334C8.88892 27.7334 9.51114 28.4445 10.4 28.4445H21.7778C22.5778 28.4445 23.2889 27.7334 23.2889 26.9334V20.1778H23.2ZM21.4222 26.6667H10.6667V20.8C12.0889 19.3778 14.0445 18.6667 16.0889 18.6667C18.0445 18.5778 20 19.3778 21.4222 20.8V26.6667Z"
                    fill="#0A0909"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_244_136">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary text-center">{totalUsers}</h1>
              <p className="font-medium">Overall users</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
              >
                <path
                  d="M10.8864 12.12C11.3168 11.1161 11.9293 10.212 12.6889 9.45934C13.4485 8.70672 14.3403 8.12032 15.3135 7.73364C16.2866 7.34697 17.322 7.16758 18.3605 7.20573C19.3989 7.24388 20.4201 7.49882 21.3658 7.956C22.3115 8.41286 23.1632 9.06303 23.8722 9.86937C24.5813 10.6757 25.1337 11.6224 25.4979 12.6554C25.8622 13.6884 26.0312 14.7875 25.9953 15.8898C25.9593 16.9922 25.7192 18.0762 25.2885 19.08C24.6617 20.5489 23.6488 21.7945 22.3714 22.6672C21.0941 23.5399 19.6065 24.0027 18.0874 24C15.0352 24 12.2429 22.128 10.9316 19.2H0V16.8C0.0678278 15.432 0.949589 14.316 2.64528 13.416C4.34098 12.516 6.46625 12.048 9.04371 12C9.68807 12 10.2985 12.06 10.8864 12.12ZM9.04371 0C10.3098 0.036 11.3725 0.504 12.2203 1.404C13.0682 2.304 13.4864 3.432 13.4864 4.8C13.4864 6.168 13.0682 7.296 12.2203 8.196C11.3725 9.096 10.3098 9.54 9.04371 9.54C7.77759 9.54 6.71495 9.096 5.86711 8.196C5.01926 7.296 4.60099 6.168 4.60099 4.8C4.60099 3.432 5.01926 2.304 5.86711 1.404C6.71495 0.504 7.77759 0.036 9.04371 0ZM18.0874 21.6C19.5865 21.6 21.0242 20.9678 22.0842 19.8426C23.1442 18.7174 23.7397 17.1913 23.7397 15.6C23.7397 14.0087 23.1442 12.4826 22.0842 11.3574C21.0242 10.2321 19.5865 9.6 18.0874 9.6C16.5883 9.6 15.1506 10.2321 14.0906 11.3574C13.0306 12.4826 12.4351 14.0087 12.4351 15.6C12.4351 17.1913 13.0306 18.7174 14.0906 19.8426C15.1506 20.9678 16.5883 21.6 18.0874 21.6ZM16.957 12H18.6527V15.384L21.411 17.076L20.5631 18.636L16.957 16.428V12Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary text-center">0</h1>
              <p className="font-medium">Pending Verification</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="bg-white flex items-center justify-center w-[60px] h-[60px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM9 2.25C10.485 2.25 11.835 2.7225 12.9375 3.51L3.51 12.9375C2.7225 11.835 2.25 10.485 2.25 9C2.25 5.265 5.265 2.25 9 2.25ZM14.49 5.0625C15.2775 6.165 15.75 7.515 15.75 9C15.75 12.735 12.735 15.75 9 15.75C7.515 15.75 6.165 15.2775 5.0625 14.49L14.49 5.0625Z"
                  fill="#343434"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">100,249</h1>
              <p className="font-medium">Banned Accounts</p>
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap">
          <div className=" text-center p-7 justify-center w-[389.33px] h-[200px] rounded-[15px] bg-softWhite me-4">
              <div className="font-medium text-3xl mb-6">Analytics</div>
              <div className="text-primary font-bold text-2xl text-center">0</div>
              <div className="font-medium text-center">Total Number of <br /> Website Visits</div>
          </div>
          {/* <div className=" text-center p-7 justify-center w-[389.33px] h-[200px] rounded-[15px] bg-softWhite me-4">
              <div className="font-medium text-3xl mb-6">Worker Status</div>
              <div className="text-primary font-bold text-2xl">100,249</div>
              <div className="font-medium text-center">No. of workers<br /> on job</div>
          </div> */}
          <div className=" text-center p-7 justify-center w-[389.33px] h-[200px] rounded-[15px] bg-softWhite">
              <div className="font-medium text-3xl mb-6">Job Listings</div>
              <div className="text-primary font-bold text-2xl">{totalPost}</div>
              <div className="font-medium text-center">No. of active jobs<br /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
