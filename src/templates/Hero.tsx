// import Link from 'next/link';
import { useState } from 'react';

// import Modal from "react-modal";
import { Background } from '../background/Background';
import RegForm from '../components/RegForm';
// import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Logo />
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Live the life you want while receiving the care you need.\n'}
              <h1 className="text-primary-500">
                Caregivers, Nursing Attenders & Helpers for Careseekers
              </h1>
            </>
          }
          description="Reach out to us via Whatsapp or Call!"
          button={
            <button
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Toggle modal
            </button>

            // <button onClick={toggleModal}>Open modal</button>

            // <Link href="#">
            //   <a>`
            //     <Button xl>Contact Us!</Button>
            //   </a>
            // </Link>
          }
        />

        {showModal ? (
          <>
            {/* <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"> */}
            <div className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
              <div className="relative w-auto my-6 max-w-lg">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Registration Form
                    </h3>
                    <button
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    {/* </button> */}
                  </div>
                  <div className="relative p-6 flex-auto">
                    <RegForm />
                    {/* <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      </div>
                      <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      </div>
                      <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                      </div>
                      <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                        </div>
                  </form> */}
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Section>
      {/* <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
          >
                   </Modal> */}
    </Background>
  );
};

export { Hero };
