import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <div className="text-3xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </div>
    <div className="text-2xl mt-4 mb-16">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
