import clsx from 'clsx';

export type InfoBoxProps = {
  title: string;
  subtitle: string;
  description: string;
};

const InfoBox = ({ title, subtitle, description }: InfoBoxProps) => {
  return (
    <div className="mx-auto max-w-[411px] text-center">
      {title !== '' && (
        <p className="typo-label font-bold uppercase text-green-100">{title}</p>
      )}
      <h1 className={clsx('typo-heading-bold-1', title !== '' && 'mt-[16px]')}>
        {subtitle}
      </h1>
      <p className="typo-sub-heading mt-[16px]">{description}</p>
    </div>
  );
};

export default InfoBox;
