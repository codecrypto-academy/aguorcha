import { Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Home() {
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h3>Explorador de la Blockchain Ethereum</h3>

      <form onSubmit={handleSubmit(submitForm)} action="">
        <input {...register("data")} />
        <button className="btn btn-primary">GO</button>
      </form>

      <Outlet />
    </div>
  );
}
