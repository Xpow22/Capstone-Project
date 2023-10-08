import * as yup from "yup";

export const LoginAuthBuyer = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      "Emails must contain symbols @"
    ),
  password: yup.string().required("Password is required"),
});

export const RegisterAuthBuyer = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .required(`Email is required`)
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      "Emails must contain symbols @"
    ),
  password: yup.string().required("Password is required"),
});

export const ProfilBuyer = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
      "Emails must contain symbols @"
    ),
  password: yup.string().required("Password is required"),
  phone_number: yup.string().required("Phone Number is required"),
  // .matches(
  //   /^(^+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/,
  address: yup.string().required("Address is required"),
  photo: yup.mixed().required("Photo is required"),
});

export const ProfilAuthPartner = yup.object({
  name: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .required(`Email is required`)
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      "Emails must contain symbols @"
    ),
  phone_number: yup.string().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  photo: yup.mixed().required("Photo is required"),
});
export const EventAuthPartner = yup.object({
  name: yup.string().required("Full Name is required"),
  location: yup.string().required("Address is required"),
  description: yup.string().required("Description is required"),
  term_condition: yup.string().required("Term & Condition is required"),
  start_date: yup.string().required("Start Date is required"),
  end_date: yup.string().required("End Date is required"),
  banner_picture: yup.mixed().required("Photo is required"),
  ticket: yup.array().of(
    yup.object().shape({
      name_class: yup.string().required("Name is required"),
      total: yup.string().required("Total Ticket is required"),
      price: yup.string().required("Price is required"),
      sell_start: yup.string().required("Date start is required"),
      sell_end: yup.string().required("Date end is required"),
    })
  ),
});
