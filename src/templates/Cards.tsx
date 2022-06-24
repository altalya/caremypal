const Cards = () => {
  return (
    <div className="container p-15">
      <div className="text-gray-900 text-2xl font-semibold pl-5 pb-2">
        Our Services
      </div>
      <div className="container flex justify-between">
        <div className="flex justify-center mx-2">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="/assets/images/elderly-care.jpeg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Elderly Care
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-2">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="/assets/images/patient-care.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Patient Care
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-2">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="/assets/images/baby-care.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Baby Care
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-2">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="/assets/images/home-care.jpeg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Home Care
              </h5>
              {/* <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
