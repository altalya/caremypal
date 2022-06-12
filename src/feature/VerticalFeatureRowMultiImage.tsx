import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  image2: string;
  image2Alt: string;
  image3: string;
  image3Alt: string;
  image4: string;
  image4Alt: string;
  reverse?: boolean;
};

const VerticalFeatureRowMultiImage = (props: IVerticalFeatureRowProps) => {
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
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
          className="float-left"
        />
        <img
          src={`${router.basePath}${props.image2}`}
          alt={props.image2Alt}
          className="float-left"
        />
        <img
          src={`${router.basePath}${props.image3}`}
          alt={props.image3Alt}
          width="210"
          className="float-left clear-both"
        />
        <img
          src={`${router.basePath}${props.image4}`}
          alt={props.image4Alt}
          width="210"
          className="float-left"
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRowMultiImage };
