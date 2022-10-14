import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`text-gray-900 flex flex-row items-center ${fontStyle} space-x-[5px]`}
    >
      <img
        width={48}
        height={48}
        src="/favicon-512x512.png"
        alt={AppConfig.site_name}
      />
      <span>{AppConfig.site_name}</span>
    </span>
  );
};

export { Logo };
