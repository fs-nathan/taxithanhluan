import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16 sm:py-[1.5rem] xs:py-[1.5rem]'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl sm:text-base xs:text-base text-gray-900 font-bold">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl sm:text-base xs:text-base md:px-20">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
