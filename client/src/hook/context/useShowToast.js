// useShowToast.js

import { createToaster } from "@chakra-ui/react";

const toaster = createToaster({
  placement: "bottom-left", 
  max: 3, 
  offset: "20px", 
});

const useShowToast = () => {
  const showToast = (title, description, type = "info") => {
    toaster.create({
      title: title,
      description: description,
      type: type,
      duration: 2500, 
      isClosable: true, 
    });
  };

  return showToast;
};

export default useShowToast;