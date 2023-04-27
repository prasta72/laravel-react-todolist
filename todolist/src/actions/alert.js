import toast from "react-hot-toast";

export const showErrorAlerts = (errors) => {
  
  if (typeof errors === "object") {
    const message = Object.values(errors).reduce(
      (accum, next) => [...accum, ...next],
      []
    );
    if (message.length > 0) {
      message.forEach((item) => {
        toast.error(item);
      });
    }
  } else{
     toast.error(errors)
    };
};

export const showErrorAlert = (error) => {
  toast.error(error.message);
};

export const showSuccessAlert = (message) => {
  toast.success(message);
};
