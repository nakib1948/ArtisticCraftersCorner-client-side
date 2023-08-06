import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faDollarSign } from "@fortawesome/free-solid-svg-icons";
const MyEnrolledClassTable = ({course}) => {
    return (
        <tr className="text-base">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={course.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{course.name}</td>
        <td>{course.instructor}</td>
        <td>{course.price}$</td>
        <td className='text-green-500 font-semibold'>Paid</td>
       
      </tr>
    );
};

export default MyEnrolledClassTable;