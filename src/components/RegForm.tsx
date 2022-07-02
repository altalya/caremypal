import { useState } from 'react';

function RegForm(props: any) {
  const [loader, setLoader] = useState(0);
  const [fname, setFname] = useState('');
  const [prof, setProf] = useState('');
  const [phone, setPhone] = useState();
  const [wh, setWh] = useState('');
  const [city, setCity] = useState('');
  const [field, setField] = useState('');
  const [cook, setCook] = useState('');
  const [phErrMsg, setPhErrMsg] = useState('');
  const textCss =
    'appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';
  const selectCss =
    'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (String(phone).length < 10) {
      setPhErrMsg('Enter a valid 10 digit mobile number');
    } else {
      setLoader(1);
      await fetch('/api/workForceRegistration', {
        method: 'POST',
        body: JSON.stringify({ fname, prof, phone, wh, city, field, cook }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setLoader(0);
          if (res.ok) {
            props.modal(1);
          } else {
            throw new Error('Something went wrong');
          }
        })
        .catch(() => {
          setLoader(0);
          props.modal(0);
        });
    }
  };

  return (
    <>
      <div className="w-full">
        <form
          className="bg-white rounded px-8 pb-8 mb-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          method="POST"
        >
          <div className="relative z-0 w-full mb-3 group">
            <label
              htmlFor="fname"
              className="block text-black text-sm font-bold mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              name="fname"
              id="floating_first_name"
              className={textCss}
              placeholder=" "
              onChange={(e) => {
                if (e.target.value.length > 100) {
                  e.target.value = e.target.value.slice(0, 100);
                }
                if (/^[a-zA-Z ]*$/.test(e.target.value) === false) {
                  e.target.value = e.target.value.slice(
                    0,
                    e.target.value.length - 1
                  );
                }
                setFname(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-1"
              htmlFor="phnumber"
            >
              Phone Number
              <span>*</span>
            </label>
            <input
              type="number"
              name="phnumber"
              className={textCss}
              maxLength={10}
              onChange={(e: any) => {
                setPhErrMsg('');
                if (e.target.value.length > 10)
                  e.target.value = e.target.value.slice(0, 10);
                if (e.target.value[0] < 6)
                  e.target.value = e.target.value.slice(1, 10);
                setPhone(e.target.value);
              }}
              required
            />
            {phErrMsg !== '' ? (
              <p className="p-2 mb-2 text-sm text-red-700">{phErrMsg}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              className="block text-black text-sm font-bold mb-1"
              htmlFor="prof"
            >
              Profession
            </label>
            <select
              className={selectCss}
              name="prof"
              onChange={(e) => {
                setProf(e.target.value);
              }}
            >
              <option value="Z">Select</option>
              <option value="N">Graduated/Certified Nurse</option>
              <option value="T">Pre-School Teachers</option>
              <option value="P">Physiotherapist</option>
              <option value="C">Caretaker</option>
            </select>
          </div>

          {prof === 'N' || prof === 'P' ? <></> : <div></div>}
          {prof === 'C' ? (
            <>
              <div className="relative z-0 w-full mb-6 group">
                <label
                  className="block text-black text-sm font-bold mb-1"
                  htmlFor="field"
                >
                  Care
                </label>
                <select
                  className={selectCss}
                  name="field"
                  onChange={(e) => {
                    setField(e.target.value);
                  }}
                >
                  <option value="Z">Select</option>
                  <option value="E">Elderly Care</option>
                  <option value="P">Patient Care</option>
                  <option value="B">Baby Care</option>
                  <option value="H">Home Care</option>
                </select>
              </div>
            </>
          ) : (
            <div></div>
          )}
          {field === 'H' ? (
            <div className="relative z-0 w-full mb-6 group">
              <label
                className="block text-black text-sm font-bold mb-1"
                htmlFor="cook"
              >
                Cook
              </label>

              <div className="flex justify-left">
                <div className="form-check form-check-inline mr-4">
                  <input
                    type="radio"
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                    name="cook"
                    id="Y"
                    value="Y"
                    onChange={(e) => {
                      setCook(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="Y"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    name="cook"
                    id="N"
                    value="N"
                    onChange={(e) => {
                      setCook(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="N"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {prof === 'N' || prof === 'C' || prof === 'T' ? (
            <>
              <div className="relative z-0 w-full mb-6 group">
                <label
                  className="block text-black text-sm font-bold mb-1"
                  htmlFor="wh"
                >
                  Work Hours
                </label>
                <select
                  className={selectCss}
                  name="wh"
                  onChange={(e) => {
                    setWh(e.target.value);
                  }}
                >
                  <option value="Z">Select</option>
                  <option value="H">On-Demand/Hourly</option>
                  <option value="F">Full-time</option>
                  <option value="P">Part-time</option>
                  <option value="L">24 hrs Live-in</option>
                </select>
              </div>
            </>
          ) : (
            <div></div>
          )}
          <div className="relative z-0 w-full mb-6 group">
            <label
              className="block text-black text-sm font-bold mb-1"
              htmlFor="city"
            >
              Current Place
            </label>
            <select
              className={selectCss}
              name="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value="Z">Select</option>
              <option value="CH">Chennai</option>
              <option value="CB">Coimbatore</option>
              <option value="T">Within TamilNadu</option>
              <option value="OS">Outside TamilNadu</option>
            </select>
          </div>
          {/* </div> */}
          <div className="flex items-center justify-end border-t p-3 border-solid border-blueGray-200 rounded-b">
            {loader === 1 ? (
              <button
                disabled
                type="button"
                className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
              >
                <svg
                  role="status"
                  className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Submitting...
              </button>
            ) : (
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default RegForm;
