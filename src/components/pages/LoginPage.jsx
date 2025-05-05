import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { passwordIcon } from "../card/icons";
import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";
import { DataContext } from "../../context/DataContext";

import { useNavigate } from "react-router-dom";
// import ReactFacebookLogin from "react-facebook-login";

const LoginPage = () => {
  const { setUserInfo, saveToDB } = useContext(DataContext);
  const [signOption, setSignOption] = useState("signIn");
  const navigate = useNavigate();
  const handleSignUp = () => {
    setSignOption("signUp");
  };
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const result = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setUserInfo(result.data);
        saveToDB("user", result.data);
      } catch {
        () => console.error("login failed");
      }
      navigate("/");
    },
    onError: () => window.alert("login failed"),
  });
  // const facebookLogin = (response) => {
  //   if (response?.status === "unknown") {
  //     console.error("Sorry!", "Something went wrong with facebook Login.");
  //     return;
  //   }
  //   console.log(response);
  // };
  const handleSignIn = () => {
    setSignOption("signIn");
  };
  const signOptions = {
    signIn: (
      <form className="flex flex-col gap-2">
        <p>أو اكمل باستخدام البريد الإلكتروني</p>
        <div
          dir="ltr"
          className="bg-[#eee] rounded-[5px] py-1 px-2 flex items-center gap-2 justify-center"
        >
          <label htmlFor="mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 fill-[#7f7f7f]"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
          </label>
          <input
            type="e-mail"
            className="w-full outline-0 "
            id="mail"
            required
          />
        </div>
        <div
          dir="ltr"
          className="flex items-center justify-center gap-2 bg-[#eee] rounded-[5px] py-1 px-2"
        >
          <label htmlFor="password">{passwordIcon}</label>
          <input
            type="password"
            className="w-full outline-0"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 text-white font-bold hover:bg-sky-600 duration-200 py-1.5 rounded-full"
        >
          الدخول للقاعة
        </button>
        <p className="flex items-center justify-center text-sm font-bold gap-1 text-[#949494]">
          لا تمتلك حساب؟{" "}
          <span className="text-black cursor-pointer " onClick={handleSignUp}>
            إنشاء حساب
          </span>
        </p>
      </form>
    ),
    signUp: (
      <form className="flex flex-col gap-2">
        <p>قم بإنشاء حساب</p>
        <div
          dir="ltr"
          className="bg-[#eee] rounded-[5px] py-1 px-2 flex items-center gap-2 justify-center"
        >
          <label htmlFor="mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 fill-[#7f7f7f]"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
          </label>
          <input
            type="e-mail"
            className="w-full outline-0 "
            id="mail"
            required
          />
        </div>
        <div
          dir="ltr"
          className="flex items-center justify-center gap-2 bg-[#eee] rounded-[5px] py-1 px-2"
        >
          <label htmlFor="password">{passwordIcon}</label>
          <input
            type="password"
            className="w-full outline-0"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 text-white font-bold hover:bg-sky-600 duration-200 py-1.5 rounded-full"
        >
          بدأ البحث عن العريس
        </button>
        <p className="flex items-center justify-center text-sm font-bold gap-1 text-[#949494]">
          لديك حساب بالفعل؟
          <span className="text-black cursor-pointer" onClick={handleSignIn}>
            تسجيل الدخول
          </span>
        </p>
      </form>
    ),
  };
  return (
    <div
      dir="rtl"
      className="flex items-center justify-center font-Messiri h-[100vh] border border-[#eee]"
    >
      <div className="flex items-center justify-center gap-5 rounded-2xl  border border-[#eee] p-2">
        <div className="flex items-center justify-center bg-[#eee] rounded-2xl h-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 420 119.999999"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            className="w-100"
          >
            <defs>
              <g />
            </defs>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(48.104554, 86.764547)">
                <g>
                  <path d="M 44.765625 0 L 18.421875 0 L 18.421875 20.890625 C 11.984375 21.773438 7.070312 24.285156 3.6875 28.421875 L 3.6875 -7.4375 L 9.46875 -7.4375 L 9.46875 -48.703125 L 38.5625 -48.703125 C 39 -48.703125 39.691406 -48.570312 40.640625 -48.3125 C 43.390625 -47.5 44.765625 -45.460938 44.765625 -42.203125 Z M 29.984375 -7.4375 L 29.984375 -40.359375 C 29.984375 -42.722656 28.023438 -43.90625 24.109375 -43.90625 L 24.109375 -7.4375 Z M 29.984375 -7.4375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(92.726845, 86.764547)">
                <g>
                  <path d="M 48.3125 0.046875 L 39.078125 0.046875 C 39.078125 6.929688 31.210938 10.375 15.484375 10.375 C 11.890625 10.375 8.023438 9.0625 3.890625 6.4375 C 11.273438 6.695312 16.34375 6.304688 19.09375 5.265625 C 21.613281 4.347656 23.035156 2.609375 23.359375 0.046875 L 3.6875 0.046875 L 3.6875 -41.21875 C 3.6875 -46.007812 7.492188 -48.40625 15.109375 -48.40625 L 39.078125 -48.40625 L 39.078125 -7.390625 L 48.3125 -7.390625 Z M 24.296875 -7.390625 L 24.296875 -42.875 C 23.191406 -42.875 21.960938 -42.554688 20.609375 -41.921875 C 19.117188 -41.191406 18.375 -40.335938 18.375 -39.359375 L 18.375 -7.390625 Z M 24.296875 -7.390625 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(138.249194, 86.764547)">
                <g>
                  <path d="M -2.75 0.046875 L -2.75 -7.390625 L 18.90625 -7.390625 L 18.90625 -13.21875 C 18.90625 -17.414062 17.53125 -21.171875 14.78125 -24.484375 C 12.0625 -27.898438 9.109375 -29.609375 5.921875 -29.609375 L 5.921875 -37.375 L 33.640625 -90.8125 L 33.640625 -64.421875 L 18.765625 -35.4375 C 28.679688 -32.144531 33.640625 -24.972656 33.640625 -13.921875 L 33.640625 0.046875 Z M -2.75 0.046875 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(171.92911, 86.764547)">
                <g>
                  <path d="M 6.984375 -5.234375 C 6.984375 -7.628906 7.566406 -9.3125 8.734375 -10.28125 C 9.898438 -11.25 11.289062 -11.734375 12.90625 -11.734375 C 14.519531 -11.734375 15.941406 -11.25 17.171875 -10.28125 C 18.398438 -9.3125 19.015625 -7.628906 19.015625 -5.234375 C 19.015625 -2.910156 18.398438 -1.226562 17.171875 -0.1875 C 15.941406 0.84375 14.519531 1.359375 12.90625 1.359375 C 11.289062 1.359375 9.898438 0.84375 8.734375 -0.1875 C 7.566406 -1.226562 6.984375 -2.910156 6.984375 -5.234375 Z M 6.984375 -5.234375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(197.928745, 86.764547)">
                <g>
                  <path d="M 42.296875 -46.984375 L 42.296875 -7.390625 L 48.453125 -7.390625 L 48.453125 -39.609375 C 54.648438 -40.453125 59.5625 -42.976562 63.1875 -47.1875 L 63.1875 -7.390625 L 69.296875 -7.390625 L 69.296875 -39.609375 C 75.460938 -40.453125 80.359375 -42.976562 83.984375 -47.1875 L 83.984375 -7.390625 L 93.375 -7.390625 L 93.375 0.046875 L 41.875 0.046875 L 41.875 2.421875 C 41.875 4.878906 39.617188 6.769531 35.109375 8.09375 C 31.628906 9.425781 27.394531 10.09375 22.40625 10.09375 C 17.320312 10.09375 13.023438 9.476562 9.515625 8.25 C 5.628906 6.820312 3.6875 4.972656 3.6875 2.703125 L 3.6875 -44.4375 C 3.6875 -48.507812 6.5625 -51.066406 12.3125 -52.109375 C 13.195312 -52.265625 14.679688 -52.378906 16.765625 -52.453125 C 18.847656 -52.535156 21.550781 -52.578125 24.875 -52.578125 C 24.144531 -52.421875 23.429688 -52.191406 22.734375 -51.890625 C 22.046875 -51.585938 21.382812 -51.234375 20.75 -50.828125 C 19.195312 -49.753906 18.421875 -48.539062 18.421875 -47.1875 L 18.421875 1.75 C 18.421875 3.800781 19.984375 4.828125 23.109375 4.828125 C 26.148438 4.828125 27.585938 3.800781 27.421875 1.75 L 27.421875 -39.21875 C 33.585938 -40.070312 38.515625 -42.613281 42.203125 -46.84375 Z M 42.296875 -46.984375 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(288.452344, 86.764547)">
                <g>
                  <path d="M -2.796875 0.09375 L -2.796875 -7.390625 L 5.828125 -7.390625 L 5.828125 -40.6875 C 11.984375 -41.601562 16.910156 -44.144531 20.609375 -48.3125 L 20.609375 0.09375 Z M 10.703125 14.453125 C 10.703125 16.148438 9.832031 17 8.09375 17 L 2.984375 17 C 1.273438 17 0.421875 16.148438 0.421875 14.453125 L 0.421875 9.328125 C 0.421875 7.660156 1.273438 6.828125 2.984375 6.828125 L 8.09375 6.828125 C 9.832031 6.828125 10.703125 7.660156 10.703125 9.328125 Z M 21.796875 14.453125 C 21.796875 16.148438 20.925781 17 19.1875 17 L 14.0625 17 C 12.363281 17 11.515625 16.148438 11.515625 14.453125 L 11.515625 9.328125 C 11.515625 7.660156 12.363281 6.828125 14.0625 6.828125 L 19.1875 6.828125 C 20.925781 6.828125 21.796875 7.660156 21.796875 9.328125 Z M 21.796875 14.453125 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(311.947733, 86.764547)">
                <g>
                  <path d="M 33.25 0.046875 L 33.25 2.03125 C 33.25 6.675781 28.972656 9.613281 20.421875 10.84375 C 17.671875 11.226562 11.414062 10.3125 1.65625 8.09375 C 13.03125 8.570312 18.617188 6.078125 18.421875 0.609375 L 18.421875 -41.015625 C 24.585938 -41.867188 29.515625 -44.398438 33.203125 -48.609375 L 33.203125 -48.03125 L 33.25 -48.40625 L 33.25 -7.390625 L 43.765625 -7.390625 L 43.765625 0.046875 Z M 33.25 0.046875 " />
                </g>
              </g>
            </g>
            <g fill="#000000" fillOpacity="1">
              <g transform="translate(352.401486, 86.764547)">
                <g>
                  <path d="M 41.265625 0.09375 L -2.84375 0.09375 L -2.84375 -7.390625 L 5.875 -7.390625 L 5.875 -42.546875 C 5.875 -46.234375 11.6875 -48.078125 23.3125 -48.078125 C 35.28125 -48.078125 41.265625 -46.085938 41.265625 -42.109375 L 41.265625 -23.921875 C 34.472656 -22.972656 29.546875 -20.460938 26.484375 -16.390625 L 26.484375 -41.125 C 26.484375 -42.164062 25.488281 -42.6875 23.5 -42.6875 C 21.570312 -42.6875 20.609375 -42.164062 20.609375 -41.125 L 20.609375 -7.390625 L 41.265625 -7.390625 Z M 41.265625 0.09375 " />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-3xl">تسجيل الدخول</h3>
          <div className="flex flex-col gap-2 border-b border-[#eee] pb-3">
            <p>تسجيل الدخول باستخدام حسابك</p>
            <div className="flex gap-3">
              <button
                onClick={login}
                className="flex items-center  justify-center font-bold gap-2 py-0.5 w-full border border-[#eee] hover:shadow-sm duration-200 rounded-md "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  className="w-6"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                جوجل
              </button>
              {/* <button className="flex items-center justify-center font-sans gap-2 py-0.5 w-30 border border-[#eee] hover:shadow-sm duration-200 rounded-md font-semibold">
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </button> */}
              {/* <ReactFacebookLogin
                buttonStyle={{ padding: "6px" }}
                appId="946726573608245" // we need to get this from facebook developer console by setting the app.
                autoLoad={false}
                fields="name,email,picture"
                callback={facebookLogin}
              /> */}
            </div>
          </div>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={signOption}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
              >
                {signOptions[signOption]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
