import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  child?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <div className="text-center">
    <h1 className="text-4xl sm:text-base xs:text-base text-gray-900 font-bold whitespace-pre-line">
      {props.title}
    </h1>
    <div className="text-2xl sm:text-base xs:text-base mt-4 mb-4 xs:my-2 sm:my-2">
      {props.description}
    </div>

    {props.child}
  </div>
);

export { HeroOneButton };
