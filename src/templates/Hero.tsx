import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => {
  return (
    <Background color="bg-gray-100">
      {/* <Section yPadding="py-6">
        <Logo />
      </Section> */}

      <Section yPadding="pt-10 pb-5">
        <HeroOneButton
          title={
            <>
              {'Live the life you want while receiving the care you need.\n'}
              {/* <h1 className="text-primary-500">
                Caregivers, Nursing Attenders & Helpers for Careseekers
              </h1> */}
            </>
          }
          description="Reach out to us via Whatsapp or Call!"
          button={
            <a></a>

            // <Link href="#">
            //   <a>`
            //     <Button xl>Contact Us!</Button>
            //   </a>
            // </Link>
          }
        />
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
