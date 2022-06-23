import { useState } from 'react';

function RegForm() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    // window.alert(`name: ${name}number: ${phone}`);

    const response = await fetch('/api/workForceRegistration', {
      method: 'POST',
      body: JSON.stringify({ fName, lName, phone }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(`data${data}`);
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
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
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                placeholder=" "
                required
                onChange={(e) => {
                  setFName(e.target.value);
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
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                placeholder=" "
                required
                onChange={(e) => {
                  setLName(e.target.value);
                }}
              />
            </div>
          </div>
          {/* <div className="mb-4">
            <label
              
              htmlFor="fname"
            >
              First Name
            </label>
            <input
              type="text"
              name="fname"
              
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
              <label
              className="block text-black text-sm font-bold mb-1"
              htmlFor="lname"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
              onChange={(e) => {
                setLName(e.target.value);
              }}
            />
          </div> */}
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-1"
              htmlFor="phnumber"
            >
              Phone Number
            </label>
            <input
              // className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="phnumber"
              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {/* <p className="text-red-500 text-xs italic">
              Phone number is mandatory
            </p> */}
          </div>

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export default RegForm;
