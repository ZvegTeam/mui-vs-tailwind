import { FC } from 'react';

type Props = {
  variant: 'accept' | 'cancel';
  title: string;
};

export const Button: FC<Props> = (props) => {
  const { title, variant } = props;

  let bgColorClassNames: string = 'bg-green-700 active:bg-green-800';

  if (variant === 'cancel') {
    bgColorClassNames = 'bg-red-600 active:bg-red-800';
  }

  return (
    <button
      className={
        'text-white w-full uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ' +
        bgColorClassNames
      }
      type="button"
    >
      {title}
    </button>
  );
};
