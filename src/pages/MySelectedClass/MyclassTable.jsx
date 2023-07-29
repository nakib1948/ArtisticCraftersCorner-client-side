import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyclassTable = ({classes,id,refetch}) => {

    const {_id,image,name,instructor,availableSeats,price,description,enrolled,email}=classes
    
    const [axiosSecure]=useAxiosSecure()
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
          title: "Warning!",
          text: "Are you sure you want to delete this course?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#B91C1C",
          cancelButtonColor: "#B85EE6",
          confirmButtonText: "Confirm delete",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log('hello')
            axiosSecure.delete(`/selectedclasses/${_id}`)
            .then(res=>{
                if(res.data.deletedCount>0)
                {
                    refetch();
                    Swal.fire('Course Deleted!!!')
                }
            })
          }
        });
      };
    return (
        <tr>
        <td className="font-bold">{id + 1}</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{instructor}</td>
        <td>{availableSeats}</td>
        <td>{price} $  </td>
        <td>{enrolled}</td>
        <th>
          <Link to='/dashboard/payment'
            className="btn bg-deepred lg:btn-sm mr-4 py-2 text-white"
            
          >
           
            Payment
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-600 lg:btn-sm py-2 text-white"
          >
            Delete
          </button>

         
        </th>
      </tr>
    );
};

export default MyclassTable;