import React, { useEffect, useState } from "react";
import { orgByUser } from "../axios/axios";
import DropMenu from "./Shared/DropMenu";
import { ToastContainer, toast } from "react-toastify";
import DeleteModal from "./Modals/DeleteModal";

const MyOrganisation = () => {
  const [orgs, setOrgs] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [dtoggle, setdToggle] = useState(false);
  useEffect(
    () =>
      async function getOrg() {
        try {
          const res = await orgByUser();
          setOrgs(res.data.org);
          console.log(res.data.org);
        } catch (err) {
          err.response.data.errors
            ? toast.error(err.response.data.errors[0].msg)
            : toast.error(err.response.data.error);
        }
      },
    [toggle]
  );

  return (
    <>
      <ToastContainer theme="colored" autoClose={3000} />
      <div className="relative overflow-x-auto w-11/12 mx-10">
        <h1 className="text-3xl text-center my-5">MY ORGANIZATION</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {/* {orgs[0].name} */}Organisations Name
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          {orgs?.length > 0
            ? orgs.map((org) => (
                <tbody>
                  <DeleteModal id={org._id} />
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {org.name}
                    </th>
                    <td className="px-6 py-4">{org.website}</td>
                    <td className="px-6 py-4">{org.phoneNumber}</td>
                    <td className="px-6 py-4">{org.address}</td>
                    <td className="px-6 py-4 ">
                      <DropMenu setdToggle={setdToggle} setToggle={setToggle} />
                    </td>
                  </tr>
                </tbody>
              ))
            : "NO ORGS"}
        </table>
      </div>
    </>
  );
};

export default MyOrganisation;
