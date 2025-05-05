import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import CartComponent from "../card/CartComponent";
import { NoGroomImage } from "../card/icons";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const CartPage = () => {
  const [method, setMethod] = useState("card");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const { cartList } = useContext(DataContext);

  const formatCardNumber = (number) => {
    if (!number) return "";
    return (
      number
        .replace(/\D/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") || ""
    );
  };

  const handleCardInput = (e) => {
    const unformatted = e.target.value;
    const onlyNums = unformatted.replace(/\D/g, "");

    if (onlyNums.length <= 16) {
      const formatted = formatCardNumber(onlyNums);
      setCardNumber(formatted);
    }
  };

  const chooseMethodHandler = (e) => {
    setMethod(e.target.value);
  };

  const handleExpirationInput = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 4) input = input.slice(0, 4);
    if (input.length >= 3) {
      input = input.slice(0, 2) + " / " + input.slice(2);
    }
    setExpirationDate(input);
  };
  const handleCVV = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    setCvv(input);
  };
  const paymentMethods = {
    card: (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 border-b pb-3  border-[#eee]/30">
          <p>اسم حامل البطاقة :</p>
          <input
            type="text"
            placeholder="الإسم"
            className="outline-0 "
            required
          />
        </div>
        <div className="flex flex-col gap-3 border-b pb-3  border-[#eee]/30">
          <p>رقم البطاقة :</p>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardInput}
            inputMode="numeric"
            maxLength={19}
            placeholder="الرقم"
            className="outline-0 "
            required
          />
        </div>
        <div className="flex items-center gap-10 ">
          <div className="flex flex-col gap-3 w-[150px]">
            <p>تاريخ الانتهاء :</p>

            <input
              type="text"
              placeholder="MM / YY"
              value={expirationDate}
              onChange={handleExpirationInput}
              inputMode="numeric"
              className="outline-0 border-b border-[#eee]/30 pb-3 "
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-[150px] ">
            <p> CVV :</p>

            <input
              type="text"
              placeholder="XXX"
              value={cvv}
              onChange={handleCVV}
              maxLength={3}
              minLength={3}
              inputMode="numeric"
              className="outline-0 border-b border-[#eee]/30 pb-3 "
              required
            />
          </div>
        </div>
      </div>
    ),
    paypal: (
      <div className="flex flex-col gap-3">
        <p>البريد الإلكتروني :</p>
        <input
          type="e-mail"
          placeholder="you@example.com"
          className="outline-0 border-b pb-3  border-[#eee]/30"
          required
        />
      </div>
    ),
    wallet: (
      <div className="flex flex-col gap-3">
        <p>رقم المحفظة :</p>
        <input
          type="tel"
          placeholder="الرقم"
          dir="rtl"
          className="outline-0 border-b pb-3  border-[#eee]/30"
          required
        />
      </div>
    ),
  };

  const toArabicNumber = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => {
        return /\d/.test(digit) ? arabicNumbers[digit] : digit;
      })
      .join("");
  };
  const totalPrice = cartList.reduce(
    (acc, curr) =>
      acc + Math.ceil(curr?.price - (curr?.discount / 100) * curr?.price),
    0
  );
  return (
    <div className="w-full flex  items-center justify-center ">
      {cartList.length ? (
        <div dir="rtl" className="font-Messiri flex gap-10 ">
          <div className="flex flex-col gap-3 ">
            <p className="text-4xl font-bold ">سلة العرسان</p>

            <div>
              <div className=" font-bold flex items-center w-[700px] text-center gap-3 pr-5">
                <p className="font-bold w-[257px]  ">العريس</p>
                <p className="font-bold w-[151px]  ">الجاهزية</p>
                <p className="font-bold w-[113px] ">الاستقرار</p>
                <p className="font-bold w-[75px] ">السعر</p>
              </div>
              <div dir="ltr" className="max-h-[530px] overflow-y-scroll w-fit">
                {cartList.map((item, index) => (
                  <CartComponent key={index} index={item?.id} {...item} />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">
                {" "}
                الإجمالي : {toArabicNumber(totalPrice)} ج.م.
              </p>
              <Link
                to={"/"}
                className="flex items-center justify-center gap-2 bg-violet-200 border hover:bg-violet-300 duration-250 text-violet-800 font-bold text-[17px] p-2 rounded-full"
              >
                اختيار كمان عريس
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 fill-violet-800 rotate-[-90deg]"
                >
                  <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#1e2a44] to-[#0f172a] text-white w-[380px] h-fit p-5 rounded-2xl  ">
            <p className="text-2xl font-bold border-b border-[#eee]/30 pb-4">
              معلومات الدفع{" "}
            </p>
            <div className="py-4 border-b border-[#eee]/30 flex flex-col gap-2 ">
              <p className=" ">طرق الدفع :</p>
              <div className="flex gap-2 items-center justify-center">
                <label htmlFor="creditPay" className="cursor-pointer">
                  <input
                    className="hidden peer"
                    type="radio"
                    name="payment-method"
                    id="creditPay"
                    value="card"
                    checked={method === "card"}
                    onChange={chooseMethodHandler}
                  />
                  <span className="flex  peer-checked:border-white items-center gap-2 border w-fit border-[#eee]/30 p-3 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-7 fill-[#eee]"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
                    </svg>
                    <p>
                      البطاقات <br />
                      الائتمانية
                    </p>
                  </span>
                </label>

                <label htmlFor="PayPal" className="cursor-pointer">
                  <input
                    type="radio"
                    name="payment-method"
                    id="PayPal"
                    className="hidden peer"
                    value="paypal"
                    checked={method === "paypal"}
                    onChange={chooseMethodHandler}
                  />
                  <span className="flex peer-checked:border-white items-center gap-2 border w-fit border-[#eee]/30 p-3 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="w-8 fill-[#eee]"
                    >
                      <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
                    </svg>
                    <p>باي بال</p>
                  </span>
                </label>

                <label htmlFor="onlineWallet" className="cursor-pointer">
                  <input
                    type="radio"
                    name="payment-method"
                    id="onlineWallet"
                    className="hidden peer"
                    value="wallet"
                    checked={method === "wallet"}
                    onChange={chooseMethodHandler}
                  />
                  <span className="flex peer-checked:border-white items-center gap-2 border w-fit border-[#eee]/30 p-3 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-7 fill-[#eee]"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <p>المحافظ الإلكترونية</p>
                  </span>
                </label>
              </div>
            </div>
            <form>
              <div className="py-4 flex flex-col gap-2 ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={method}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.2 }}
                  >
                    {paymentMethods[method]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <button className=" flex justify-center self-center w-full font-bold text-xl py-3 mt-3  bg-sky-500 hover:bg-sky-600 duration-250 rounded-full">
                على بركة الله
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col font-Messiri font-bold items-center justify-center gap-7 ">
          {NoGroomImage}
          <p className="  text-3xl text-[#c7c7c7]">
            ! الحقيلك عريس قبل ما يخلصوا
          </p>
          <Link
            to={"/"}
            className="border py-2 px-3 rounded-3xl mt-5 text-violet-800 bg-violet-200 hover:bg-violet-300 duration-300"
          >
            الرجوع إلى قائمة العرسان
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
