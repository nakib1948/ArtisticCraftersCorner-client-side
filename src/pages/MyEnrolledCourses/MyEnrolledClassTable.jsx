import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faDollarSign } from "@fortawesome/free-solid-svg-icons";
const MyEnrolledClassTable = ({course}) => {
    return (
        <tr>
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
        <td>{course.enrolled} <FontAwesomeIcon icon={faUser} /></td>
       
      </tr>
    );
};

export default MyEnrolledClassTable;