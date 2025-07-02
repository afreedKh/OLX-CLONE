import crossImage from "../../assets/ximage.png";
import guitar from "../../assets/guitar.png";
import google from "../../assets/google.png";
import emails from "../../assets/email.png";
import { signInWithPopup } from "firebase/auth";
import { auth, login, provider, signup } from "../../Firebase/Firebase";
import { useLoginModal } from "../../context/LoginModal";
import { useState } from "react";
import { Toastify } from "../Toastify/Toastify";

const Login: React.FC = () => {
  const { toggleModal } = useLoginModal();
  const [signState, setSignState] = useState<"login" | "signup">("login");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit() {
    try {
      if (signState == "signup") {
        await signup({ name, email, password });
        toggleModal();
      } else if (signState == "login") {
        await login({ name, email, password });
        toggleModal();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const toggleEmailAndPasswordModal = () => {
    setOpenModal(!openModal);
  };

  const handleClick = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, provider);
      toggleModal();
      Toastify("Login Successfully");
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
                  {openModal && signState == "login" && (
                    <p className="font-bold text-3xl">Login with Email</p>
                  )}

                  {openModal && signState == "signup" && (
                    <p className="font-bold text-3xl">Sinup with Email</p>
                  )}

                  {!openModal && (
                    <p className="font-bold">
                      Help us become one of the safest places{" "}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-center ">
                  {!openModal && <p className="font-bold">to buy and sell </p>}
                </div>

                {openModal && signState == "signup" && (
                  <div className="flex items-center justify-center mt-10 relative ">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="border-2 w-96 h-12  font-bold pl-3"
                      placeholder="Name"
                    />
                  </div>
                )}

                <div className="flex items-center justify-center mt-3 relative ">
                  {openModal ? (
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="border-2 w-96 h-12  font-bold pl-3"
                      placeholder="Email"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
                <div className="flex items-center justify-center mt-3 relative">
                  {openModal ? (
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="border-2 w-96 h-12  font-bold pl-3"
                      placeholder="Password"
                    />
                  ) : (
                    <>
                      <img
                        className="w-8 absolute left-13 cursor-pointer"
                        src={emails}
                        alt="email logo"
                      />
                      <button
                        className="border-2 w-96 h-12 text-center cursor-pointer font-bold"
                        onClick={toggleEmailAndPasswordModal}
                      >
                        Login with Email
                      </button>
                    </>
                  )}
                </div>
                {openModal && (
                  <>
                    <div className="flex items-center justify-center mt-3 relative">
                      {signState == "login" && (
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="border-2 w-96 h-12 text-center cursor-pointer font-bold bg-black text-white"
                        >
                          Login
                        </button>
                      )}
                      {signState == "signup" && (
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="border-2 w-96 h-12 text-center cursor-pointer font-bold bg-black text-white"
                        >
                          Signup
                        </button>
                      )}
                    </div>

                    <div className="form-switch mt-10 text-center text-[#737373]">
                      {signState == "login" && (
                        <p>
                          New to OLX?{" "}
                          <span
                            onClick={() => setSignState("signup")}
                            className="ml-[6px] text-blue-600 font-medium cursor-pointer"
                          >
                            Sign up now
                          </span>{" "}
                        </p>
                      )}
                      {signState == "signup" && (
                        <p>
                          Already have account? {}
                          <span
                            onClick={() => setSignState("login")}
                            className="ml-[6px] text-blue-600 font-medium cursor-pointer"
                          >
                            Login now
                          </span>{" "}
                        </p>
                      )}
                    </div>
                  </>
                )}

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
