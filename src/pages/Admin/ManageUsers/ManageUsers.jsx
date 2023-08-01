import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data:users=[], isLoading, error,refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axiosSecure.get('/users')
          return res.data;
        },
      });
      if (isLoading) {
        return  <Loader/>
      
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

      const handleMakeAdmin=user=>{
          const role='admin'
          axiosSecure.patch(`/users/role/${user._id}`,{role})
          .then(res=>{
            if(res.data.modifiedCount)
            {
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title:`${user.name} is an Admin Now!!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          })
      }
      const handleMakeInstructor=user=>{
        const role='instructor'
        axiosSecure.patch(`/users/role/${user._id}`,{role})
        .then(res=>{
          if(res.data.modifiedCount)
          {
              refetch()
              Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title:`${user.name} is an Admin Now!!`,
                  showConfirmButton: false,
                  timer: 1500
                })
          }
        })
    }

      console.log(users)

    return (
        <div className="w-full">
            <HeaderTitle title="Manage Users"></HeaderTitle>
             <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={()=>handleMakeInstructor(user)} disabled={user.role=='instructor'}
                                    className="btn btn-ghost bg-orange-600  text-white">instructor</button> 
                                    <button  onClick={()=>handleMakeAdmin(user)} disabled={user.role=='admin'}  className="btn btn-ghost bg-orange-600 ml-2  text-white">admin</button> 
                                    </td>
                                <td><button  className="btn btn-ghost bg-red-600  text-white"></button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;