import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
    lockNFT,
    BridgeNFT,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center pb-12">
      <div className="flex mf:flex-row flex-col items-start justify-between">
        <div className="p-5 w-full flex flex-col justify-start items-start blue-glassmorphism z-40">
          <div>
            <div>
              <p className="py-3 px-2 font-3xl font-bold text-[#968FA8] font-serif">From</p>

            </div>
            <div class="grid grid-cols-3 gap-4 my-7">
              <div className="group inline-block relative">
                <button
                  className="font-medium text-gray-600 hover:text-[#F2175D] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <span className="mr-1">Select Network</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </button>
                <div className="grid grid-cols-1 bg-white shadow-2xl rounded-md absolute hidden pt-3 group-hover:block group-hover:absolute group font-medium text-gray-600 hover:text-gray-900 flex items-center transition duration-150 ease-in-out z-40" >
                  <div className="group-hover: w-96 ">
                    <a
                      href="#" className="rounded-t py-1 px-2 block whitespace-no-wrap font-medium text-gray-600 hover:text-[#F2175D] px-5 py-3 flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out "

                      passHref >
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" preserveAspectRatio="xMidYMid" viewBox="-38.39985 -104.22675 332.7987 625.3605"><path fill="#343434" d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" /><path fill="#8C8C8C" d="M127.962 287.959V0L0 212.32z" /><path fill="#3C3C3B" d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" /><path fill="#8C8C8C" d="M0 236.585l127.962 180.32v-104.72z" /><path fill="#141414" d="M127.961 154.159v133.799l127.96-75.637z" /><path fill="#393939" d="M127.96 154.159L0 212.32l127.96 75.637z" /></svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Mainnet</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="group-hover: w-96">
                    <a
                      href="/pulse" type="button" className="overflow-hidden rounded-t py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] hover:bg-[#f5f5f5] px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"

                      passHref >
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#F2F1FF]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#8247E5" /><path fill="#fff" d="M681.469 402.456C669.189 395.312 653.224 395.312 639.716 402.456L543.928 457.228L478.842 492.949L383.055 547.721C370.774 554.865 354.81 554.865 341.301 547.721L265.162 504.856C252.882 497.712 244.286 484.614 244.286 470.325V385.786C244.286 371.498 251.654 358.4 265.162 351.256L340.073 309.581C352.353 302.437 368.318 302.437 381.827 309.581L456.737 351.256C469.018 358.4 477.614 371.498 477.614 385.786V440.558L542.7 403.646V348.874C542.7 334.586 535.332 321.488 521.824 314.344L383.055 235.758C370.774 228.614 354.81 228.614 341.301 235.758L200.076 314.344C186.567 321.488 179.199 334.586 179.199 348.874V507.237C179.199 521.525 186.567 534.623 200.076 541.767L341.301 620.353C353.582 627.498 369.546 627.498 383.055 620.353L478.842 566.772L543.928 529.86L639.716 476.279C651.996 469.135 667.961 469.135 681.469 476.279L756.38 517.953C768.66 525.098 777.257 538.195 777.257 552.484V637.023C777.257 651.312 769.888 664.409 756.38 671.553L681.469 714.419C669.189 721.563 653.224 721.563 639.716 714.419L564.805 672.744C552.525 665.6 543.928 652.502 543.928 638.214V583.442L478.842 620.353V675.125C478.842 689.414 486.21 702.512 499.719 709.656L640.944 788.242C653.224 795.386 669.189 795.386 682.697 788.242L823.922 709.656C836.203 702.512 844.799 689.414 844.799 675.125V516.763C844.799 502.474 837.431 489.377 823.922 482.232L681.469 402.456Z" /></svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Polygon</div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="group-hover: w-96 ">
                    <a
                      href="#" type="button" className="rounded-t overflow-hidden py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"

                      passHref>
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#EFF6FF]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 600 600" fill="none">
                            <rect width="600" height="600" rx="300" fill="#04795B" />
                            <path d="M218.491 327.173C230.306 327.173 241.213 323.236 249.999 316.422L177.893 244.342C171.076 252.973 167.138 263.876 167.138 275.839C166.986 304.156 190.012 327.173 218.491 327.173Z" fill="#EFEFEF" />
                            <path d="M432.99 275.687C432.99 263.876 429.052 252.973 422.235 244.19L350.129 316.27C358.763 323.084 369.67 327.021 381.637 327.021C409.965 327.173 432.99 304.156 432.99 275.687Z" fill="#EFEFEF" />
                            <path d="M469.346 197.4L437.383 229.351C447.987 242.071 454.349 258.123 454.349 275.991C454.349 316.119 421.78 348.676 381.637 348.676C363.914 348.676 347.705 342.316 334.98 331.716L299.988 366.696L264.995 331.716C252.271 342.316 236.213 348.676 218.338 348.676C178.195 348.676 145.627 316.119 145.627 275.991C145.627 258.274 151.989 242.071 162.593 229.351L146.232 212.997L130.63 197.4C112.452 227.383 102 262.363 102 299.917C102 409.247 190.617 497.681 299.836 497.681C409.056 497.681 497.673 409.096 497.673 299.917C497.976 262.211 487.524 227.231 469.346 197.4Z" fill="#EFEFEF" />
                            <path d="M443.139 163.328C407.238 125.623 356.339 102 299.988 102C243.636 102 192.889 125.623 156.836 163.328C151.989 168.477 147.293 173.928 142.9 179.531L299.836 336.41L456.773 179.38C452.834 173.928 448.138 168.325 443.139 163.328ZM299.988 127.743C346.342 127.743 389.363 145.611 421.629 178.168L299.988 299.764L178.347 178.168C210.764 145.611 253.634 127.743 299.988 127.743Z" fill="#EFEFEF" />
                          </svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Gnosis</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="group-hover: w-96 ">
                    <a
                      href="#" type="button" className="rounded-t overflow-hidden py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"

                      passHref>
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="blue-300" xmlns="http://www.w3.org/2000/svg" className="">
                            <path opacity="0.6" fill="red" d="M11.868 6.078h4.053v4.053h-4.053z"></path>
                            <path opacity="0.2" fill="red" d="M11.868 11.867h4.053v4.053h-4.053z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z" fill="red"></path>

                            <path fillRule="evenodd" clipRule="evenodd" d="M19.317 5.367H5.366V22H22V5.367h-2.683zm0 2.682H8.05v11.269h11.268V8.049z" fill="red"></path>
                            <path fill="red" d="M13.952 5.367h2.683V8.05h-2.683zM5.366 13.951h2.683v2.683H5.366z"></path>

                          </svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Optimism</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="group-hover: w-96">
                    <a
                      href="#" type="button" className="rounded-t overflow-hidden py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"

                      passHref>
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="blue-300" xmlns="http://www.w3.org/2000/svg" className="">
                            <path opacity="0.6" fill="red" d="M11.868 6.078h4.053v4.053h-4.053z"></path>
                            <path opacity="0.2" fill="red" d="M11.868 11.867h4.053v4.053h-4.053z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z" fill="red"></path>

                            <path fillRule="evenodd" clipRule="evenodd" d="M19.317 5.367H5.366V22H22V5.367h-2.683zm0 2.682H8.05v11.269h11.268V8.049z" fill="red"></path>
                            <path fill="red" d="M13.952 5.367h2.683V8.05h-2.683zM5.366 13.951h2.683v2.683H5.366z"></path>

                          </svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Arbitrum</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="form-text form-floating col-span-2 px-3 ">
                <Input
                  placeholder="0.0"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                  className="form-control text-xl rounded-lg"
                  id="floatingInput"
                />
              </div>
            </div>


          </div>
        </div>

      </div>
      <div className="py-3">
        <svg class="h-10 w-10 fill-[#B32EFF]" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"></path></svg>
      </div>
      <div className="flex mf:flex-row flex-col items-start justify-between z-20">
        <div className="p-5 w-full flex flex-col justify-start items-start blue-glassmorphism">
          <div>
            <div>
              <p className="py-3 px-2 font-3xl font-bold text-[#968FA8] font-serif">To</p>

            </div>
            <div class="grid grid-cols-3 gap-4 my-7">
              <div className="group inline-block relative">
                <button
                  className="font-medium text-gray-600 hover:text-[#F2175D] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <span className="mr-1">Select Network</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </button>
                <div className="grid grid-cols-1 bg-white shadow-2xl rounded-md absolute hidden pt-3 group-hover:block group-hover:absolute group font-medium text-gray-600 hover:text-gray-900 flex items-center transition duration-150 ease-in-out z-40" >
                  <div className="group-hover: w-96 ">
                    <a
                      href="#" className="rounded-t py-1 px-2 block whitespace-no-wrap font-medium text-gray-600 hover:text-[#F2175D] px-5 py-3 flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out "

                      passHref >
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" preserveAspectRatio="xMidYMid" viewBox="-38.39985 -104.22675 332.7987 625.3605"><path fill="#343434" d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z" /><path fill="#8C8C8C" d="M127.962 287.959V0L0 212.32z" /><path fill="#3C3C3B" d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z" /><path fill="#8C8C8C" d="M0 236.585l127.962 180.32v-104.72z" /><path fill="#141414" d="M127.961 154.159v133.799l127.96-75.637z" /><path fill="#393939" d="M127.96 154.159L0 212.32l127.96 75.637z" /></svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Mainnet</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="group-hover: w-96">
                    <a
                      href="#" type="button" className="overflow-hidden rounded-t py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] hover:bg-[#f5f5f5] px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"

                      passHref >
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#F2F1FF]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#8247E5" /><path fill="#fff" d="M681.469 402.456C669.189 395.312 653.224 395.312 639.716 402.456L543.928 457.228L478.842 492.949L383.055 547.721C370.774 554.865 354.81 554.865 341.301 547.721L265.162 504.856C252.882 497.712 244.286 484.614 244.286 470.325V385.786C244.286 371.498 251.654 358.4 265.162 351.256L340.073 309.581C352.353 302.437 368.318 302.437 381.827 309.581L456.737 351.256C469.018 358.4 477.614 371.498 477.614 385.786V440.558L542.7 403.646V348.874C542.7 334.586 535.332 321.488 521.824 314.344L383.055 235.758C370.774 228.614 354.81 228.614 341.301 235.758L200.076 314.344C186.567 321.488 179.199 334.586 179.199 348.874V507.237C179.199 521.525 186.567 534.623 200.076 541.767L341.301 620.353C353.582 627.498 369.546 627.498 383.055 620.353L478.842 566.772L543.928 529.86L639.716 476.279C651.996 469.135 667.961 469.135 681.469 476.279L756.38 517.953C768.66 525.098 777.257 538.195 777.257 552.484V637.023C777.257 651.312 769.888 664.409 756.38 671.553L681.469 714.419C669.189 721.563 653.224 721.563 639.716 714.419L564.805 672.744C552.525 665.6 543.928 652.502 543.928 638.214V583.442L478.842 620.353V675.125C478.842 689.414 486.21 702.512 499.719 709.656L640.944 788.242C653.224 795.386 669.189 795.386 682.697 788.242L823.922 709.656C836.203 702.512 844.799 689.414 844.799 675.125V516.763C844.799 502.474 837.431 489.377 823.922 482.232L681.469 402.456Z" /></svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Polygon</div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="group-hover: w-96 ">
                    <a
                      href="#" type="button" className="rounded-t overflow-hidden py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"

                      passHref>
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#EFF6FF]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 600 600" fill="none">
                            <rect width="600" height="600" rx="300" fill="#04795B" />
                            <path d="M218.491 327.173C230.306 327.173 241.213 323.236 249.999 316.422L177.893 244.342C171.076 252.973 167.138 263.876 167.138 275.839C166.986 304.156 190.012 327.173 218.491 327.173Z" fill="#EFEFEF" />
                            <path d="M432.99 275.687C432.99 263.876 429.052 252.973 422.235 244.19L350.129 316.27C358.763 323.084 369.67 327.021 381.637 327.021C409.965 327.173 432.99 304.156 432.99 275.687Z" fill="#EFEFEF" />
                            <path d="M469.346 197.4L437.383 229.351C447.987 242.071 454.349 258.123 454.349 275.991C454.349 316.119 421.78 348.676 381.637 348.676C363.914 348.676 347.705 342.316 334.98 331.716L299.988 366.696L264.995 331.716C252.271 342.316 236.213 348.676 218.338 348.676C178.195 348.676 145.627 316.119 145.627 275.991C145.627 258.274 151.989 242.071 162.593 229.351L146.232 212.997L130.63 197.4C112.452 227.383 102 262.363 102 299.917C102 409.247 190.617 497.681 299.836 497.681C409.056 497.681 497.673 409.096 497.673 299.917C497.976 262.211 487.524 227.231 469.346 197.4Z" fill="#EFEFEF" />
                            <path d="M443.139 163.328C407.238 125.623 356.339 102 299.988 102C243.636 102 192.889 125.623 156.836 163.328C151.989 168.477 147.293 173.928 142.9 179.531L299.836 336.41L456.773 179.38C452.834 173.928 448.138 168.325 443.139 163.328ZM299.988 127.743C346.342 127.743 389.363 145.611 421.629 178.168L299.988 299.764L178.347 178.168C210.764 145.611 253.634 127.743 299.988 127.743Z" fill="#EFEFEF" />
                          </svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Gnosis</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="group-hover: w-96 ">
                    <a
                      href="#" type="button" className="rounded-t overflow-hidden py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"

                      passHref>
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="blue-300" xmlns="http://www.w3.org/2000/svg" className="">
                            <path opacity="0.6" fill="red" d="M11.868 6.078h4.053v4.053h-4.053z"></path>
                            <path opacity="0.2" fill="red" d="M11.868 11.867h4.053v4.053h-4.053z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z" fill="red"></path>

                            <path fillRule="evenodd" clipRule="evenodd" d="M19.317 5.367H5.366V22H22V5.367h-2.683zm0 2.682H8.05v11.269h11.268V8.049z" fill="red"></path>
                            <path fill="red" d="M13.952 5.367h2.683V8.05h-2.683zM5.366 13.951h2.683v2.683H5.366z"></path>

                          </svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Optimism</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="group-hover: w-96">
                    <a
                      href="#" type="button" className="rounded-t overflow-hidden py-1 px-2 block whitespace font-medium text-gray-600 hover:text-[#F2175D] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"

                      passHref>
                      <div className="flex flex-row px-3 cursor-pointer">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="blue-300" xmlns="http://www.w3.org/2000/svg" className="">
                            <path opacity="0.6" fill="red" d="M11.868 6.078h4.053v4.053h-4.053z"></path>
                            <path opacity="0.2" fill="red" d="M11.868 11.867h4.053v4.053h-4.053z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z" fill="red"></path>

                            <path fillRule="evenodd" clipRule="evenodd" d="M19.317 5.367H5.366V22H22V5.367h-2.683zm0 2.682H8.05v11.269h11.268V8.049z" fill="red"></path>
                            <path fill="red" d="M13.952 5.367h2.683V8.05h-2.683zM5.366 13.951h2.683v2.683H5.366z"></path>

                          </svg>
                        </div>
                        <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                          <div className="font-bold">Arbitrum</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="form-text form-floating col-span-2 px-3 ">
                <Input
                  placeholder="0.0"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                  className="form-control text-xl rounded-lg"
                  id="floatingInput"
                />
              </div>
            </div>


          </div>
        </div>

      </div>
      <div className="flex mf:flex-row flex-col items-start justify-between z-10 py-7">
        <div className="p-5 w-full flex flex-col justify-start items-start blue-glassmorphism">
          <div>
            <div>
              <p className="py-1 pt-3 px-1 font-3xl font-bold text-[#968FA8] font-serif">Enter Address</p>

            </div>
            <div class="my-10 mt-4">
              <div class="w-96 form-text form-floating col-span-2 px-1 ">
                <Input
                  placeholder="0x123..."
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                  className="form-control text-xl rounded-lg"
                  id="floatingInput"
                />
              </div>
            </div>


          </div>
        </div>

      </div>
      <div className="flex flex-row py-7 px-3">
        <button className="mx-8 px-5 py-3 flex items-center text-xl text-white blue-glassmorphism">Approve</button>
        <button className="mx-8 px-7 py-3 flex items-center text-xl text-white blue-glassmorphism">Send</button>
      </div>
    </div>
  );
};

export default Welcome;
