import "./contact-us-form.scss";
import { usePostContactUs } from "@src/hooks/usePostContactForm";
import { SubmitPostContactParams } from "@src/types/components";
import { Form, Row } from "react-bootstrap";
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
    console.log(data)
    mutation.mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Form.Group>
          {errors.firstName && <span>First Name is required</span>}
          <Form.Control
            className={errors.firstName ? "error-input" : "form-input-field"}
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
        </Form.Group>

        <Form.Group>
          {errors.lastName && <span>Last Name is required</span>}
          <Form.Control
            type="text"
            className={errors.lastName ? "error-input" : "form-input-field"}
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
        </Form.Group>

        <Form.Group>
          {errors.email && <span>Email is required</span>}
          <Form.Control
            type="text"
            className={errors.email ? "error-input" : "form-input-field"}
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </Form.Group>

        <Form.Group>
          {errors.company && <span>Company Name is required</span>}
          <Form.Control
            type="text"
            className={errors.company ? "error-input" : "form-input-field"}
            placeholder="Company Name"
            {...register("company", { required: true })}
          />
        </Form.Group>

        <Form.Group>
          {errors.phone && <span>Contact Number is required</span>}
          <Form.Control
            type="text"
            className={errors.phone ? "error-input" : "form-input-field"}
            placeholder="Contact Number"
            {...register("phone", { required: true })}
          />
        </Form.Group>   

        <Form.Group>
          {errors.description && <span>Description is required</span>}
          <Form.Control
            as="textarea"
            rows={3}
            className={errors.description ? "error-input" : "form-input-field"}
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </Form.Group>

        <input type="submit" className="query-contact-btn"/>
      </Row>
    </Form>
  );
};