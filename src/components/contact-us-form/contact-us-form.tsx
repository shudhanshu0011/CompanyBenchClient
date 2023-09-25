import "./contact-us-form.scss";
import { usePostContactUs } from "@src/hooks/usePostContactForm";
import { SubmitPostContactParams } from "@src/types/components";
import { useForm, SubmitHandler } from "react-hook-form";

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitPostContactParams>()

  const mutation = usePostContactUs(
    () => {
      reset();
    }
  );

  const onSubmit: SubmitHandler<SubmitPostContactParams> = (data: SubmitPostContactParams) => {
    mutation.mutate(data);
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.firstName && <span>First Name is required</span>}
          <input placeholder="First Name" {...register("firstName", { required: true })} className={errors.firstName ? "error-input" : "form-input-field"}></input>
        </div>
        <div>
          {errors.lastName && <span>Last Name is required</span>}
          <input placeholder="Last Name" {...register("lastName", { required: true })} className={errors.lastName ? "error-input" : "form-input-field"}></input>                          
        </div>
        <div>
          {errors.email && <span>Email is required</span>}
          <input placeholder="Email" {...register("email", { required: true })} className={errors.email ? "error-input" : "form-input-field"}></input>                        
        </div>
        <div>
          {errors.company && <span>Company Name is required</span>}
          <input placeholder="Company Name" {...register("company", { required: true })} className={errors.company ? "error-input" : "form-input-field"}></input>                        
        </div>
        <div>
          {errors.phone && <span>Contact Number is required</span>}
          <input placeholder="Contact Number" {...register("phone", { required: true })} className={errors.phone ? "error-input" : "form-input-field"}></input>                        
        </div>
        <div>
          {errors.description && <span>Description is required</span>}
          <textarea rows={7} placeholder="Description" {...register("description", { required: false })} className={errors.description ? "error-input" : "form-input-field"}></textarea>
        </div>
          <input type="submit" className="query-contact-btn"/>
      </form>
  );
};