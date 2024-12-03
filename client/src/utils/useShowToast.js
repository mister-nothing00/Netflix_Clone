// useToaster.js
import { toaster } from "../components/ui/toaster";

/**
 * Wrapper per creare un toast.
 * @param {string} title - Il titolo del toast.
 * @param {string} description - La descrizione del toast.
 * @param {string} type - Il tipo di toast ("success", "error", "loading", "info", ecc.).
 */
const useShowToast = () => {
  const showToast = ({ title, description, type  }) => {
    toaster.create({
      title,
      description,
      type,
    });
  };

  return showToast;
};

export default useShowToast;
