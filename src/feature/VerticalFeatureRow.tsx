import { useRef } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bulletPoints?: string[];
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const listRef = useRef(null);
  const containerRef = useRef(null);

  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div ref={containerRef} className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      {props.bulletPoints && (
        <div
          ref={listRef}
          className="w-full sm:w-1/2 text-center xs:text-left sm:text-left px-6"
        >
          {props.bulletPoints.map((p, index) => {
            return (
              <p
                className="leading-9 before:content-['✅']"
                key={`bullet-${index + 1}`}
              >
                {` ${p}`}
              </p>
            );
          })}
        </div>
      )}

      <div className="w-full p-6 flex items-center justify-center">
        <img
          className="object-fill"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
