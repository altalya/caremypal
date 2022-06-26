import { useState } from 'react';

function RegForm(props: any) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [wh, setWh] = useState('');
  const [city, setCity] = useState('');
  const [field, setField] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e: any) => {
    // window.alert(`name: ${name}number: ${phone}`);
    e.preventDefault();
    await fetch('/api/workForceRegistration', {
      method: 'POST',
      body: JSON.stringify({ fname, lname, phone, wh, city, field, type }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      // console.log("res" + res.status)
      if (res.status === 200) {
        props.modal(1);
        console.log(`res success${res.status}`);
      } else {
        props.modal(0);
        console.log('failure');
      }
    });

    // const data = await response.json();
    // console.log("data" + Object.values(data[0]));
    // console.log("data"+Object.values(response));
  };

  return (
    <>
      <div className="w-full">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          method="POST"
        >
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="fname"
                className="block text-black text-sm font-bold mb-1"
              >
                First name
              </label>
              <input
                type="text"
                name="fname"
                id="floating_first_name"
                className="appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="lname"
                className="block text-black text-sm font-bold mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id="floating_last_name"
                className="appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder=" "
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
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
              // className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="phnumber"
              className="appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              onChange={(e: any) => {
                if (e.target.value.length > 10)
                  e.target.value = e.target.value.slice(0, 10);
                if (e.target.value[0] < 6)
                  e.target.value = e.target.value.slice(1, 10);
                setPhone(e.target.value);
              }}
              required
            />
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                className="block text-black text-sm font-bold mb-1"
                htmlFor="field"
              >
                Field
              </label>
              <select
                className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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

            <div className="relative z-0 w-full mb-6 group">
              <label
                className="block text-black text-sm font-bold mb-1"
                htmlFor="type"
              >
                Type
              </label>
              <select
                className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="Z">Select</option>
                <option value="C">Graduated/Certified</option>
                <option value="E">Experienced</option>
                <option value="G">General</option>
              </select>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                className="block text-black text-sm font-bold mb-1"
                htmlFor="wh"
              >
                Work Hours
              </label>
              <select
                className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="wh"
                onChange={(e) => {
                  setWh(e.target.value);
                }}
              >
                <option value="Z">Select</option>
                <option value="F">Full-time</option>
                <option value="P">Part-time</option>
                <option value="L">24 hrs Live-in</option>
              </select>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <label
                className="block text-black text-sm font-bold mb-1"
                htmlFor="city"
              >
                Current Place
              </label>
              <select
                className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default RegForm;
