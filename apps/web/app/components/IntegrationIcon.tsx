import Image from 'next/image';

interface IntegrationIconProps {
  id: string;
}

const IntegrationIcon = ({ id }: IntegrationIconProps) => {
  // Map IDs to specific icons

  const getIconContent = () => {
    switch (id) {
      case 'zillow':
        return (
          <Image src="/icon-z.png" alt="icon description" width={40} height={40} />
        );
      case 'redfin':
        return (
          <Image src="/icon-r.png" alt="icon description" width={40} height={40} />
        );
      case 'trulia':
        return (
          <Image src="/icon-t.png" alt="icon description" width={40} height={40} />
        );
      case 'realtor':
        return (
          <Image src="/icon-r2.png" alt="icon description" width={40} height={40} />
        );
      case 's3':
        return (
          <Image src="/icon-a.png" alt="icon description" width={40} height={40} />
        );
      case 'mysql':
        return (
          <Image src="/icon-m.png" alt="icon description" width={40} height={40} />
        );
      case 'mongodb':
        return (
          <Image src="/icon-mo.png" alt="icon description" width={40} height={40} />
        );
      case 'postgres':
        return (
          <Image src="/icon-p.png" alt="icon description" width={40} height={40} />
        );
      default:
        return <div className="w-12 h-12 rounded-xl bg-gray-100"></div>;
    }
  };

  return getIconContent();
};

export default IntegrationIcon;
