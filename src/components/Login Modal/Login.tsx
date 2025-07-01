import crossImage from "../../assets/ximage.png";
import guitar from "../../assets/guitar.png";
import google from "../../assets/google.png";
import email from "../../assets/email.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase/Firebase";
import { useLoginModal } from "../../context/LoginModal";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const { toggleModal } = useLoginModal();

  const notify = () =>
      toast("Login Successfully", {
        style: {
          backgroundColor: "#0d9488",
          color: "#fff",
          fontWeight: "bold",
        },
      });

  const handleClick = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, provider);
      toggleModal();
      notify()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="dialog-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-600/75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start justify-end">
                  <div
                    onClick={toggleModal}
                    className="mx-auto flex size-12 shrink-0 items-center cursor-pointer justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10"
                  >
                    <img className="w-4" src={crossImage} alt="cross_image" />
                  </div>

                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2"></div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img className="w-30" src={guitar} alt="guitar_img" />
                </div>
                <div className="flex items-center justify-center mt-6">
                  <p className="font-bold">
                    Help us become one of the safest places{" "}
                  </p>
                </div>
                <div className="flex items-center justify-center ">
                  <p className="font-bold">to buy and sell </p>
                </div>
                <div className="flex items-center justify-center mt-10 relative ">
                  <img
                    className="w-8 absolute left-13 cursor-pointer"
                    src={google}
                    alt="google_logo"
                  />
                  <button
                    onClick={handleClick}
                    className="border-2 w-96 h-12 text-center cursor-pointer font-bold"
                  >
                    Continue with Google
                  </button>
                </div>
                <div className="flex items-center justify-center mt-3 relative">
                  <img
                    className="w-8 absolute left-13 cursor-pointer"
                    src={email}
                    alt="email logo"
                  />
                  <input
                    className="border-2 w-96 h-12 text-center cursor-pointer font-bold"
                    type="text"
                    disabled
                    value="Login with Email"
                  />
                </div>

                <div className="flex items-center justify-center mt-40">
                  <span className="font-extralight font-sans text-[12px]">
                    All your personal details are safe with us.
                  </span>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <span className="font-extralight font-sans text-[12px]">
                    {" "}
                    If you continue, you are accepting{" "}
                    <a
                      className="text-blue-600"
                      href="https://help.olx.in/hc/en-us"
                    >
                      OLX Terms and
                    </a>
                  </span>
                </div>
                <div className="flex items-center justify-center ">
                  <span className="font-extralight font-sans text-[12px]">
                    <a
                      className="text-blue-600"
                      href="https://help.olx.in/hc/en-us"
                    >
                      Conditions and Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
