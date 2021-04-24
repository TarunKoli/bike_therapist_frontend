import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../styles/AuthStyles/AuthForm.module.css";

const Status = (props) => {
  const [status, setStatus] = useState(props.status);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
    console.log("id : ", e.target.id);
    //send status and customer id to the backend
    axios({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/booking-status?id=${e.target.id}`,
      method: "PATCH",
      data: {
        status: e.target.value,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.msg, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.msg);
      });
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={style.myToast}
      />
      <select
        name="status"
        id={props.id}
        value={status}
        onChange={handleStatus}
      >
        <option value="pending">pending</option>
        <option value="accepted">accepted</option>
        <option value="progress">progress</option>
        <option value="completed">completed</option>
      </select>
    </>
  );
};
export default Status;
