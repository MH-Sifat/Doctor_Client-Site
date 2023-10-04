import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/users')
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:3000/users/admin/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Succesfull')
                    refetch();
                }
            })
    }

    const handleDeleteUser = id => {
        const process = window.confirm('Do you want to delete this User?')
        if (process) {
            fetch(`http://localhost:3000/users/admin/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('User Deleted')
                        refetch()
                    }
                })
        }

    }
    return (
        <div>
            <h1 className='text-3xl mb-5'> See All Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#E6E6E6]'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-100'>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' ? <button onClick={() => { handleMakeAdmin(user._id) }} className="btn btn-sm btn-active btn-neutral">Admin</button> : 'admin'}</td>
                                <td><button onClick={() => { handleDeleteUser(user._id) }} className="btn btn-sm btn-active btn-neutral">Remove User</button> </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;